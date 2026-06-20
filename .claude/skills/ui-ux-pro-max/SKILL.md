---
name: ui-ux-pro-max
description: "UI/UX design intelligence for web and mobile. Includes 50+ styles, 161 color palettes, 57 font pairings, 161 product types, 99 UX guidelines, and 25 chart types across 10 stacks (React, Next.js, Vue, Svelte, SwiftUI, React Native, Flutter, Tailwind, shadcn/ui, and HTML/CSS). Actions: plan, build, create, design, implement, review, fix, improve, optimize, enhance, refactor, and check UI/UX code. Projects: website, landing page, dashboard, admin panel, e-commerce, SaaS, portfolio, blog, and mobile app. Elements: button, modal, navbar, sidebar, card, table, form, and chart. Styles: glassmorphism, claymorphism, minimalism, brutalism, neumorphism, bento grid, dark mode, responsive, skeuomorphism, and flat design. Topics: color systems, accessibility, animation, layout, typography, font pairing, spacing, interaction states, shadow, and gradient. Integrations: shadcn/ui MCP for component search and examples."
version: 1.0.0
---

# UI/UX Pro Max — Design Intelligence

Comprehensive design guide for web and mobile. Contains 50+ styles, 161 color palettes, 57 font pairings, 161 product types with reasoning rules, 99 UX guidelines, and 25 chart types across 10 technology stacks. Searchable database with priority-based recommendations.

## When to Apply

Apply this skill when the task involves **UI structure, visual design decisions, interaction patterns, or user experience quality control**.

**Must use:** designing new pages; creating or refactoring UI components; choosing color schemes, typography, spacing, or layouts; reviewing UI code for UX/accessibility/visual consistency; implementing navigation, animations, or responsive behavior; product-level design decisions.

**Skip:** pure backend logic, API/database-only work, infrastructure, non-visual scripts.

Decision criteria: if the task changes how a feature **looks, feels, moves, or is interacted with**, use this skill.

## Rule Categories by Priority

| Priority | Category | Impact | Key Checks | Anti-Patterns |
|----------|----------|--------|------------|---------------|
| 1 | Accessibility | CRITICAL | Contrast 4.5:1, Alt text, Keyboard nav, Aria-labels | Removing focus rings, icon-only buttons without labels |
| 2 | Touch & Interaction | CRITICAL | Min size 44×44px, 8px+ spacing, Loading feedback | Hover-only, instant state changes (0ms) |
| 3 | Performance | HIGH | WebP/AVIF, Lazy loading, CLS < 0.1 | Layout thrashing, cumulative layout shift |
| 4 | Style Selection | HIGH | Match product type, consistency, SVG icons | Mixing flat & skeuomorphic, emoji as icons |
| 5 | Layout & Responsive | HIGH | Mobile-first, viewport meta, no horizontal scroll | Fixed px container widths, disable zoom |
| 6 | Typography & Color | MEDIUM | Base 16px, line-height 1.5, semantic color tokens | Text < 12px body, gray-on-gray, raw hex in components |
| 7 | Animation | MEDIUM | 150–300ms, transform/opacity only, conveys meaning | Decorative-only, animating width/height, no reduced-motion |
| 8 | Forms & Feedback | MEDIUM | Visible labels, error near field, progressive disclosure | Placeholder-only label, errors only at top |
| 9 | Navigation Patterns | HIGH | Predictable back, bottom nav ≤5, deep linking | Overloaded nav, broken back behavior |
| 10 | Charts & Data | LOW | Legends, tooltips, accessible colors | Color alone to convey meaning |

## How to Use This Skill

### Prerequisites

```bash
python3 --version  # must be installed
```

### Step 1: Analyze Requirements

Extract from user request:
- **Product type**: entertainment, tool, productivity, SaaS, nonprofit/advocacy
- **Style keywords**: minimal, vibrant, dark mode, content-first, immersive, etc.
- **Stack**: Next.js + Tailwind CSS (this project's primary stack)

### Step 2: Generate Design System (REQUIRED for new pages)

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<product_type> <industry> <keywords>" --design-system [-p "Project Name"]
```

With persistence across sessions:
```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system --persist -p "Project Name" [--page "page-name"]
```

### Step 3: Domain Searches (as needed)

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<keyword>" --domain <domain> [-n <max_results>]
```

| Need | Domain | Example |
|------|--------|---------|
| Product type patterns | `product` | `--domain product "nonprofit advocacy"` |
| Style options | `style` | `--domain style "minimalism organic"` |
| Color palettes | `color` | `--domain color "nonprofit green"` |
| Font pairings | `typography` | `--domain typography "editorial serif"` |
| UX best practices | `ux` | `--domain ux "animation accessibility"` |
| Landing structure | `landing` | `--domain landing "hero social-proof"` |
| Chart types | `chart` | `--domain chart "data visualization"` |

### Step 4: Stack Guidelines (Next.js + Tailwind)

```bash
# Next.js specific
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<keyword>" --stack nextjs

# Tailwind + HTML
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<keyword>" --stack html-tailwind

# shadcn/ui components
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<keyword>" --stack shadcn
```

## Quick Reference: Most Common Rules

### Accessibility (CRITICAL)
- Contrast 4.5:1 for normal text, 3:1 for large
- Visible focus rings on all interactive elements
- Descriptive alt text for meaningful images
- aria-label for icon-only buttons
- Tab order matches visual order

### Performance (HIGH)
- Use `next/image` with declared width/height (prevents CLS)
- `font-display: swap` via Next.js `next/font`
- Lazy load below-the-fold components with `dynamic()`
- Skeleton screens for async content > 300ms

### Layout & Responsive (HIGH)
- Mobile-first Tailwind classes (sm: md: lg:)
- `min-h-dvh` not `min-h-screen` on mobile
- No horizontal scroll on mobile
- `max-w-4xl` / `max-w-6xl` for desktop content width
- 4pt/8pt spacing scale (Tailwind's default scale works)

### Typography & Color (MEDIUM)
- Minimum 16px body text (avoids iOS auto-zoom)
- Line-height 1.5–1.75 for body text
- Semantic color tokens, not raw hex in components
- Accessible foreground/background pairs

### Animation (MEDIUM)
- 150–300ms for micro-interactions
- `transform` and `opacity` only (no layout-affecting properties)
- Respect `prefers-reduced-motion`
- Use Tailwind `transition-*` utilities

## Pre-Delivery Checklist

- [ ] No emojis used as icons (use SVG/Heroicons/Lucide)
- [ ] All interactive elements have visible focus states
- [ ] Touch targets ≥ 44×44px
- [ ] Images use `next/image` with width/height or fill
- [ ] Mobile viewport tested at 375px
- [ ] Semantic HTML (button not div, nav not div, etc.)
- [ ] Color contrast passes 4.5:1 for body text
- [ ] `prefers-reduced-motion` respected in animations
- [ ] No horizontal scroll on mobile
- [ ] Loading states for async operations > 300ms

## Common Sticking Points

| Problem | What to Do |
|---------|------------|
| UI looks unprofessional | Run `--design-system`; check Priority 1–4 rules |
| Dark mode contrast issues | Quick Reference §6: `color-dark-mode` + `color-accessible-pairs` |
| Animations feel unnatural | §7: `spring-physics` + `easing` + `exit-faster-than-enter` |
| Form UX is poor | §8: `inline-validation` + `error-clarity` + `focus-management` |
| Layout breaks on mobile | §5: `mobile-first` + `breakpoint-consistency` |
| Performance / jank | §3: `lazy-loading` + `bundle-splitting` + `debounce-throttle` |
