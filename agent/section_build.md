# Build a Section

Use this file when creating or updating a landing section.

## Pattern

Every section is a pair of files in `src/lib/sections/`:

```text
src/lib/sections/
  <Name>Section.svelte       PascalCase component.
  <name>.ts                  lowercase or kebab-case data file.
```

- The data file is consumed only by its sibling section.
- Do not move section-specific data to `src/lib/data/` or to global config.

## Data file

```ts
// src/lib/sections/partners.ts
export const partnersSection = {
	title: 'Партнёры',
	description: '...',
	partners: [{ name: 'Acme', logo: '/images/partner-logo-acme.svg' }]
} as const;
```

## Section component

```svelte
<!-- src/lib/sections/PartnersSection.svelte -->
<script lang="ts">
	import Container from '$components/Container.svelte';
	import Section from '$components/Section.svelte';
	import { partnersSection } from './partners';
</script>

<Section id="partners" spacing="md">
	<Container>
		<h2 class="text-3xl font-semibold tracking-tight">{partnersSection.title}</h2>
		<p class="mt-3 text-neutral-600 dark:text-neutral-400">{partnersSection.description}</p>

		<ul class="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
			{#each partnersSection.partners as p (p.name)}
				<li>…</li>
			{/each}
		</ul>
	</Container>
</Section>
```

## Composition

Add the section to the page that should render it:

```svelte
<!-- src/routes/+page.svelte -->
<script lang="ts">
	import HeroSection from '$sections/HeroSection.svelte';
	import PartnersSection from '$sections/PartnersSection.svelte';
</script>

<HeroSection />
<PartnersSection />
```

A landing page (`+page.svelte`) should only compose sections — no full markup.

## Section IDs

- Each section uses a stable `id` if any nav anchor points to it.
- Header nav and CTA links must point to existing IDs.
- If two anchors must scroll to the same block, keep one section ID and add a secondary anchor inside the section.

## Section CSS

- Tailwind utility classes only. No `<style>` blocks unless absolutely necessary (rare animation, etc.).
- Desktop styles as default, then `sm:`/`md:`/`lg:` overrides.
- Avoid magic values; if a Figma value is unique, OK — but document with an inline comment.

## Completion checklist

- [ ] Section component exists in `src/lib/sections/`.
- [ ] Data file exists next to it.
- [ ] Section is rendered from a page (`+page.svelte` or another route).
- [ ] Section ID is unique on the page.
- [ ] All header/CTA anchors that target this section work.
- [ ] Assets are local (`static/images/`, `static/icons/` or `$lib/images/` for `enhanced:img`).
- [ ] Responsive breakpoints handled.
- [ ] Visible text proofread.
- [ ] `npm run check` passes.
