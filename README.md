# Svelte Art Starter

> Это **стартер**. После форка под конкретный проект — пройдись по `agent/after_fork.md` и поменяй placeholder-данные (имя пакета, заголовки, `site.ts`, favicon).

Тонкий стартер для **лендингов и многостраничных сайтов** на SvelteKit с полным пререндером.

## Стек

- **SvelteKit 2** + **Svelte 5** (runes)
- **TypeScript** (strict)
- **Tailwind 4** stable (CSS-first конфиг через `@theme` / `@plugin`)
- **MDsveX** для контентных страниц (`.svx`, `.md`)
- **adapter-static** + `prerender = true` в корневом `+layout.ts`
- **enhanced-img** для оптимизации картинок
- **mode-watcher** для light/dark
- ESLint 9, Prettier, Vitest, Playwright

## Что внутри

```text
src/
  app.css              Tailwind + @theme + @plugin
  app.html             HTML shell
  lib/
    components/        Header, Footer, Button, Container, Section, SEO, BackToTop, CookieBanner
    sections/          HeroSection + hero.ts, FeaturesSection + features.ts (пары section + data)
    icons/             Inline SVG (импорт через `?component`)
    config/            site.ts — мета-данные сайта и список маршрутов для sitemap
  routes/
    +layout.svelte
    +layout.ts         (prerender = true)
    +page.svelte       Лендинг
    sitemap.xml/+server.ts
    robots.txt/+server.ts
    about/+page.svx    Пример MDsveX-страницы
static/
  images/, icons/      Плоская структура, naming `{section}-{type}-{name}.{ext}`
agent/                 Правила для AI-агентов и человека-разработчика
```

## Запуск

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
npm run preview
```

`npm run build` запускает `vite build`, который пререндерит все маршруты в `build/`. Полученную папку можно деплоить на любой статический хостинг (Vercel, Netlify, Cloudflare Pages, Timeweb, S3+CDN).

## Скрипты

| Скрипт              | Что делает                            |
| ------------------- | ------------------------------------- |
| `npm run dev`       | Vite dev server.                      |
| `npm run build`     | Production-сборка с пререндером.      |
| `npm run preview`   | Локальный просмотр production-сборки. |
| `npm run check`     | svelte-check + типы.                  |
| `npm run lint`      | Prettier + ESLint.                    |
| `npm run format`    | Prettier write.                       |
| `npm run test:unit` | Vitest.                               |
| `npm run test:e2e`  | Playwright.                           |
| `npm run test`      | Unit + e2e.                           |

## Кастомизация под новый проект

Полный чек-лист — в `agent/after_fork.md`. Если коротко:

1. `package.json → name` — слаг проекта.
2. `src/lib/config/site.ts` — имя, URL, описание, OG-картинка, список маршрутов для sitemap.
3. `src/app.html → <html lang="...">` — локаль.
4. `static/favicon.png` + `static/og-default.png` — реальные ассеты.
5. README заголовок — название проекта.
6. `HeroSection` / `FeaturesSection` / `/about` — заменить или удалить.
7. Прочитать `agent/*.md` перед тем, как пускать AI-агентов в репо.

## Лицензия

MIT.
