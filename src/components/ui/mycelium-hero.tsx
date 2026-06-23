"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

// ── Tunables ──────────────────────────────────────────────────────────────────
const BG = "#fff9ed";
const MAX_DEPTH = 5;
const BASE_LENGTH = 115;
const LENGTH_DECAY = 0.65;
const HOVER_RADIUS = 80;
const MOUSE_RADIUS = 200;
const ROOT_LINE_W = 2.4;

// Signal propagation system
const REST_BRIGHTNESS = 0.18;  // base color brightness at rest
const REST_ALPHA      = 0.22;  // base stroke opacity — muted but present
const SIGNAL_ALPHA    = 0.95;  // opacity cap when fully lit
const DECAY_RATE      = 0.055; // signal *= (1 - DECAY_RATE) per frame; ~2s half-life
const PROP_FACTOR     = 0.85;  // fraction of cursor boost passed to each neighbor per frame

// ── Types ─────────────────────────────────────────────────────────────────────
interface MNode {
  x: number;
  y: number;
  cpx: number;
  cpy: number;
  depth: number;
  parent: MNode | null;
  children: MNode[];
  signal: number;
  incoming: number;
  lw: number;
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function hyphaColor(brightness: number, alpha: number): string {
  // dim: #6b682c → bright: #D6CF58
  const r = Math.round(lerp(107, 214, brightness));
  const g = Math.round(lerp(104, 207, brightness));
  const b = Math.round(lerp(44, 88, brightness));
  return `rgba(${r},${g},${b},${alpha.toFixed(2)})`;
}

function drawPartialBezier(
  ctx: CanvasRenderingContext2D,
  p0x: number, p0y: number,
  cpx: number, cpy: number,
  p2x: number, p2y: number,
  t: number
) {
  if (t <= 0) return;
  ctx.moveTo(p0x, p0y);
  if (t >= 1) {
    ctx.quadraticCurveTo(cpx, cpy, p2x, p2y);
    return;
  }
  const q0x = lerp(p0x, cpx, t);
  const q0y = lerp(p0y, cpy, t);
  const q1x = lerp(cpx, p2x, t);
  const q1y = lerp(cpy, p2y, t);
  ctx.quadraticCurveTo(q0x, q0y, lerp(q0x, q1x, t), lerp(q0y, q1y, t));
}

// ── Tree builder ──────────────────────────────────────────────────────────────
function spawnBranch(
  px: number, py: number,
  angle: number, length: number,
  depth: number, parent: MNode,
  bounds: { w: number; h: number },
  allNodes: MNode[]
): void {
  if (depth > MAX_DEPTH) return;

  const rad = (angle * Math.PI) / 180;
  const tx = px + Math.cos(rad) * length;
  const ty = py + Math.sin(rad) * length;
  if (tx < -90 || tx > bounds.w + 90 || ty < -90 || ty > bounds.h + 90) return;

  const perpRad = rad + Math.PI / 2;
  const perpOff = (Math.random() - 0.5) * length * 0.38;
  const cpx = (px + tx) / 2 + Math.cos(perpRad) * perpOff;
  const cpy = (py + ty) / 2 + Math.sin(perpRad) * perpOff;

  const node: MNode = {
    x: tx, y: ty, cpx, cpy,
    depth, parent,
    children: [],
    signal: 0,
    incoming: 0,
    lw: Math.max(0.35, ROOT_LINE_W - depth * 0.38),
  };
  allNodes.push(node);
  parent.children.push(node);

  if (depth < MAX_DEPTH) {
    const count = depth < 2 ? 2 + Math.floor(Math.random() * 2) : 2;
    const spread = 32 + (MAX_DEPTH - depth) * 7;
    for (let i = 0; i < count; i++) {
      const offset = count === 1 ? 0 : -spread + (2 * spread / (count - 1)) * i;
      spawnBranch(
        tx, ty,
        angle + offset + (Math.random() - 0.5) * 10,
        length * LENGTH_DECAY * (0.82 + Math.random() * 0.36),
        depth + 1, node, bounds, allNodes
      );
    }
  }
}

function buildForest(w: number, h: number): { nodes: MNode[] } {
  const nodes: MNode[] = [];
  const seedCount = Math.max(2, Math.round(w / 370));
  const pad = w * 0.09;
  const step = (w - 2 * pad) / Math.max(1, seedCount - 1);

  for (let i = 0; i < seedCount; i++) {
    const rx = pad + step * i + (Math.random() - 0.5) * 55;
    const ry = h * 0.22 + Math.random() * h * 0.56;
    const root: MNode = {
      x: rx, y: ry, cpx: rx, cpy: ry,
      depth: -1, parent: null, children: [],
      signal: 0,
      incoming: 0,
      lw: 0,
    };
    nodes.push(root);

    const armCount = 4 + Math.floor(Math.random() * 4);
    for (let a = 0; a < armCount; a++) {
      const baseAngle = (360 / armCount) * a + (Math.random() - 0.5) * 18;
      spawnBranch(rx, ry, baseAngle, BASE_LENGTH, 0, root, { w, h }, nodes);
    }
  }
  return { nodes };
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function MyceliumHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [prefersReduced] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let forest: { nodes: MNode[] } = { nodes: [] };
    const mouse = { x: -2000, y: -2000 };

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth ?? window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight ?? 780;
      forest = buildForest(canvas.width, canvas.height);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (e.clientX < rect.left || e.clientX > rect.right ||
          e.clientY < rect.top  || e.clientY > rect.bottom) {
        mouse.x = -2000;
        mouse.y = -2000;
        return;
      }
      const textRect = textRef.current?.getBoundingClientRect();
      if (textRect) {
        const PAD = 0;
        if (
          e.clientX >= textRect.left  - PAD && e.clientX <= textRect.right  + PAD &&
          e.clientY >= textRect.top   - PAD && e.clientY <= textRect.bottom + PAD
        ) {
          mouse.x = -2000;
          mouse.y = -2000;
          return;
        }
      }
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onMouseLeave = () => { mouse.x = -2000; mouse.y = -2000; };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    resize();

    const tick = () => {
      ctx.fillStyle = BG;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const { nodes } = forest;

      // A+B: cursor boost + propagate that boost (not accumulated signal) to neighbors.
      // Propagating cursor-derived boost instead of n.signal breaks the feedback loop —
      // when the cursor leaves, boost drops to zero and signal decays cleanly.
      for (const n of nodes) {
        const dx = n.x - mouse.x;
        const dy = n.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let cursorBoost = 0;
        if (dist < HOVER_RADIUS) {
          cursorBoost = 0.38 * (1 - dist / HOVER_RADIUS);
        } else if (dist < MOUSE_RADIUS) {
          cursorBoost = 0.16 * (1 - dist / MOUSE_RADIUS);
        }
        if (cursorBoost > 0) {
          n.signal = Math.min(1, n.signal + cursorBoost);
          const prop = cursorBoost * PROP_FACTOR;
          if (n.parent !== null) n.parent.incoming += prop;
          for (const child of n.children) child.incoming += prop;
        }
      }

      // C: apply propagated signal
      for (const n of nodes) {
        n.signal = Math.min(1, n.signal + n.incoming);
        n.incoming = 0;
      }

      // D: decay + snap to zero
      for (const n of nodes) {
        n.signal *= (1 - DECAY_RATE);
        if (n.signal < 0.001) n.signal = 0;
      }

      // E: draw hyphae — glow pass (wide transparent stroke) then sharp pass
      ctx.lineCap = "round";
      for (const n of nodes) {
        if (n.depth === -1 || !n.parent || n.signal < 0.08) continue;
        ctx.strokeStyle = hyphaColor(1.0, n.signal * 0.18);
        ctx.lineWidth = n.lw + lerp(0, 10, n.signal);
        ctx.beginPath();
        drawPartialBezier(ctx, n.parent.x, n.parent.y, n.cpx, n.cpy, n.x, n.y, 1);
        ctx.stroke();
      }
      for (const n of nodes) {
        if (n.depth === -1 || !n.parent) continue;
        const b = Math.max(REST_BRIGHTNESS, n.signal);
        const alpha = n.signal > 0.01 ? lerp(REST_ALPHA, SIGNAL_ALPHA, n.signal) : REST_ALPHA;
        ctx.strokeStyle = hyphaColor(b, alpha);
        ctx.lineWidth = n.lw + lerp(0, 1.2, n.signal);
        ctx.beginPath();
        drawPartialBezier(ctx, n.parent.x, n.parent.y, n.cpx, n.cpy, n.x, n.y, 1);
        ctx.stroke();
      }

      // E (continued): draw nodes
      for (const n of nodes) {
        const b = Math.max(REST_BRIGHTNESS, n.signal);
        const alpha = n.signal > 0.01 ? lerp(REST_ALPHA, SIGNAL_ALPHA, n.signal) : REST_ALPHA;
        if (n.depth === -1) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, lerp(1.6, 3.8, b), 0, Math.PI * 2);
          ctx.fillStyle = hyphaColor(b, alpha);
          ctx.fill();
        } else if (n.children.length === 0) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, lerp(0.8, 2.2, b), 0, Math.PI * 2);
          ctx.fillStyle = hyphaColor(b, alpha);
          ctx.fill();
        } else if (n.children.length > 1) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, lerp(0.6, 1.6, b), 0, Math.PI * 2);
          ctx.fillStyle = hyphaColor(b, lerp(REST_ALPHA * 0.7, 0.9, b));
          ctx.fill();
        }
      }
    };

    if (prefersReduced) {
      tick();
    } else {
      const animate = () => { raf = requestAnimationFrame(animate); tick(); };
      animate();
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [prefersReduced]);

  const from = prefersReduced ? false : { opacity: 0, y: 20 };
  const to = { opacity: 1, y: 0 };
  const ease = "easeInOut" as const;

  return (
    <div className="relative h-[640px] w-full flex flex-col items-center justify-center overflow-hidden bg-[#fff9ed]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 72% 72% at 50% 50%, transparent 28%, #fff9ed 100%)",
        }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 58% 44% at 50% 48%, rgba(255,249,237,0.72) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center gap-6">
        <div ref={textRef}>
          <motion.h1
            initial={from}
            animate={to}
            transition={{ delay: 0.6, duration: 0.8, ease }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl font-semibold leading-tight tracking-tight text-[#1c1025]"
          >
            building the technical foundation for{" "}
            <em className="italic text-green">inclusive AI</em>
          </motion.h1>
        </div>

        <motion.div
          initial={from}
          animate={to}
          transition={{ delay: 1.0, duration: 0.8, ease }}
        >
          <Link
            href="/work"
            className="inline-block rounded-full bg-green px-8 py-3.5 font-sans font-medium text-[#1c1025] transition-all duration-200 hover:bg-green-hover hover:scale-[1.02] cursor-pointer"
          >
            See our work
          </Link>
        </motion.div>
      </div>


    </div>
  );
}
