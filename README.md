# Svelte Kit + TypeScript + Tailwind CSS starter template

Everything you need to build a full-featured Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## What's inside

This starter template comes with:

### Bundler

- [Vite](https://vitejs.dev): Next Generation Frontend Tooling.

### JavaScript frameworks

- [Svelte](https://svelte.dev): Cybernetically enhanced web apps.
- [Svelte Kit](https://kit.svelte.dev): Web development, streamlined.

### Components

- [svelte-headlessui](https://captaincodeman.github.io/svelte-headlessui): Unstyled, fully accessible UI components for Svelte.
- [svelte-transition](https://github.com/captaincodeman/svelte-transition): Svelte Transition Component.
- [svelte-french-toast](https://svelte-french-toast.com/): Buttery smooth toast notifications.
- [svelte-themes](https://github.com/beynar/svelte-themes/): Perfect SvelteKit dark mode in 2 lines of code. Support System preference and any other theme with no flashing.
- [@poppanator/sveltekit-svg](https://github.com/poppa/sveltekit-svg): SvelteKit plugin that makes it possible to import SVG files as Svelte components, inline SVG code or urls.

### Type checking

- [TypeScript](https://www.typescriptlang.org): JavaScript with syntax for types.

### Data validation

- [zod](https://zod.dev/): TypeScript-first schema validation with static type inference.
- [zod-form-data](https://www.npmjs.com/package/zod-form-data): Validation helpers for zod specifically for parsing FormData or URLSearchParams.

### CSS frameworks

- [Tailwind CSS](https://tailwindcss.com): Rapidly build modern websites without ever leaving your HTML.
- [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms): A plugin that provides a basic reset for form styles that makes form elements easy to override with utilities.
- Sensible defaults in the `tailwind.config.js`.

### Formatting & Linting

- [Prettier](https://prettier.io): An opinionated code formatter.
- [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss): Prettier plugin for Tailwind CSS that automatically sorts classes based on the official recommended class order.
- [Eslint](https://eslint.org): Find and fix problems in your JavaScript code.

### i18n

- [typesafe-i18n](https://github.com/ivanhofer/typesafe-i18n#get-started): A fully type-safe and lightweight internationalization library for all your TypeScript and JavaScript projects.

### Testing

- [Playwright](https://playwright.dev): Fast and reliable end-to-end testing for modern web apps.
- [Vitest](https://vitest.dev/): Blazing Fast Unit Test Framework.

### Fonts

- [Inter variable](https://rsms.me/inter/): A typeface carefully crafted & designed for computer screens.
- [Optimizations](https://leerob.io/blog/fonts) to minimize layout shifts.

### Utils

- [svelte-local-storage-store](https://github.com/joshnuss/svelte-local-storage-store): A Svelte store that persists to localeStorage.
- [date-fns](https://date-fns.org/): Modern JavaScript date utility library.
- [date-fns-tz](https://github.com/marnusw/date-fns-tz): Complementary library for date-fns v2 adding IANA time zone support.
- [@neoconfetti/svelte](https://github.com/puruvj/neoconfetti): Confetti in Svelte.

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

i18n logic copied from [typesafe-i18n-demo-sveltekit](https://github.com/ivanhofer/typesafe-i18n-demo-sveltekit).

svelte-themes port of next-theme for SvelteKit by [beynar/svelte-themes](https://github.com/beynar/svelte-themes/).
