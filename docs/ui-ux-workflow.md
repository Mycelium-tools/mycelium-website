# UI/UX Workflow

This project uses a three-stage design workflow. Follow it in order for any
UI/UX request — don't skip straight to writing components from scratch.

## Stage 1 — Design system (ui-ux-pro-max skill)

Before writing any UI code, generate or load the design system.

- **New project / new section type:** generate and persist a design system:
  ```
  python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<product description>" --design-system --persist -p "<ProjectName>"
  ```
- **New page within an existing project:** check for an override first:
  ```
  python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<page topic>" --design-system --persist -p "<ProjectName>" --page "<page-name>"
  ```
- **Before generating any component or page:** read `design-system/MASTER.md`.
  If `design-system/pages/<page-name>.md` exists, its rules override the
  Master file for that page. Otherwise use the Master rules exclusively.

The design system is the source of truth for colors, typography, spacing,
style, allowed effects, and anti-patterns. Don't invent colors or fonts
outside it.

## Stage 2 — Components (21st.dev Magic MCP)

Once the design system is known, pull real component code instead of
hand-rolling boilerplate:

- Use `/ui <description>` to request a component, e.g.
  `/ui pricing table with three tiers and a monthly/annual toggle`.
- Explicitly state the relevant design-system values in the request
  (e.g. "use #2D3436 text on #FFF5F5 background, Cormorant Garamond
  headings") so the pulled component matches Stage 1, not generic defaults.
- Treat returned code as a starting point — adapt props, copy, and structure
  to the actual page content. Don't ship it unmodified.

## Stage 3 — Motion (Motion / Framer Motion)

Apply animation only as specified in the design system's "Key Effects" field
(e.g. "soft shadows + 200–300ms transitions + gentle hover states").

- Use the `motion` package (`import { motion } from "motion/react"`) for:
  - Hover/tap micro-interactions on interactive elements
  - Scroll-triggered entrances (`whileInView`)
  - Layout transitions (`layout` prop) for reordering/resizing UI
- Respect `prefers-reduced-motion` — wrap non-essential animations so they're
  skipped when the user has it enabled.
- Don't add motion the design system's anti-patterns list excludes (e.g.
  "harsh animations" for calm/trust-oriented brands).

## Pre-delivery checklist (run before considering any UI task done)

- [ ] No emojis as icons — use SVG icon sets (Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150–300ms)
- [ ] Text contrast ≥ 4.5:1 in light mode
- [ ] Visible focus states for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive at 375px, 768px, 1024px, 1440px
- [ ] Component matches `design-system/MASTER.md` (or page override) — no
      off-system colors, fonts, or effects introduced ad hoc

## Stack default

Default to **Next.js + Tailwind CSS** for this project. State the stack
explicitly in Stage 1 and Stage 2 requests.
