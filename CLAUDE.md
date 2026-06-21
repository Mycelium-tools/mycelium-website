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
| Background | `#f7f5f1` | cream page background |
| Text dark | `#18211a` | primary text |
| Text muted | `#5a6b5c` | body copy |
| Text faint | `#8a9e8c` | labels, captions |
| Green primary | `#0a8c5c` | accents, links |
| Green bright | `#51FCAA` | CTA button fill |
| Border | `#ddd9d1` | card borders |

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
