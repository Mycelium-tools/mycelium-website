"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

// ── Tunables ──────────────────────────────────────────────────────────────────
const MAX_DEPTH = 5;
const BASE_LENGTH = 115;
const LENGTH_DECAY = 0.65;
const ROOT_LINE_W = 2.5;

// Static ambient glow (faint — pulses are the main event)
const REST_BRIGHTNESS = 0.28;
const REST_ALPHA      = 0.22;
const SIGNAL_ALPHA    = 0.60;
const DECAY_RATE      = 0.055;
const PROP_FACTOR     = 0.85;
const HOVER_RADIUS    = 80;
const MOUSE_RADIUS    = 200;

// Traveling pulse system
const PULSE_SPEED          = 0.022; // fraction of edge per frame (~1.5s per edge at 60fps)
const PULSE_MAX_AGE        = 300;   // frames before pulse dies
const PULSE_FADE_AT        = 220;   // frame at which fade-out begins
const MAX_PULSES           = 80;    // hard cap to prevent junction explosion
const PULSE_SPAWN_DIST     = 35;    // px — min mouse movement to spawn a new batch
const PULSE_RADIUS         = 3;     // px — ball radius at full brightness
const PULSE_STRENGTH_DECAY = 0.72;  // multiply per hop — pulse shrinks & fades with distance

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

