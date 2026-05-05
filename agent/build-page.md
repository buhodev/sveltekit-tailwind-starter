# Build a Page

Use this file when adding or updating a route.

## Landing route (`/`)

`src/routes/+page.svelte` should only compose sections:

```svelte
<script lang="ts">
	import HeroSection from '$sections/HeroSection.svelte';
	import FeaturesSection from '$sections/FeaturesSection.svelte';
</script>

<HeroSection />
<FeaturesSection />
```

Do not place full section markup in `+page.svelte`.

## Multi-page routes

Folder per route:

```text
src/routes/services/+page.svelte         /services
src/routes/services/+page.ts             optional load function
src/routes/case-studies/[slug]/+page.svelte    /case-studies/:slug
```

Each route should:

- Stay prerenderable (the root layout already sets `prerender = true`).
- Render its own `<SEO title=... description=... />` if title/description differ from defaults.
- Compose sections (`$sections/...`) rather than inline markup whenever the page has more than one block.

## Content pages (MDsveX)

For text-heavy pages (about, terms, blog posts, case studies), use `.svx` instead of `.svelte`:

```svx
<!-- src/routes/about/+page.svx -->
<script lang="ts">
	import Container from '$components/Container.svelte';
	import Section from '$components/Section.svelte';
	import SEO from '$components/SEO.svelte';
</script>

<SEO title="О проекте" />

<Section spacing="lg">
	<Container size="sm">

# Заголовок

Обычный markdown с возможностью вставлять Svelte-компоненты.

	</Container>
</Section>
```

## Dynamic routes with prerender

If a dynamic route (`[slug]`) needs to be prerendered, export `entries` from `+page.ts`:

```ts
export const prerender = true;

export const entries = () => [{ slug: 'first-case' }, { slug: 'second-case' }];
```

Or load entries from a content directory at build time.

## SEO per page

- Root `+layout.svelte` renders `<SEO />` with site defaults.
- Each route may render its own `<SEO title=... description=... image=... />` to override.
- The component sits in `<svelte:head>` — multiple instances merge: page-level overrides win for `<title>`, `<meta>` tags get the last instance.

## Sitemap

When you add a route that should appear in `sitemap.xml`, update `src/lib/config/site.ts → routes`. Do not auto-generate — manual list keeps the sitemap honest.
