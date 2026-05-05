# Agent Workflow

Read these files before any task:

1. `agent/README.md` — overview of the agent docs system.
2. `agent/repo-rules.md` — repository structure, assets, git workflow.
3. `agent/router.md` — which task-specific file to load.
4. The task-specific file selected by the router.

## Project type

SvelteKit landing/multi-page site starter with full prerendering.

- Stack: SvelteKit 2, Svelte 5 (runes), TypeScript, Tailwind 4, MDsveX, adapter-static.
- Output: fully static site, deployable to any static host (Netlify, Vercel static, Cloudflare Pages, S3+CDN, Timeweb static).

## Hard rules

- No SaaS bloat: no Supabase, Stripe, auth, dashboards, dynamic backends. If a project needs them, it's a different starter.
- No custom client-side routers. SvelteKit file-based routing only.
- No legacy Svelte syntax (`export let`, `$:` reactive blocks, `<svelte:component this={...}>` for dynamic UNLESS unavoidable).
- All routes prerender. If a route can't, it must opt out explicitly with `export const prerender = false` and the reason should be noted in the PR description.
- Section data lives next to the section file (see `agent/section_build.md`).
- Assets live flat in `static/images/` and `static/icons/` with naming `{section}-{type}-{name}.{ext}`.
