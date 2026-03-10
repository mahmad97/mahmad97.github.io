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

**Routing** (React Router v7): `App.tsx` defines all routes. Current pages: `/` (Home), `/publications`, `/awards`, `/background`, `/affiliations`.

**Home page** is composed of section components in `src/pages/Home/`: `ProfileSection`, `BiographySection`, `ResearchInterestsSection`, `NewsSection`. Each section is a standalone component.

**Component structure:**
- `src/components/layout/` — structural wrappers (Header, Footer, PageContainer)
- `src/components/ui/` — reusable UI elements
- `src/pages/` — full-page components; Home is split into section files

**Data:** Static JSON in `src/data/` (e.g., `news.json` with timeline entries). No external APIs.

**Theme system:** `src/hooks/useTheme.ts` uses `useSyncExternalStore` to manage light/dark/system theme, synced across tabs via storage events.

**Path alias:** `@` maps to `./src` (configured in both `vite.config.ts` and `tsconfig.app.json`).

**SVG imports:** Use SVGR — SVGs can be imported as React components via `import Logo from '@/assets/logo.svg?react'`.

**TypeScript:** Strict mode with `noUnusedLocals` and `noUnusedParameters` enforced — all unused variables will cause build errors.
