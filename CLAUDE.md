# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Backlog

`TODO.md` at the repo root tracks pending tasks and ideas. Read it when asked what to work on next, and when a task is finished, tick it there and move it to the `## Done` section with the date.

## Commands

```bash
npm run dev        # Start dev server at localhost:3000
npm run build      # typegen + TypeScript check + pre-rendered production build
npm run typecheck  # Route typegen + tsc, without building
npm run lint       # Run ESLint
npm run preview    # Preview the built site at localhost:3000
npm run assets     # Re-render public/ icons + og-image.png with headless Chrome
```

## Architecture

Personal academic/portfolio website for mahmad97.github.io built with React 19 + TypeScript + Vite + Tailwind CSS v4.

**Routing** (React Router v8, framework mode): `src/routes.ts` is the route manifest. `src/root.tsx` renders the whole HTML document (including the pre-hydration theme script) plus the app shell around `<Outlet />`. Framework mode owns the entry points — there is no `index.html` or `main.tsx`. `appDirectory` is `src`, so route paths in `routes.ts` are relative to `src/`.

Current pages: `/` (Home), `/publications`, `/projects`, `/services`, `/news`, `/background`, `/awards`, `/affiliations`, plus a `*` catch-all.

**Rendering:** `ssr: false` + `prerender: true` in `react-router.config.ts` — every route is pre-rendered to static HTML at build time.

- Route modules must not export `action` or `headers`; the build fails if they do.
- The `*` catch-all can't be pre-rendered. It's served via the SPA fallback, which `postbuild` copies to `404.html` for GitHub Pages. No leaf route renders in that document, so `root.tsx` exports its `meta` (`NOT_FOUND_META` from `src/utils/meta.ts`, shared with `NotFound.tsx`).

**Page metadata:** each route module holds a `PAGE` descriptor (`title`, `description`, `path`) and named-exports `meta` (built with `buildMeta` — title, description, Open Graph, Twitter, `og:image`) and `links` (built with `buildLinks` — the canonical URL), both from `src/utils/meta.ts`. Add or edit those exports rather than setting `document.title` imperatively. `pageUrl` appends the trailing slash GitHub Pages redirects to, so canonical URLs, `og:url`, and the sitemap agree.

**Structured data:** `src/utils/structuredData.ts` derives JSON-LD from the same JSON that renders the pages — `personSchema` (Home) and `publicationSchemas` (Publications), emitted through the `script:ld+json` meta descriptor.

**Component structure:**

- `src/components/layout/` — structural wrappers (Header, Footer, PageContainer)
- `src/components/ui/` — reusable UI elements
- `src/pages/` — route modules; complex pages are split into section files in a subdirectory (e.g., `src/pages/Home/`, `src/pages/Affiliations/`, `src/pages/Background/`). Each file default-exports the page component and named-exports `meta` and `links`
- `src/utils/` — shared helpers (e.g. `meta.ts`)

**Data:** Static JSON in `src/data/` (e.g., `news.json` with timeline entries). No external APIs.

**Theme system:** `src/hooks/useTheme.ts` uses `useSyncExternalStore` to manage light/dark/system theme, synced across tabs via storage events.

**Path alias:** `@` maps to `./src` (configured in both `vite.config.ts` and `tsconfig.app.json`).

**SVG imports:** Use SVGR — SVGs can be imported as React components via `import Logo from '@/assets/logo.svg?react'`.

**TypeScript:** Strict mode with `noUnusedLocals` and `noUnusedParameters` enforced — all unused variables will cause build errors.

## Deployment

Pushes to `main` trigger the GitHub Actions workflow (`.github/workflows/build-and-deploy.yml`), which:

1. Compiles LaTeX files in `docs/` (`cv.tex`, `resume.tex`) and moves the resulting PDFs to `public/`
2. Runs `npm run build`, which pre-renders every route; `postbuild` (`scripts/postbuild.mjs`) then copies the SPA fallback to `404.html` and writes `robots.txt` and `sitemap.xml` from `src/routes.ts`
3. Deploys `build/client/` to GitHub Pages

Do not manually push to `gh-pages` or modify `build/`. The PDFs are build artifacts — edit the `.tex` source files in `docs/`, not the PDFs.

The favicons, `og-image.png`, and `site.webmanifest` in `public/` are committed, not built in CI: run `npm run assets` (headless Chrome, needs network for webfonts) after editing `public/MA.svg`, the portrait, or `scripts/og-image.html`.

## Styling

Tailwind CSS v4 uses a CSS-first config (no `tailwind.config.js`). Custom design tokens are defined via `@theme` in CSS, not in a JS config file. Avoid v3 idioms like `theme()` in config files or `@apply` with arbitrary values.

## Data schemas

All content is static JSON in `src/data/`. Do not add external API calls.

**`news.json`** — array of timeline entries, newest first:

```json
{
	"date": "Mon YYYY",
	"description": "Entry text with optional [Markdown links](url)."
}
```

`awards.json` uses the same `date` + `description` shape.

Inline Markdown links (`[text](url)`) are rendered by `parseInlineLinks` in `src/utils/markdown.tsx` — use standard Markdown link syntax, not HTML. Nothing else in the string is parsed. `date` is not unique (dates repeat), so don't key React lists by it.

**`background.json`** — two top-level arrays:

- `education[]`: `degree`, `institution`, `logo` (path under `public/`), `logoBg` (optional hex color for logo background), `period`, `description`, `cgpa` (empty string if omitted), `highlights` (string array)
- `experience[]`: `role`, `organization`, `logo` (path under `public/`), `logoBg` (optional hex color for logo background), `period`, `description`, `highlights` (optional string array)

**`affiliations.json`** — four top-level arrays:

- `academic[]`: `institution`, `url`, `logo` (path under `public/`), `roles`
- `advisorsAndSupervisors[]`: `name`, `url`, `title`, `affiliation`
- `collaborators[]`: `name`, `url`, `affiliation`
- `organizational[]`: `organization`, `url`, `logo` (path under `public/`), `role`, `logoBg` (optional hex color for logo background)

**`publications.json`** — array of publication entries, newest first:

- `title`, `authors` (string array of full names; "Mohammad Ahmad" is bolded by the page), `venue` (full journal/conference name), `year`, `doi` (used as the React key, not displayed), `url` (link to the indexed paper, empty string if not yet available)

**`researchInterests.json`** — flat array of strings. Renders the pill row on Home and feeds `knowsAbout` in the JSON-LD `Person`.

Logos are served from `public/logos/` — reference them as `/logos/...` (not `@/assets/`).

`logoBg` is a hex colour (e.g. `#032044`), applied via inline `style`. Cards fall
back to `DEFAULT_LOGO_BG` in `src/utils/logo.ts` when it is omitted.

## Pages in progress

The following pages/routes exist but are stubs — do not wire them up or delete them:

- `src/pages/Projects.tsx` — routed at `/projects`, shows "Work in progress..."
- Blog route (`/blog/:slug`) — commented out in `src/routes.ts`
