# Svelte Kit + TypeScript + Tailwind CSS starter template

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

This starter template comes with:

- [Vite](https://vitejs.dev) for "Next Generation Frontend Tooling".
- [Svelte](https://svelte.dev) for "cybernetically enhanced web apps".
- [Svelte Kit](https://kit.svelte.dev) for "web development, streamlined".
- [TypeScript](https://www.typescriptlang.org) for type checking.
- [Tailwind CSS](https://tailwindcss.com) for rapid prototyping.
- [Prettier](https://prettier.io) for code formatting + [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) for official class sorting.
- [Eslint](https://eslint.org) for code linting.
- [Playwright](https://playwright.dev) for browser testing.
- [Vitest](https://vitest.dev/) for unit testing.
- Inter variable font included with [optimizations](https://leerob.io/blog/fonts) to minimize layout shifts.
- Sensible defaults in the `tailwind.config.js` to create a custom design system for your project.

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Credits

Best practices for font optimization by Lee Robinson's [Web Fonts in 2021](https://leerob.io/blog/fonts) blog post.
