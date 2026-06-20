---
name: mycelium-skills
description: "This skill should be used when working on the Mycelium website (AIxAnimals nonprofit). Covers project-specific UI patterns, design system, and available skill inventory. Triggers when the user asks to 'build a page', 'add a section', 'improve the design', 'check the UI', 'design a component', or any visual/layout task for the Mycelium site."
version: 0.1.0
---

# Mycelium Skills Index

Skills installed for this project and when to invoke each.

## Installed Skills

### `ui-ux-pro-max` — UI/UX Design Intelligence
**Location:** `.claude/skills/ui-ux-pro-max/SKILL.md`

Use for all UI/UX decisions: design systems, component design, color/typography, accessibility, animations, responsive layout, and pre-delivery quality checks.

**Invoke when:** designing or reviewing any page, component, or visual pattern.

```bash
# Generate design system recommendation
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system -p "Mycelium"

# Domain-specific search
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<keyword>" --domain <domain>

# Next.js stack guidelines
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<keyword>" --stack nextjs
```

## Mycelium Design System (Quick Reference)

Always respect these project-specific constraints alongside any ui-ux-pro-max recommendations.

### Brand Colors
| Token | Value | Role |
|-------|-------|------|
| Background | `#f7f5f1` | Cream page background |
| Text dark | `#18211a` | Primary text, headings |
| Text muted | `#5a6b5c` | Body copy |
| Text faint | `#8a9e8c` | Labels, captions |
| Green primary | `#0a8c5c` | Accents, links, CTA outlines |
| Green bright | `#51FCAA` | Primary CTA button fill |
| Border | `#ddd9d1` | Card borders, dividers |

### Typography
- **Headings:** `font-serif` → Crimson Pro (`--font-crimson-pro`)
- **Body/UI:** `font-sans` → Atkinson Hyperlegible (`--font-atkinson`)
- Both loaded via `next/font/google` in `src/app/layout.tsx`

### Component Patterns
- Rounded CTAs: `rounded-full` with hover scale `hover:scale-[1.02]`
- Cards: `rounded-2xl border border-[#ddd9d1] bg-white shadow-sm`
- Section backgrounds alternate: `#f7f5f1` → `#f0e8ff` → `#edfaf4` → `#fff9ed`
- Dot-grid texture: radial-gradient overlay with `#51fcaa12` on hero

### Stack
- **Framework:** Next.js 16, App Router, TypeScript
- **Styling:** Tailwind CSS v4
- **Images:** `next/image` always (use `unoptimized` for partner/donor logos)
- **Links:** `next/link` for internal navigation
