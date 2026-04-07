# CLAUDE.md

## Project Overview
SimOverDrive (simoverdrive.fr) — Static landing page for a French simracing content brand.
Single-page React site, no backend, no routing.

## Commands
| Command | Purpose |
|---------|---------|
| `npm run dev` | Vite dev server |
| `npm run build` | TypeScript check + production build |
| `npm run lint` | ESLint |
| `npm run preview` | Preview production build |

Note: Node.js is via nvm — run `source ~/.nvm/nvm.sh` before commands.

## Tech Stack
- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4 (CSS-first config via @theme, no tailwind.config.ts)
- No backend, no routing, no state management

## Architecture
- `src/App.tsx` — Root component, assembles 7 sections vertically
- `src/components/` — One component per page section + reusable cards
- `src/data/` — Static typed data for deals, articles, navigation
- `src/hooks/useScrollPosition.ts` — Scroll detection for navbar glassmorphism
- `src/index.css` — Tailwind v4 theme (colors, fonts, animations, custom utilities)

## Design Tokens (defined in index.css @theme)
- Background: #0A0A0B | Card: #111113 | Lead: #1A0305
- Red accent: #E8001C | White: #F5F0EB | Grey: #8A8A8A | Border: #1C1C1E
- Headings: Orbitron | Body: DM Sans

## Key Conventions
- All text in French
- Mobile-first responsive (base -> md: -> lg:)
- Animations are CSS-only (no JS animation library)
- Placeholder images via picsum.photos
