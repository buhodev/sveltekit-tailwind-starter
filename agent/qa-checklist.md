# QA Checklist

Run before merging.

## Build & types

- [ ] `npm run check` — no errors.
- [ ] `npm run lint` — no errors.
- [ ] `npm run build` — succeeds, prerender completes for every route.
- [ ] `npm run preview` — site loads, no 404s on internal links.

## Routing

- [ ] Every navigable route in `Header` and `Footer` resolves to 200.
- [ ] `/sitemap.xml` returns valid XML with all expected URLs.
- [ ] `/robots.txt` references the correct sitemap URL.
- [ ] Anchor links (`#features`, `#partners`, ...) scroll to the right section, not under the sticky header.

## SEO

- [ ] `<title>` set on every page (default from site config + per-page override).
- [ ] `<meta name="description">` present.
- [ ] OG image either default or page-specific.
- [ ] Canonical URL points to a real prerendered route.

## Responsive & a11y

- [ ] 375 / 768 / 1280 / 1920 px all clean (see `responsive_check.md`).
- [ ] Tab focus order is logical and visible.
- [ ] All images have `alt` (empty `alt=""` for purely decorative).
- [ ] Color contrast OK on light and dark themes.

## Performance (lightweight check)

- [ ] No giant unoptimized images checked into `static/images/` (use `enhanced:img` for photos).
- [ ] Lighthouse mobile ≥ 90 on Performance and SEO (run on prod build).
- [ ] No console errors.

## Last 5 minutes

- [ ] Branch is up to date with `master`.
- [ ] PR description filled out.
- [ ] Screenshots attached for visual changes.