interface Pulse {
  fromNode: MNode;
  toNode: MNode;
  t: number;        // progress along this edge [0, 1]
  age: number;      // frames alive
  strength: number; // 1.0 at origin, decays by PULSE_STRENGTH_DECAY per hop
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function makeRng(seed: number) {
  let s = seed;
  return () => {
    s = (s + 0x6D2B79F5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace(/^\s*#/, "");
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
}

function hyphaColor(
  brightness: number, alpha: number,
  dim: [number, number, number], bright: [number, number, number]
): string {
  const r = Math.round(lerp(dim[0], bright[0], brightness));
  const g = Math.round(lerp(dim[1], bright[1], brightness));
  const b = Math.round(lerp(dim[2], bright[2], brightness));
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

// Returns the (x, y) position of a pulse along its bezier edge
function bezierPoint(p: Pulse): { x: number; y: number } {
  const goingDown = p.toNode.parent === p.fromNode;
  const p0x = p.fromNode.x, p0y = p.fromNode.y;
  const p2x = p.toNode.x,   p2y = p.toNode.y;
  const cpx = goingDown ? p.toNode.cpx : p.fromNode.cpx;
  const cpy = goingDown ? p.toNode.cpy : p.fromNode.cpy;
  const mt = 1 - p.t;
  return {
    x: mt*mt*p0x + 2*mt*p.t*cpx + p.t*p.t*p2x,
    y: mt*mt*p0y + 2*mt*p.t*cpy + p.t*p.t*p2y,
  };
}

// ── Tree builder ──────────────────────────────────────────────────────────────
function spawnBranch(
  px: number, py: number,
  angle: number, length: number,
  depth: number, parent: MNode,
  bounds: { w: number; h: number },
  allNodes: MNode[],
  rng: () => number
): void {
  if (depth > MAX_DEPTH) return;

  const rad = (angle * Math.PI) / 180;
  const tx = px + Math.cos(rad) * length;
  const ty = py + Math.sin(rad) * length;
  if (tx < -90 || tx > bounds.w + 90 || ty < -90 || ty > bounds.h + 90) return;

  const perpRad = rad + Math.PI / 2;
  const perpOff = (rng() - 0.5) * length * 0.38;
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
    const count = depth < 2 ? 2 + Math.floor(rng() * 2) : 2;
    const spread = 32 + (MAX_DEPTH - depth) * 7;
    for (let i = 0; i < count; i++) {
      const offset = count === 1 ? 0 : -spread + (2 * spread / (count - 1)) * i;
      spawnBranch(
        tx, ty,
        angle + offset + (rng() - 0.5) * 10,
        length * LENGTH_DECAY * (0.82 + rng() * 0.36),
        depth + 1, node, bounds, allNodes, rng
      );
    }
  }
}

function buildForest(w: number, h: number): { nodes: MNode[] } {
  const rng = makeRng(137);
  const nodes: MNode[] = [];
  const seedCount = Math.max(2, Math.round(w / 370));
  const pad = w * 0.09;
  const step = (w - 2 * pad) / Math.max(1, seedCount - 1);

  // Bottom half seeds (original)
  for (let i = 0; i < seedCount; i++) {
    const rx = pad + step * i + (rng() - 0.5) * 55;
    const ry = h * 0.48 + rng() * h * 0.46;
    const root: MNode = {
      x: rx, y: ry, cpx: rx, cpy: ry,
      depth: -1, parent: null, children: [],
      signal: 0, incoming: 0, lw: 0,
    };
    nodes.push(root);
    const armCount = 4 + Math.floor(rng() * 4);
    for (let a = 0; a < armCount; a++) {
      const baseAngle = (360 / armCount) * a + (rng() - 0.5) * 18;
      spawnBranch(rx, ry, baseAngle, BASE_LENGTH, 0, root, { w, h }, nodes, rng);
    }
  }

  // Top half seeds (fill the sparse upper area)
  const topSeedCount = Math.max(2, Math.round(w / 420));
  const topStep = (w - 2 * pad) / Math.max(1, topSeedCount - 1);
  for (let i = 0; i < topSeedCount; i++) {
    const rx = pad + topStep * i + (rng() - 0.5) * 55;
    const ry = rng() * h * 0.42;
    const root: MNode = {
      x: rx, y: ry, cpx: rx, cpy: ry,
      depth: -1, parent: null, children: [],
      signal: 0, incoming: 0, lw: 0,
    };
    nodes.push(root);
    const armCount = 4 + Math.floor(rng() * 3);
    for (let a = 0; a < armCount; a++) {
      const baseAngle = (360 / armCount) * a + (rng() - 0.5) * 18;
      spawnBranch(rx, ry, baseAngle, BASE_LENGTH, 0, root, { w, h }, nodes, rng);
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

    // Read colors from CSS variables at runtime
    const cssVars = getComputedStyle(document.documentElement);
    const bg = cssVars.getPropertyValue("--background").trim() || "#fff9ed";
    const purpleHex = cssVars.getPropertyValue("--purple-primary").trim() || "#845987";
    const purpleBrightHex = cssVars.getPropertyValue("--purple-bright").trim() || "#d0acd2";
    const dim = hexToRgb(purpleHex);
    const bright = hexToRgb(purpleBrightHex);
    const color = (b: number, a: number) => hyphaColor(b, a, dim, bright);

    let raf: number;
    let forest: { nodes: MNode[] } = { nodes: [] };
    const mouse = { x: -2000, y: -2000 };
    let pulses: Pulse[] = [];
    let lastSpawnOrigin = { x: -9999, y: -9999 };
    let resizeTimer: ReturnType<typeof setTimeout> | null = null;
    let forestBuilt = false;

    const rebuild = (w: number, h: number) => {
      forest = buildForest(w, h);
      pulses = [];
      lastSpawnOrigin = { x: -9999, y: -9999 };
    };

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth ?? window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight ?? 780;
      if (!forestBuilt) {
        rebuild(canvas.width, canvas.height);
        forestBuilt = true;
      } else {
        if (resizeTimer) clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          rebuild(canvas.width, canvas.height);
          resizeTimer = null;
        }, 400);
      }
    };

    const spawnPulses = () => {
      const { nodes } = forest;
      let nearest: MNode | null = null;
      let nearestDist = 120;
      for (const n of nodes) {
        const dx = n.x - mouse.x, dy = n.y - mouse.y;
        const d = Math.sqrt(dx*dx + dy*dy);
        if (d < nearestDist) { nearestDist = d; nearest = n; }
      }
      if (!nearest || pulses.length >= MAX_PULSES) return;

      for (const child of nearest.children) {
        if (pulses.length < MAX_PULSES)
          pulses.push({ fromNode: nearest, toNode: child, t: 0, age: 0, strength: 1.0 });
      }
      if (nearest.parent && pulses.length < MAX_PULSES) {
        pulses.push({ fromNode: nearest, toNode: nearest.parent, t: 0, age: 0, strength: 1.0 });
      }
      lastSpawnOrigin = { x: mouse.x, y: mouse.y };
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
        if (
          e.clientX >= textRect.left && e.clientX <= textRect.right &&
          e.clientY >= textRect.top  && e.clientY <= textRect.bottom
        ) {
          mouse.x = -2000;
          mouse.y = -2000;
          return;
        }
      }
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      const dx = mouse.x - lastSpawnOrigin.x;
      const dy = mouse.y - lastSpawnOrigin.y;
      if (dx*dx + dy*dy > PULSE_SPAWN_DIST * PULSE_SPAWN_DIST) {
        spawnPulses();
      }
    };
    const onMouseLeave = () => { mouse.x = -2000; mouse.y = -2000; };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    resize();

    const tick = () => {
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const { nodes } = forest;

      // Faint static cursor glow (just enough to show cursor location)
      for (const n of nodes) {
        const dx = n.x - mouse.x;
        const dy = n.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let cursorBoost = 0;
        if (dist < HOVER_RADIUS) {
          cursorBoost = 0.06 * (1 - dist / HOVER_RADIUS);
        } else if (dist < MOUSE_RADIUS) {
          cursorBoost = 0.025 * (1 - dist / MOUSE_RADIUS);
        }
        if (cursorBoost > 0) {
          n.signal = Math.min(1, n.signal + cursorBoost);
          const prop = cursorBoost * PROP_FACTOR;
          if (n.parent !== null) n.parent.incoming += prop;
          for (const child of n.children) child.incoming += prop;
        }
      }

      for (const n of nodes) {
        n.signal = Math.min(1, n.signal + n.incoming);
        n.incoming = 0;
      }

      for (const n of nodes) {
        n.signal *= (1 - DECAY_RATE);
        if (n.signal < 0.001) n.signal = 0;
      }

      // Advance pulses — arrived pulses branch into children
      const nextPulses: Pulse[] = [];
      for (const p of pulses) {
        p.t += PULSE_SPEED;
        p.age++;
        if (p.t >= 1) {
          const arrived = p.toNode;
          const childStrength = p.strength * PULSE_STRENGTH_DECAY;
          for (const child of arrived.children) {
            if (child !== p.fromNode && nextPulses.length + pulses.length < MAX_PULSES) {
              nextPulses.push({ fromNode: arrived, toNode: child, t: 0, age: p.age, strength: childStrength });
            }
          }
        } else if (p.age < PULSE_MAX_AGE) {
          nextPulses.push(p);
        }
      }
      pulses = nextPulses;

      // Draw hyphae — glow pass then sharp pass
      ctx.lineCap = "round";
      for (const n of nodes) {
        if (n.depth === -1 || !n.parent || n.signal < 0.08) continue;
        ctx.strokeStyle = color(1.0, n.signal * 0.18);
        ctx.lineWidth = n.lw + lerp(0, 10, n.signal);
        ctx.beginPath();
        drawPartialBezier(ctx, n.parent.x, n.parent.y, n.cpx, n.cpy, n.x, n.y, 1);
        ctx.stroke();
      }
      for (const n of nodes) {
        if (n.depth === -1 || !n.parent) continue;
        const b = Math.max(REST_BRIGHTNESS, n.signal);
        const alpha = n.signal > 0.01 ? lerp(REST_ALPHA, SIGNAL_ALPHA, n.signal) : REST_ALPHA;
        ctx.strokeStyle = color(b, alpha);
        ctx.lineWidth = n.lw + lerp(0, 1.2, n.signal);
        ctx.beginPath();
        drawPartialBezier(ctx, n.parent.x, n.parent.y, n.cpx, n.cpy, n.x, n.y, 1);
        ctx.stroke();
      }

      // Draw nodes
      for (const n of nodes) {
        const b = Math.max(REST_BRIGHTNESS, n.signal);
        const alpha = n.signal > 0.01 ? lerp(REST_ALPHA, SIGNAL_ALPHA, n.signal) : REST_ALPHA;
        if (n.depth === -1) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, lerp(1.6, 3.8, b), 0, Math.PI * 2);
          ctx.fillStyle = color(b, alpha);
          ctx.fill();
        } else if (n.children.length === 0) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, lerp(0.8, 2.2, b), 0, Math.PI * 2);
          ctx.fillStyle = color(b, alpha);
          ctx.fill();
        } else if (n.children.length > 1) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, lerp(0.6, 1.6, b), 0, Math.PI * 2);
          ctx.fillStyle = color(b, lerp(REST_ALPHA * 0.7, 0.9, b));
          ctx.fill();
        }
      }

      // Draw pulses on top
      for (const p of pulses) {
        const fadeFraction = p.age < PULSE_FADE_AT
          ? 1
          : 1 - (p.age - PULSE_FADE_AT) / (PULSE_MAX_AGE - PULSE_FADE_AT);
        const pos = bezierPoint(p);

        // Outer glow halo — shrinks and fades with distance traveled
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, PULSE_RADIUS * 2.2 * p.strength, 0, Math.PI * 2);
        ctx.fillStyle = color(1.0, fadeFraction * 0.18 * p.strength);
        ctx.fill();

        // Core ball — shrinks and fades with distance traveled
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, Math.max(0.3, PULSE_RADIUS * p.strength), 0, Math.PI * 2);
        ctx.fillStyle = color(1.0, fadeFraction * 0.9 * p.strength);
        ctx.fill();
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
      if (resizeTimer) clearTimeout(resizeTimer);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [prefersReduced]);

  const from = prefersReduced ? false : { opacity: 0, y: 20 };
  const to = { opacity: 1, y: 0 };
  const ease = "easeInOut" as const;

  return (
    <div className="relative h-[720px] w-full flex flex-col items-center justify-center overflow-hidden bg-background">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />

      {/* Radial gradient to soften the network behind the hero text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 52% 58% at 50% 50%, rgba(255,249,237,0.60) 0%, rgba(255,249,237,0.08) 45%, rgba(255,249,237,0) 72%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 text-center px-10 sm:px-12 lg:px-8 max-w-4xl mx-auto flex flex-col items-center gap-6">
        <div ref={textRef}>
          <motion.h1
            initial={from}
            animate={to}
            transition={{ delay: 0.6, duration: 0.8, ease }}
            className="font-serif text-5xl sm:text-6xl font-semibold leading-tight tracking-tight text-foreground"
          >
            Building the foundation for AI to consider {" "}
            <em className="italic text-purple">all sentient beings</em>
          </motion.h1>
        </div>

        <motion.div
          initial={from}
          animate={to}
          transition={{ delay: 1.0, duration: 0.8, ease }}
        >
          <Link
            href="/work"
            className="inline-block rounded-full bg-purple px-8 py-3.5 font-sans font-medium text-white transition-all duration-200 hover:bg-purple-hover hover:scale-[1.02] cursor-pointer"
          >
            See our work
          </Link>
        </motion.div>
      </div>


    </div>
  );
}
