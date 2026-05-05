# Repository Rules

## Stack

- **SvelteKit 2** with file-based routing in `src/routes/`.
- **Svelte 5** with runes (`$state`, `$derived`, `$props`, `$effect`).
- **TypeScript** strict mode.
- **Tailwind 4** stable, CSS-first config in `src/app.css` (`@theme`, `@plugin`).
- **MDsveX** for content pages (`.svx`, `.md` extensions registered as routes).
- **adapter-static** + `prerender = true` in root `+layout.ts`.

## Folder structure

```text
src/
  app.css                    Tailwind import + @theme + @plugin
  app.html                   HTML shell
  app.d.ts                   App namespace types
  svg.d.ts                   SVG import type declarations

  lib/
    components/              Reusable UI (Header, Footer, Button, SEO, ...)
    sections/                Landing sections + neighboring data files
    icons/                   Inline-SVG icons (imported as components)
    config/                  Site config (`site.ts`)
    stores/                  Svelte stores (rare — prefer runes)
    utils/                   Pure helpers

  routes/                    File-based routing
    +layout.svelte
    +layout.ts               (prerender = true)
    +page.svelte             Landing
    sitemap.xml/+server.ts
    robots.txt/+server.ts
    about/+page.svx          MDsveX content page
    ...

  content/                   Optional MDsveX content (cases, blog) — set up per project.

static/
  images/                    Photos, backgrounds, raster, decorative SVG.
  icons/                     UI/section icons (small).
  favicon.png

agent/                       Agent docs (this folder).
```

## Components

Use `src/lib/components/` for **reusable** UI parts. PascalCase filenames.

Examples:

```text
Button.svelte
Header.svelte
Footer.svelte
Container.svelte
Section.svelte
SEO.svelte
BackToTop.svelte
CookieBanner.svelte
```

A component should not own a full landing section. Sections go in `src/lib/sections/`.

## Sections

Use `src/lib/sections/` for landing sections. Every section is a **pair of files**:

```text
src/lib/sections/
  HeroSection.svelte         PascalCase component.
  hero.ts                    lowercase or kebab-case data file.
```

- The data file belongs only to its section.
- The section imports its data from the neighbor: `import { heroSection } from './hero';`.
- Section-specific data does NOT go to `src/lib/data/` or anywhere shared.

See `agent/section_build.md` for the full pattern.

## Pages and routes

- File-based routing under `src/routes/`.
- A landing page is `src/routes/+page.svelte` and only composes sections — no full markup.
- Multi-page routes live as folders: `src/routes/services/+page.svelte`, `src/routes/case-studies/[slug]/+page.svelte`.
- Content pages can be `.svx` (MDsveX) instead of `.svelte` for markdown-with-components workflow.

## Prerender contract

- `src/routes/+layout.ts` sets `export const prerender = true` for the whole site.
- Every new route must remain prerenderable.
- If a route absolutely needs runtime (form action with side effects, API), opt out with `export const prerender = false` and document why in the PR description. Prefer static + client-side calls to a separate API.

## Assets

Use two flat folders under `static/`:

```text
static/images/
static/icons/
```

Naming pattern (both images and icons):

```text
{section}-{type}-{name}.{ext}
```

Examples:

```text
static/images/hero-bg-desktop.jpg
static/images/expert-photo-ivanov.jpg
static/images/partner-logo-acme.svg

static/icons/hero-icon-growth.svg
static/icons/about-icon-speakers.svg
```

Use root-relative paths in code: `/images/hero-bg-desktop.jpg`, `/icons/hero-icon-growth.svg`.

Do not create `static/images/hero/`, `static/images-partners/`, or other nested/forked folders.

For optimization-eligible images (photos, large rasters), prefer `@sveltejs/enhanced-img` with a source under `src/lib/images/` (not `static/`):

```svelte
<enhanced:img src="$lib/images/hero-photo.jpg" alt="..." />
```

## Git workflow

- Create branches from latest `master`.
- Do not commit directly to `master`.
- One concern per branch.
- One section/route per PR when possible.
- Run `npm run check` and `npm run build` before opening a PR.
- Use draft PRs if build was not run.
- Branch naming: `feat/`, `fix/`, `chore/`, `refactor/`, `docs/` prefix.
