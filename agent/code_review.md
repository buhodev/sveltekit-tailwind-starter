# Code Review

Use when reviewing a branch or PR for merge readiness.

## Checks

### Stack & conventions

- [ ] No legacy Svelte syntax (`export let`, `$:`, `<script context="module">` for stores).
- [ ] No custom client-side router; SvelteKit file-based routing only.
- [ ] No new dependencies unless explicitly justified in the PR description.
- [ ] No SaaS / dashboard / auth code (this starter is for static sites).

### Structure

- [ ] Sections live in `src/lib/sections/` as `<Name>Section.svelte` + `<name>.ts` pair.
- [ ] Section data is **next to** the section, not in `src/lib/data/`.
- [ ] Reusable components in `src/lib/components/` with PascalCase filenames.
- [ ] No full section markup inside `+page.svelte`/`+layout.svelte`.

### Routing & prerender

- [ ] All routes prerenderable. Any `prerender = false` is justified in the PR.
- [ ] New routes added to `src/lib/config/site.ts → routes` for sitemap.
- [ ] `<SEO />` per page when title/description differ from defaults.

### Assets

- [ ] Files under `static/images/` and `static/icons/` follow `{section}-{type}-{name}.{ext}` naming.
- [ ] No nested folders inside `static/images/`.
- [ ] No temp Figma URLs in code.
- [ ] Photos use `enhanced:img` from `$lib/images/`.

### Styling

- [ ] Tailwind classes only; no `<style>` blocks unless justified.
- [ ] Dark mode handled (`dark:` variants on relevant utilities).
- [ ] Responsive: desktop default, `sm:`/`md:`/`lg:` overrides.

### Quality

- [ ] `npm run check` passes (svelte-check, types).
- [ ] `npm run lint` passes (eslint, prettier).
- [ ] `npm run build` succeeds and prerenders all routes.
- [ ] No console errors in dev or build preview.

## Red flags

- A new route without a corresponding sitemap entry.
- A "small fix" PR that bumps multiple unrelated dependencies.
- New `src/lib/data/` files with section-specific content.
- `<style global>` or large `<style>` blocks (use Tailwind).
- Mixing Svelte 4-style stores with runes in the same component.
