# Agent Entry Point

Before working in this repository, read:

1. `agent/AGENTS.md`
2. `agent/README.md`
3. `agent/repo-rules.md`
4. the task-specific file from `agent/`

This is a **SvelteKit + Svelte 5 + Tailwind 4** starter for landings and multi-page sites with full prerendering.

## Hard rules

- Use SvelteKit, not raw Svelte + Rollup.
- Use Tailwind 4 (CSS-first config in `src/app.css`), not Sass/CSS modules.
- Use Svelte 5 runes (`$state`, `$derived`, `$props`, `$effect`), not legacy stores or `<script>` reactivity.
- Do not add dependencies unless explicitly requested.
- Do not commit directly to `master`.
- Keep PRs small: one section, one route, or one concern per branch.
- Run `npm run check` and `npm run build` before opening a PR.
- Do not break prerender: every route must remain statically renderable (no per-request data without `prerender = false` opt-out).
