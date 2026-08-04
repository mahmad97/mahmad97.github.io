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

Title, description, Open Graph, and Twitter tags come from each route's `meta`
export — see `src/utils/meta.ts`.

- [ ] `public/robots.txt` and `sitemap.xml`, generated at build time from
      `src/routes.ts`
- [ ] JSON-LD `Person` / `ScholarlyArticle`
- [ ] `<link rel="canonical">` per route — needs a `links` export per module
- [ ] Favicon set beyond `public/MA.svg` — apple-touch-icon, manifest
- [ ] OG image — `og:image` is unset, so link previews have no thumbnail

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

- [x] Non-link blue titles are `blue-600` in light mode, so all blue text clears
      4.5:1. The colour lives in `accentTitleTextStyle` (`typography.tsx`) instead
      of being copy-pasted into four files _(2026-08-04)_
- [x] Link colour meets WCAG AA in both themes — `blue-600` light (5.01:1),
      `blue-500` dark (5.36:1). Applied to `inlineLinkTextStyle`, the active
      `navTextStyle`, and `NotFound.tsx`. Icon buttons keep `blue-500`, which
      clears the 3:1 bar for non-text UI _(2026-08-04)_
- [x] Drawer focus contract — focus moves to the close button on open, Tab wraps
      inside, and closing returns focus to the hamburger _(2026-08-04)_
- [x] Prettier and `.editorconfig` committed, plus `npm run format` and
      `format:check`. Config was derived from the existing source, so formatting
      the repo changed only 5 files _(2026-08-04)_
- [x] `.github/workflows/pr-checks.yml` runs format, lint, and build on
      `pull_request`, so Dependabot PRs get built before merge. `format:check`
      added to the deploy workflow too _(2026-08-04)_
