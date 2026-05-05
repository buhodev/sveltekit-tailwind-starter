# Assets

## Folders

```text
static/images/        Photos, backgrounds, raster images, decorative SVG.
static/icons/         Small UI/section icons (SVG).
src/lib/images/       Source images for `@sveltejs/enhanced-img`.
src/lib/icons/        Inline SVG components (`@poppanator/sveltekit-svg`).
```

Do not create nested folders like `static/images/hero/` or `static/images-partners/`. Flat layout, names carry the namespace.

## Naming

Pattern (both images and icons):

```text
{section}-{type}-{name}.{ext}
```

| Part      | Examples                                                                    |
| --------- | --------------------------------------------------------------------------- |
| `section` | hero, about, program, experts, partners, faq, footer, participate, services |
| `type`    | bg, photo, logo, icon, decor, arrow, check, pattern                         |
| `name`    | descriptive, kebab-case                                                     |
| `ext`     | jpg, png, webp, avif, svg                                                   |

Examples:

```text
static/images/hero-bg-desktop.jpg
static/images/hero-bg-mobile.jpg
static/images/expert-photo-ivanov.jpg
static/images/partner-logo-acme.svg

static/icons/hero-icon-growth.svg
static/icons/about-icon-speakers.svg
static/icons/partners-icon-check.svg
```

## Paths in code

Use root-relative paths for `static/`:

```ts
'/images/hero-bg-desktop.jpg';
'/icons/hero-icon-growth.svg';
```

Never use:

```ts
'/static/images/...'; // wrong — /static/ is stripped
'/images/hero/desktop.jpg'; // wrong — no subfolders
'https://www.figma.com/api/mcp/...'; // wrong — temp Figma URLs forbidden
```

## Optimized images

For photos and large rasters use `@sveltejs/enhanced-img` with a source in `src/lib/images/`:

```svelte
<script>
	import heroPhoto from '$lib/images/hero-photo.jpg?enhanced';
</script>

<enhanced:img src={heroPhoto} alt="..." class="w-full" />
```

This produces multiple formats (AVIF, WebP, JPEG) and a `srcset` automatically. Use it for any photo over ~50 KB.

## Inline SVG icons

For icons that need to be styled with `currentColor` or sized via Tailwind, put SVG into `src/lib/icons/` and import as a component:

```svelte
<script>
	import GrowthIcon from '$icons/growth.svg?component';
</script>

<GrowthIcon class="h-5 w-5" />
```

For decorative icons that never change color, just reference the file from `static/icons/` via `<img>`.

## Figma asset rules

- Temporary Figma asset URLs (`https://www.figma.com/api/mcp/asset/...`) are **forbidden** in commits.
- Download Figma assets, rename to the convention above, place under `static/images/` or `static/icons/`, commit alongside the section.

## Binary commits

PNG, JPG, JPEG, WebP, AVIF, GIF are binary — commit via shell, not via APIs that go through UTF-8.

```bash
git add static/images static/icons
git commit -m "Add landing assets"
```

SVG is text and commits like any other file.
