# Claude Code Instructions

## Local environment

Developer machine: Windows 11
Local project path: `C:\Users\Art\Documents\GitHub\sveltekit-tailwind-starter`
Shell: bash (Git Bash) — use Unix syntax, forward slashes in paths.

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
