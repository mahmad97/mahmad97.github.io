# TODO

Running list of tasks and ideas for this site. Not a commitment — a place to dump
things so they stop taking up head space.

**Conventions**

- `- [ ]` open, `- [x]` done. Move finished items to [Done](#done) with the date.
- Anything urgent goes in [Up next](#up-next); everything else lives in the
  backlog under its area. New idea with no obvious home → [Ideas](#ideas).
- Add a `—` note after an item when the _why_ isn't obvious in six months.
- Prefix with `@claude` if it's something to hand to Claude Code directly.

## Up next

- [ ] **Scroll position persists across navigation.** The scroll container is an
      inner `div` (`App.tsx`), so router navigation never resets it — going from
      a scrolled page to a taller one lands you mid-content. Reset `scrollTop` on
      route change
- [ ] Fill in the Projects page — currently ships a live `/projects` route that
      says "Work in progress..."
- [ ] Decide the fate of `src/pages/Research.tsx` — file exists, isn't routed,
      unclear if it's superseded by Publications

## Accessibility

Findings from a rendered-page audit (Chrome, 1440px and 390px, both themes).

- [ ] **Closed mobile drawer stays in the tab order** — its links sit off-screen
      at x=-240 but remain focusable, so keyboard users tab into 8 invisible
      controls after the hamburger. Mark it `inert` when closed
- [ ] **Drawer close button is labelled `aria-label='Open menu'`** — two buttons
      announce identically. Should be "Close menu"
- [ ] **Escape doesn't close the drawer** (verified — no keydown handler)
- [ ] **Link colour fails WCAG AA in light mode**: `blue-500` measures 3.6:1 on
      the `slate-50` background, needs 4.5:1. Dark mode passes. Darken to
      `blue-600`/`700` in light only — `inlineLinkTextStyle` in `typography.tsx`
- [ ] **Heading levels skip h3** — `XlText` renders `<h4>`, so Background
      outlines as h1 → h2 → h4. Card titles should be h3
- [ ] **No focus-visible style** — the UA default outline draws a black box
      through the sidebar's left border. Design a real focus ring
- [ ] Icon buttons are 36×36; the touch-target guideline is 44×44
- [ ] Skip-to-content link
- [ ] Reduced-motion support for the drawer and theme transitions

## Visual & consistency

- [ ] **Blue text that isn't a link** — publication titles with no `url`
      (`Publications.tsx`) and every degree/role title (`BackgroundCard.tsx`) are
      `text-blue-500` but not clickable. Reserve blue for links
- [ ] **`logoBg` has two incompatible formats** — hex in `background.json` (used
      via `style`), a Tailwind class in `affiliations.json` (used via
      `className`). Pick one. CLAUDE.md documents both as hex, which is wrong
- [ ] **Logo tiles aren't theme-aware** — in dark mode the HKU tile glares white
      while the UTSA and Penn State tiles vanish into the card
- [ ] **CGPA placeholder reserves an empty line** (`invisible` in
      `BackgroundCard.tsx`), leaving an unexplained gap on cards without one
- [ ] **Footer "Last updated <month>" is `new Date()`** — always the current
      month, so it asserts freshness it doesn't know. Use the build date or drop it
- [ ] Services page is a single unbulleted, oddly indented line on an empty page
- [ ] Home hero leaves a large dead area right of the name block on desktop
- [ ] Mobile nav review on a real phone — also check `h-screen` vs `h-dvh`, since
      `100vh` and mobile browser chrome don't agree

## Code health

- [ ] `parseText` is copy-pasted identically into `News.tsx`, `Awards.tsx`, and
      `RecentNewsSection.tsx` — extract it
- [ ] `RecentNewsSection` keys by `item.date`, and `news.json` has "Sep 2016"
      twice — a duplicate-key collision currently masked by the 5-year filter
- [ ] CLAUDE.md says `news.json` entries use a `text` field; they use `description`

## Content

- [ ] Projects page: pick a schema (`src/data/projects.json`) before writing the
      component — title, blurb, stack, links (repo / paper / demo), year, status
- [ ] Keep `news.json` current — last entry should never be more than a few
      months stale or the site reads as abandoned
- [ ] Publications: `url` is an empty string on some entries — backfill as papers
      get indexed
- [ ] Add a short research-interests paragraph to Home for people who land there
      from a paper
- [ ] Review `docs/cv.tex` and `docs/resume.tex` against the site data — they
      drift apart independently

## Pages & features

- [ ] Blog: the `/blog/:slug` route is commented out in `App.tsx`. Either commit
      to it (needs a Markdown pipeline + post index) or delete the stub
- [ ] BibTeX copy button per publication — the thing academics actually want from
      a publications page
- [ ] Filter/group publications by year or venue once the list outgrows one screen
- [ ] Search across news + publications (client-side, data is static and small)
- [ ] Print stylesheet for Publications and Background

## SEO & discoverability

Per-page `<title>` already works via `PageContainer` — verified. The gap is
everything else in `<head>`.

- [ ] Meta description — currently absent on every route
- [ ] Open Graph + Twitter card tags — links to the site currently unfurl bare
- [ ] `public/robots.txt` and a `sitemap.xml` (can be generated at build time from
      the route list in `App.tsx`)
- [ ] JSON-LD `Person` / `ScholarlyArticle` structured data
- [ ] Canonical URLs — the `404.html` redirect trick means paths can be reached
      more than one way
- [ ] Favicon set beyond `public/MA.svg` — apple-touch-icon, manifest

## Quality & infra

- [ ] CI runs `npm run build` only — add `npm run lint` to the workflow so lint
      errors don't reach `main`
- [ ] No PR check workflow: Dependabot PRs merge without ever being built. Add a
      `pull_request` trigger that builds + lints
- [ ] No formatter config committed (no Prettier, no `.editorconfig`) — style is
      whatever the editor did that day
- [ ] No tests at all. Lowest-value-per-effort first: a smoke test that every
      route in `App.tsx` renders, and a schema check on the `src/data/*.json`
      files so a malformed entry fails the build instead of the page
- [ ] Run `npm run analyze` occasionally — nothing watches bundle size
- [ ] Lighthouse pass — the audit above covered contrast, headings, focus, and
      tab order by hand; Lighthouse would also cover performance and best practices
- [ ] Verify the theme toggle has no flash-of-wrong-theme on slow connections

## Ideas

Unfiltered. Half of these should never be built.

- [ ] Citation counts pulled from Scholar — would need a build-time fetch, and
      CLAUDE.md rules out runtime API calls
- [ ] Talks / posters page (slides as PDFs alongside the CV)
- [ ] Dark-mode-aware OG image generated at build time
- [ ] Timeline visualisation for Background instead of the current list
- [ ] `/now` page — what I'm working on this month
- [ ] RSS feed for news entries

## Settled

Decisions already made — here so they don't get re-filed as bugs.

- **The translucent drawer and header are intentional.** `SideDrawer.tsx` and
  `Header.tsx` use `backdrop-blur` with no background colour on purpose; the
  page showing through is the desired look. Not a bug — leave it alone.
  _(2026-08-04)_

## Done

<!-- Move completed items here with the date, newest first. -->
