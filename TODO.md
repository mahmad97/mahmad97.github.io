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

- [ ] Fill in the Projects page — currently ships a live `/projects` route that
      says "Work in progress..."

## Accessibility

Findings from a rendered-page audit (Chrome, 1440px and 390px, both themes).

- [ ] **Heading levels skip h3** — `XlText` renders `<h4>`, so Background
      outlines as h1 → h2 → h4. Card titles should be h3
- [ ] **No focus-visible style** — the UA default outline draws a black box
      through the sidebar's left border. Design a real focus ring
- [ ] Icon buttons are 36×36; the touch-target guideline is 44×44
- [ ] Skip-to-content link
- [ ] Reduced-motion support for the drawer and theme transitions

## Visual & consistency

- [ ] **Logo tiles aren't theme-aware** — in dark mode the HKU tile glares white
      while the UTSA and Penn State tiles vanish into the card
- [ ] **CGPA placeholder reserves an empty line** (`invisible` in
      `BackgroundCard.tsx`), leaving an unexplained gap on cards without one
- [ ] **Footer "Last updated <month>" is `new Date()`** — always the current
      month, so it asserts freshness it doesn't know. Use the build date or drop it
- [ ] Services page is a single unbulleted, oddly indented line on an empty page
- [ ] Home hero leaves a large dead area right of the name block on desktop
- [ ] Mobile nav review on a real phone. The `h-screen` vs `h-dvh` half of this
      is settled — nothing viewport-height-sized is left on mobile now that the
      document scrolls; the one remaining `h-screen` is the `md:` sidebar

## Code health

- [ ] Nothing open right now.

## Content

- [ ] Projects page: pick a schema (`src/data/projects.json`) before writing the
      component — title, blurb, stack, links (repo / paper / demo), year, status
- [ ] Keep `news.json` current — last entry should never be more than a few
      months stale or the site reads as abandoned
- [ ] Publications: keep `url` filled in as papers get indexed. Nothing is
      missing one today (1 of 1 has a url), so this is a watch item, not a chore
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

Title, description, Open Graph, and Twitter tags now come from each route's
`meta` export and are baked into the pre-rendered HTML — see `src/utils/meta.ts`.

- [ ] `public/robots.txt` and a `sitemap.xml` (generate at build time from the
      route list in `src/routes.ts`)
- [ ] JSON-LD `Person` / `ScholarlyArticle` structured data
- [ ] `<link rel="canonical">` per route — `og:url` is set, but the canonical
      link tag isn't. Needs a `links` export per route module
- [ ] Favicon set beyond `public/MA.svg` — apple-touch-icon, manifest
- [ ] OG image — `og:image` is unset, so link previews have no thumbnail

## Quality & infra

- [ ] **`npm run preview` doesn't serve what GitHub Pages serves.** Vite previews
      as an SPA, so a bare `/news` falls back to the root `index.html` and you get
      the _Home_ page's markup, on top of which the client renders News — two full
      app trees stacked in `<body>`. `/news/` (trailing slash) serves the right
      file. Production is unaffected: Pages resolves the directory index. Until
      this is fixed, always preview with a trailing slash, or any rendered-page
      audit will be measuring the wrong DOM. Fix is probably `appType: 'mpa'` in
      `vite.config.ts`, but that's shared with `npm run dev`, so it needs checking
      against the `*` catch-all before committing to it
- [ ] No `ErrorBoundary` export in `src/root.tsx` — a thrown render error falls
      back to React Router's bare default page
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
- **Blue text that isn't a link is fine.** Publication titles with no `url`
  (`Publications.tsx`) and degree/role titles (`BackgroundCard.tsx`) are
  `text-blue-500` without being clickable. "Reserve blue for links" is a
  convention, not a rule, and this is a personal site — the colour is the point.
  This settles _which_ colour, not how dark it is: they are `blue-600` in light
  mode via `accentTitleTextStyle`, for contrast, and still unmistakably blue.
  _(2026-08-04)_

## Done

<!-- Move completed items here with the date, newest first. -->

- [x] **The non-link blue titles are `blue-600` in light mode too**, so every
      piece of blue text on the site now clears 4.5:1. The colour lives in one
      place now — `accentTitleTextStyle` in `typography.tsx` — instead of the
      same `text-blue-500 dark:text-blue-500` literal copy-pasted into
      `Publications.tsx`, `BackgroundCard.tsx`, `CommitteeSection.tsx`, and
      `CollaboratorsSection.tsx`, which is how it drifted from the link colour in
      the first place.
      Worth knowing where this is actually visible: only Background renders these
      titles today (9 of them, measured 5.01:1 light / 5.36:1 dark). The other
      three pages wrap the title in an `InlineLink` whenever the entry has a
      `url`, and right now every entry does — 1 of 1 publication, 12 of 12
      collaborators, and the committee list is empty. So the change is a real fix
      on Background and correct-but-dormant elsewhere until an entry without a
      `url` shows up. Verified across all four pages in both themes: links worst
      5.01:1 light / 5.36:1 dark _(2026-08-04)_

