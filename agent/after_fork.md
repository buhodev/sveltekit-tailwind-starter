# After Forking

This is a starter — placeholders need replacing on every fresh project. Run through this list **before** the first commit on the fork.

## 1. Rename the project

| File                     | Field                                                                                             | Replace                                                  |
| ------------------------ | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `package.json`           | `"name"`                                                                                          | Project slug, e.g. `acme-landing`.                       |
| `README.md`              | `# Svelte Art Starter` heading                                                                    | Project title.                                           |
| `src/lib/config/site.ts` | `name`, `shortName`, `description`, `url`, `locale`, `ogImage`, `themeColor`, `author`, `twitter` | Real values for the new project.                         |
| `src/lib/config/site.ts` | `routes` array                                                                                    | Real list of routes that should appear in `sitemap.xml`. |
| `src/app.html`           | `<html lang="...">`                                                                               | Project locale (default `ru`).                           |
| `static/favicon.png`     | file                                                                                              | Real favicon.                                            |
| `static/og-default.png`  | file (add it)                                                                                     | Default OG image referenced in `site.ts`.                |

## 2. Decide what stays

Default starter ships with:

- `src/lib/sections/HeroSection.svelte` + `hero.ts`
- `src/lib/sections/FeaturesSection.svelte` + `features.ts`
- `src/routes/about/+page.svx`
- `src/lib/components/CookieBanner.svelte`

Keep, replace, or delete based on the project's needs. If a sample section is removed, also remove its import in `src/routes/+page.svelte`.

## 3. Pick the adapter

Default is `@sveltejs/adapter-static` with `prerender = true` for the whole site. If the target hosting is something other than plain static (Vercel SSR, Cloudflare Workers, Node), swap the adapter in `svelte.config.js` and revisit `src/routes/+layout.ts`.

## 4. Update or remove placeholder content

Search for:

- `example.com` — placeholder URL in `site.ts`.
- `Svelte Art Starter` — placeholder title.
- `Шаблонный репозиторий` — placeholder description in `site.ts` and `+page.svx`.

Replace with real project copy.

## 5. Reset git history (optional)

If the fork should not carry the starter's history, in the new repo root:

```bash
rm -rf .git
git init
git add .
git commit -m "Initial commit from svelte-art-starter"
```

Then add the new remote and push.

## 6. First-run sanity check

```bash
npm install
npm run check    # 0 errors
npm run lint     # clean
npm run build    # prerender succeeds for all routes
npm run preview  # site loads at localhost
```

If any of these fail on a fresh fork, the starter has rotted — fix in the starter repo first, not in the fork.
