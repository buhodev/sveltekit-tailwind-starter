# Claude Code Instructions

## Local environment

This is a SvelteKit static-site starter that gets forked under different names — the local path will differ per project. Use the current working directory; do not hardcode absolute paths.

Default shell: bash (Git Bash on Windows, native bash on macOS/Linux). Use Unix syntax and forward slashes in paths.

## Build

Dependencies are not pre-installed in CI environments. Always run `npm install` before `npm run build`.

```bash
npm install
npm run check
npm run build
```

## Agent instructions

See `AGENTS.md` for full repository and workflow rules. Task-specific files live in `agent/`.

## Stack reminders

- Svelte 5 runes only. Do not use `export let`, `$:`, `<script context="module">` patterns from Svelte 3/4.
- Tailwind 4 stable. Config lives in `src/app.css` via `@theme` and `@plugin`.
- Prerender is on by default in `src/routes/+layout.ts`. Adding a route that depends on per-request data requires explicit `export const prerender = false` on that route.
- File-based routing only. No custom client-side routers.

## After forking

The package name, site config and README title are placeholders. See `agent/after_fork.md` for the full customization checklist before pushing the first commit on a new project.
