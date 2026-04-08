# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # TypeScript check + Vite production build
npm run lint     # Run ESLint
npm run preview  # Preview production build at localhost:3000
```

## Architecture

Personal academic/portfolio website for mahmad97.github.io built with React 19 + TypeScript + Vite + Tailwind CSS v4.

**Routing** (React Router v7): `App.tsx` defines all routes. Current pages: `/` (Home), `/publications`, `/projects`, `/news`, `/awards`, `/background`, `/affiliations`.

**Component structure:**
- `src/components/layout/` — structural wrappers (Header, Footer, PageContainer)
- `src/components/ui/` — reusable UI elements
- `src/pages/` — full-page components; complex pages are split into section files in a subdirectory (e.g., `src/pages/Home/`, `src/pages/Affiliations/`, `src/pages/Background/`)

**Data:** Static JSON in `src/data/` (e.g., `news.json` with timeline entries). No external APIs.

**Theme system:** `src/hooks/useTheme.ts` uses `useSyncExternalStore` to manage light/dark/system theme, synced across tabs via storage events.

**Path alias:** `@` maps to `./src` (configured in both `vite.config.ts` and `tsconfig.app.json`).

**SVG imports:** Use SVGR — SVGs can be imported as React components via `import Logo from '@/assets/logo.svg?react'`.

**TypeScript:** Strict mode with `noUnusedLocals` and `noUnusedParameters` enforced — all unused variables will cause build errors.

## Deployment

Pushes to `main` trigger the GitHub Actions workflow (`.github/workflows/build-and-deploy.yml`), which:
1. Compiles LaTeX files in `docs/` (`cv.tex`, `resume.tex`) and moves the resulting PDFs to `public/`
2. Runs `npm run build`
3. Deploys `dist/` to GitHub Pages

Do not manually push to `gh-pages` or modify `dist/`. The PDFs are build artifacts — edit the `.tex` source files in `docs/`, not the PDFs.

## Styling

Tailwind CSS v4 uses a CSS-first config (no `tailwind.config.js`). Custom design tokens are defined via `@theme` in CSS, not in a JS config file. Avoid v3 idioms like `theme()` in config files or `@apply` with arbitrary values.

## Data schemas

All content is static JSON in `src/data/`. Do not add external API calls.

**`news.json`** — array of timeline entries, newest first:
```json
{ "date": "Mon YYYY", "text": "Entry text with optional [Markdown links](url)." }
```
Inline Markdown links (`[text](url)`) are parsed manually by `RecentNewsSection` and `News` — use standard Markdown link syntax, not HTML.

**`background.json`** — two top-level arrays:
- `education[]`: `degree`, `institution`, `logo` (path under `public/`), `period`, `description`, `cgpa` (empty string if omitted), `highlights` (string array)
- `experience[]`: `role`, `organization`, `logo` (optional), `period`, `description`, `highlights` (optional string array)

**`affiliations.json`** — four top-level arrays:
- `academic[]`: `institution`, `url`, `logo` (path under `public/`), `roles`
- `advisorsAndSupervisors[]`: `name`, `url`, `title`, `affiliation`
- `collaborators[]`: `name`, `url`, `affiliation`
- `organizational[]`: `organization`, `url`, `logo` (path under `public/`), `role`, `logoBg` (optional Tailwind class for logo background)

Logos are served from `public/logos/` — reference them as `/logos/...` (not `@/assets/`).

## Pages in progress

The following pages/routes exist but are stubs — do not wire them up or delete them:
- `src/pages/Publications.tsx` — routed at `/publications`, shows "Work in progress..."
- `src/pages/Projects.tsx` — routed at `/projects`, shows "Work in progress..."
- `src/pages/Research.tsx` — file exists but is not currently routed
- Blog route (`/blog/:slug`) — commented out in `App.tsx`
