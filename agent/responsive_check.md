# Responsive Check

Run before opening a PR for any visual change.

## Breakpoints

Tailwind defaults plus two custom in `src/app.css`:

| Token | Min width | Use                                |
| ----- | --------- | ---------------------------------- |
| `xs`  | 475 px    | Tight phone overrides.             |
| `sm`  | 640 px    | Larger phones.                     |
| `md`  | 768 px    | Tablets portrait.                  |
| `lg`  | 1024 px   | Tablets landscape / small laptops. |
| `xl`  | 1280 px   | Desktops.                          |
| `2xl` | 1536 px   | Large desktops.                    |
| `3xl` | 1920 px   | Wide screens.                      |

Default styles target desktop (1280+). Mobile/tablet are overrides via `sm:`, `md:`, `lg:`.

## Manual check matrix

| Width   | Device         | Look for                                                                  |
| ------- | -------------- | ------------------------------------------------------------------------- |
| 375 px  | iPhone SE      | Hero, header, primary CTA visible without scroll. No horizontal overflow. |
| 414 px  | iPhone Plus    | Same as 375 + image quality.                                              |
| 768 px  | iPad portrait  | Two-column layouts kick in cleanly.                                       |
| 1024 px | iPad landscape | Nav doesn't collapse where it shouldn't.                                  |
| 1280 px | Desktop        | Default reference.                                                        |
| 1920 px | Wide           | No content stretches beyond max-width containers.                         |

## Common issues

- Horizontal overflow on mobile (usually `min-width` on a wide element). Test with `overflow-x-hidden` on `body` only as a last resort.
- Sticky header overlapping anchor targets — set `scroll-margin-top` on section IDs.
- Tap targets under 44 × 44 px on mobile.
- Images without explicit `width`/`height` causing layout shift. `enhanced:img` handles this; `<img>` from `static/` does not.
- Dark mode variants forgotten on backgrounds, borders, text-on-color.

## Checklist

- [ ] No horizontal scrollbar at 375 px.
- [ ] All CTAs reachable and tappable on mobile.
- [ ] Header doesn't overlap section content on anchor jump.
- [ ] Light and dark themes both look correct (toggle in header).
- [ ] Images have alt text and either explicit dimensions or `enhanced:img`.
- [ ] Focus styles visible on all interactive elements (Tab through the page).