- [x] **Link colour meets WCAG AA in both themes.** Light mode moves to
      `blue-600` (5.01:1 on `slate-50`); dark mode keeps `blue-500`, which is
      already 5.36:1 on `slate-950` and would fall to 3.84:1 if darkened to
      match. Ratios were measured, not assumed: Tailwind's `oklch()` values were
      painted to a canvas and read back as sRGB, which reproduced the 3.60:1
      figure this list already had for `blue-500`. Applied to all three link
      styles, since the failure was the colour and not one component —
      `inlineLinkTextStyle`, the active `navTextStyle`, and the hard-coded link
      in `NotFound.tsx` (which now reuses `inlineLinkTextStyle`). Icon buttons
      keep `blue-500`: as non-text UI they need 3:1, and 3.60:1 clears it
      _(2026-08-04)_

- [x] **The drawer now has a complete focus contract.** Opening moves focus to
      the close button, Tab and Shift+Tab wrap inside the drawer instead of
      walking into the page behind the overlay, and closing — by Escape, by the
      close button, or by clicking the overlay — returns focus to the hamburger
      rather than dropping it to `<body>`. A `wasOpen` guard keeps a freshly
      loaded page from stealing focus. The trap is what makes the added
      `role='dialog'` + `aria-modal='true'` honest _(2026-08-04)_

- [x] **Prettier and `.editorconfig` are committed.** The config wasn't guessed —
      it was derived by running Prettier against the existing source and picking
      the options that reproduced it: `useTabs`, `singleQuote`, `jsxSingleQuote`,
      `bracketSameLine` leaves 39 of 41 files untouched, which is what the editor
      had been doing all along. Formatting the repo therefore changed only 5
      files, all genuine drift: a misindented `<img>` in `AffiliationCard`,
      two over-long lines in `CommitteeSection`, a long `transition-property` in
      `App.css`, spaces-not-tabs in `tsconfig.node.json`, and quote style in
      `dependabot.yml`. Prettier left the Tailwind v4 `@theme` / `@custom-variant`
      / `@utility` at-rules alone. Added `npm run format` and
      `npm run format:check` _(2026-08-04)_

- [x] **PR check workflow.** `.github/workflows/pr-checks.yml` runs on
      `pull_request`: format check, lint, then build. Dependabot PRs now get
      built before they can be merged. No LaTeX step — the PDFs are deploy
      artifacts that nothing imports, so the build doesn't need them — and no
      separate typecheck step, since `npm run build` already runs `tsc -b`.
      `format:check` was added to the deploy workflow too, so `main` is held to
      the same bar as a PR rather than being allowed to drift _(2026-08-04)_

- [x] **`npm run lint` runs again, and CI runs it.** `eslint.config.js` now uses
      `reactHooks.configs.flat['recommended-latest']` — the top-level
      `recommended-latest` is the eslintrc shape, whose `plugins` is a string
      array that flat config rejects. Also repointed the stale `dist` ignore at
      `build`/`.react-router`. That surfaced 10 real errors, now all fixed:
      9 × `only-export-components` on route modules (allow-listed `meta`/`links`
      and friends for `src/pages/**` and `src/root.tsx` — `action` and `headers`
      deliberately left off, since the prerender build fails on them and lint
      catching that early is useful), plus one `react-hooks/refs` in
      `ThemeToggle` (see below). `npm run lint` is now a step in
      `build-and-deploy.yml`, before the build _(2026-08-04)_

- [x] **`ThemeToggle` no longer reads a ref during render.** The outgoing theme
      is rendered output — the icon that slides away — so it's `useState` now
      instead of `useRef` + a separate `animating` boolean. One piece of state
      where there were two. Verified the full light → dark → system → light
      cycle and that the outgoing icon mounts during the animation and unmounts
      on `animationend` _(2026-08-04)_

- [x] **Drawer accessibility: `inert`, correct label, Escape.** The closed drawer
      is `inert`, so its 9 controls are no longer tab-reachable (verified by
      trying to focus each one); the close button says "Close menu" instead of
      "Open menu"; and Escape closes the drawer via a document-level keydown
      listener that's only attached while open. `AppShell`'s handlers are
      `useCallback`'d so that listener isn't re-attached on every render.
      Follow-up filed under [Accessibility](#accessibility): focus should return
      to the hamburger on close _(2026-08-04)_
