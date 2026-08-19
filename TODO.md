# TODO

Running list of tasks and ideas for this site. Not a commitment — a place to dump
things so they stop taking up head space.

**Conventions**

- `- [ ]` open, `- [x]` done. Move finished items to [Done](#done) with the date.
- Anything urgent goes in [Up next](#up-next); everything else lives in the
  backlog under its area. New idea with no obvious home → [Ideas](#ideas).
- Keep items to a line or two. Add a `—` note only when the _why_ isn't obvious
  in six months.
- Prefix with `@claude` if it's something to hand to Claude Code directly.

## Up next

- [ ] Fill in the Projects page — `/projects` says "Work in progress..."

## Accessibility

From a rendered-page audit (Chrome, 1440px and 390px, both themes).

- [ ] Card titles should be h3 — `XlText` renders `<h4>`, so Background outlines
      h1 → h2 → h4
- [ ] Focus-visible style — the UA default outline cuts through the sidebar's
      left border
- [ ] Icon buttons are 36×36; the touch-target guideline is 44×44
- [ ] Skip-to-content link
- [ ] Reduced-motion support for the drawer and theme transitions

## Visual & consistency

- [ ] Adjust the GoGoX long logo
- [ ] Logo tiles aren't theme-aware — HKU glares white in dark mode, UTSA and
      Penn State vanish into the card
- [ ] CGPA placeholder reserves an empty line (`invisible` in `BackgroundCard.tsx`)
- [ ] Footer "Last updated <month>" is `new Date()`, so it asserts freshness it
      doesn't know — use the build date or drop it
- [ ] Services page is a single unbulleted, oddly indented line on an empty page
- [ ] Home hero leaves a large dead area right of the name block on desktop
- [ ] Mobile nav review on a real phone — the only `h-screen` left is the `md:`
      sidebar

## Code health

- [ ] Nothing open right now.

## Content

- [ ] Projects: pick a schema (`src/data/projects.json`) before writing the
      component — title, blurb, stack, links, year, status
- [ ] Keep `news.json` current — a stale last entry reads as abandoned
- [ ] Publications: keep `url` filled in as papers get indexed (1 of 1 today)
- [ ] Short research-interests paragraph on Home
- [ ] Review `docs/cv.tex` and `docs/resume.tex` against the site data — they
      drift apart independently

## Pages & features

- [ ] Blog: commit to `/blog/:slug` (needs a Markdown pipeline + post index) or
      delete the stub
- [ ] BibTeX copy button per publication
- [ ] Filter/group publications by year or venue once the list outgrows a screen
- [ ] Client-side search across news + publications
- [ ] Print stylesheet for Publications and Background

## SEO & discoverability

Title, description, Open Graph, Twitter, and canonical tags come from each
route's `meta` and `links` exports — see `src/utils/meta.ts`.

- [ ] `404.html` has no `<title>` and no `noindex` until JS runs — the SPA
      fallback ships the root shell, and `NotFound`'s `meta` only applies after
      hydration

## Quality & infra

- [ ] `npm run preview` doesn't serve what GitHub Pages serves. Vite previews as
      an SPA, so a bare `/news` falls back to the root `index.html` and stacks two
      app trees. Preview with a trailing slash until it's fixed, or an audit
      measures the wrong DOM. Production is unaffected. `appType: 'mpa'` is the
      likely fix, but it's shared with `npm run dev` — check the `*` catch-all first
- [ ] No `ErrorBoundary` export in `src/root.tsx`
- [ ] No tests — start with a smoke test per route and a schema check on
      `src/data/*.json`
- [ ] Run `npm run analyze` occasionally — nothing watches bundle size
- [ ] Lighthouse pass for performance and best practices
- [ ] Verify the theme toggle has no flash-of-wrong-theme on slow connections

## Ideas

Unfiltered. Half of these should never be built.

- [ ] Citation counts pulled from Scholar — needs a build-time fetch; CLAUDE.md
      rules out runtime API calls
- [ ] Talks / posters page (slides as PDFs alongside the CV)
- [ ] Dark-mode-aware OG image generated at build time
- [ ] Timeline visualisation for Background instead of the current list
- [ ] `/now` page — what I'm working on this month
- [ ] RSS feed for news entries

## Settled

Decisions already made — here so they don't get re-filed as bugs.

- **The translucent drawer and header are intentional.** `backdrop-blur` with no
  background colour is the look. _(2026-08-04)_
- **Blue text that isn't a link is fine.** Publication titles with no `url`, and
  degree/role titles, are blue without being clickable. Which shade is settled
  too: `blue-600` in light mode via `accentTitleTextStyle`. _(2026-08-04)_

## Done

<!-- Move completed items here with the date, newest first. -->

- [x] OG image at `public/og-image.png`, rendered from `scripts/og-image.html`,
      so link previews are `summary_large_image` cards instead of blank
      _(2026-08-19)_
- [x] Favicon set — `favicon.ico` (16/32/48), `apple-touch-icon.png`,
      `icon-192/512.png`, a maskable icon, and `site.webmanifest`. Regenerate
      the rasters with `npm run assets` _(2026-08-19)_
- [x] `<link rel="canonical">` per route through a `links` export. Canonical and
      `og:url` use the trailing-slash form GitHub Pages actually serves, since
      `/news` 301s to `/news/` _(2026-08-19)_
- [x] JSON-LD — `Person` on Home, one `ScholarlyArticle` per paper on
      Publications, both from `src/utils/structuredData.ts` _(2026-08-19)_
- [x] `robots.txt` and `sitemap.xml`, written by `scripts/postbuild.mjs` from
      `src/routes.ts`. The script also owns the `404.html` copy and fails the
      build if a route it would list wasn't pre-rendered _(2026-08-19)_
