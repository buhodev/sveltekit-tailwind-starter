<div align="center">

[![Svelte badge](https://img.shields.io/badge/Svelte-5.2.2-orange)](https://svelte.dev/)
[![SvelteKit badge](https://img.shields.io/badge/SvelteKit-2.8.1-orange)](https://kit.svelte.dev/)
[![TailwindCSS badge](https://img.shields.io/badge/TailwindCSS-3.4.15-teal)](https://tailwindcss.com/)
[![TypeScript badge](https://img.shields.io/badge/TypeScript-5.6.3-blue)](https://www.typescriptlang.org/)
[![Vitest badge](https://img.shields.io/badge/vitest-2.1.0-green)]()
[![Playwright badge](https://img.shields.io/badge/Playwright-1.48.2-brightgreen)](https://playwright.dev/)
[![Eslint badge](https://img.shields.io/badge/Eslint-9.15.0-blue)]()
[![Prettier badge](https://img.shields.io/badge/Prettier-3.3.3-pink)]()
[![Vite badge](https://img.shields.io/badge/Vite-5.4.11-blue)]()

</div>

# Svelte Kit + TypeScript + Tailwind CSS starter template

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## 🧰 What's inside

This minimal starter template comes with:

### JavaScript frameworks

- [Svelte 5](https://svelte.dev): Web development for the rest of us.
- [SvelteKit](https://svelte.dev/docs/kit): Web development, streamlined.

### Components

TODO

### Type checking

- [TypeScript](https://www.typescriptlang.org): JavaScript with syntax for types.

### CSS frameworks

- [TailwindCSS 4](https://tailwindcss.com): Rapidly build modern websites without ever leaving your HTML.
- [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms): A plugin that provides a basic reset for form styles that makes form elements easy to override with utilities.
- Sensible defaults in the `tailwind.config.js`.

### Formatting & Linting

- [Prettier](https://prettier.io): An opinionated code formatter.
- [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss): Prettier plugin for Tailwind CSS that automatically sorts classes based on the official recommended class order.
- [Eslint](https://eslint.org): Find and fix problems in your JavaScript code.

### i18n

- [@inlang/paraglide-sveltekit](https://github.com/opral/inlang-paraglide-js): Tree-shakable i18n library build on the inlang ecosystem.

### Testing

- [Playwright](https://playwright.dev): Fast and reliable end-to-end testing for modern web apps.
- [Vitest](https://vitest.dev/): Blazing Fast Unit Test Framework.

### Fonts

- [Inter variable](https://fontsource.org/fonts/inter/): A typeface carefully crafted & designed for computer screens.

### Utils

- [mode-watcher](https://github.com/svecosystem/mode-watcher/): Simple light/dark mode management for SvelteKit apps.

### Icons

- [@poppanator/sveltekit-svg](https://github.com/poppa/sveltekit-svg): SvelteKit plugin that makes it possible to import SVG files as Svelte components, inline SVG code or urls.
- [unplugin-icons](https://github.com/unplugin/unplugin-icons): Access thousands of icons as components on-demand universally.

## 📦 Installation

Download the repository, open the folder and install the dependencies:

```bash
# download the project
npx degit buhodev/sveltekit-tailwind-starter my-project
cd my-project
npm install # or pnpm install
```

## 🛠️ Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## 🚀 Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## 🤝 Contributing

Contributions, issues and feature requests are welcome!
<br />
Feel free to check the [issues page](https://github.com/buhodev/sveltekit-tailwind-starter/issues).

## License

MIT
