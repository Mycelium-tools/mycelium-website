# Mycelium — CLAUDE.md

## Project overview
Mycelium is the website for a nonprofit building technical infrastructure for AI models to consider nonhuman animal welfare. Stack: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4.

## Dev commands
```bash
npm run dev       # start dev server (localhost:3000)
npm run build     # production build
npm run lint      # eslint
npx tsc --noEmit  # type check
```
Always run `npx tsc --noEmit` and `npm run lint` after a series of code changes.

## Repo structure
- `src/app/` — Next.js App Router pages (home, about, work, contact)
- `src/components/` — shared components (Navbar, Footer)
- `public/` — static assets: logos, headshots, partner/donor logos

## Brand colors (do not deviate)
| Token | Hex | Usage |
|---|---|---|
| Background | `#fff9ed` | warm off-white page background |
| Text dark | `#1c1025` | primary text |
| Text muted | `#5a4b6b` | body copy |
| Text faint | `#8a7aa0` | labels, captions |
| Purple primary | `#8157D6` | accents, links, primary actions |
| Green accent | `#CED665` | CTA button fill, highlights |
| Surface | `#f5eeff` | subtle card/section backgrounds |
| Border | `#e0d5ec` | card borders |

## Typography
Two fonts loaded via `next/font/google` in `src/app/layout.tsx`:
- `--font-crimson-pro` → `font-serif` (headings, display text)
- `--font-atkinson` → `font-sans` (body, UI text)

Use `font-serif` for headings and `font-sans` (default) for everything else.

## Code style
- TypeScript strict mode; no `any`
- Use ES module syntax (`import`/`export`), not CommonJS
- Tailwind utility classes only — no custom CSS files except `globals.css`
- Next.js `Image` component for all images (use `unoptimized` for external/partner logos)
- Next.js `Link` for internal navigation

## UI/UX workflow
@docs/ui-ux-workflow.md

## Reference
- Awesome Claude Code: https://github.com/hesreallyhim/awesome-claude-code

## Workflow
- Prefer editing existing pages/components over creating new files
- Each page route lives in `src/app/<route>/page.tsx`
- Shared UI belongs in `src/components/`
- Do not add new dependencies without checking if Tailwind or native Next.js already covers the need
