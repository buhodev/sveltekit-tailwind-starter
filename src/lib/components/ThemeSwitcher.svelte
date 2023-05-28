<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { draw } from 'svelte/transition';
	import { i } from '@inlang/sdk-js';
	import themeStore from '$components/SvelteThemes/index';
	import { toggleTheme } from '$utils';

	const themes = ['dark', 'light'];

	const submitUpdateTheme = ({ action }) => {
		const theme = action.searchParams.get('theme');

		if (theme) {
			document.documentElement.setAttribute('data-theme', theme);
		}
	};

	const ICONS = {
		// moon
		dark: 'M20.25 10.5V6m2.25 2.25H18m-2.25-6v3m1.5-1.5h-3m6.066 10.556A8.615 8.615 0 0 1 9.694 3.684a8.625 8.625 0 1 0 10.622 10.622v0Z',
		// sun
		light:
			'm8.7 5.531-.722-1.734M4.031 10.2l-1.734-.722m17.672.722 1.734-.722M15.3 5.531l.722-1.734M22.5 15h-21m18 3.75h-15M6.581 15a5.625 5.625 0 1 1 10.838 0'
	};
</script>

<noscript>
	<style>
		.no-js {
			display: flex;
		}
		.theme-toggle {
			display: none;
		}
	</style>
</noscript>

<!-- TODO: refactor to keep `redirectTo` and `message` in the url if user submits the form when JS is disabled -->
<!-- TODO: refactor to wrap around the `noscript` tag and delete the enhance function -->
<form
	method="POST"
	class="no-js hidden divide-x divide-neutral-300 overflow-hidden rounded-md border border-neutral-300 bg-white focus:z-10 dark:divide-neutral-700 dark:border-neutral-700 dark:bg-neutral-900"
	use:enhance={submitUpdateTheme}
>
	{#each themes as theme}
		<button
			class="p-1 font-medium text-neutral-600 hover:bg-neutral-50 hover:text-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-white dark:focus-visible:bg-neutral-700 dark:focus-visible:text-white"
			formaction="/{$page.params.lang}?/setTheme&theme={theme}&redirectTo={$page.url.pathname}"
			title={i(`themes.description.${theme}`)}
		>
			<span class="sr-only">
				{i(`themes.description.${theme}`)}
			</span>

			<svg
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d={ICONS[theme]}
					stroke="currentColor"
					stroke-width="1.75"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</button>
	{/each}
</form>

<button
	on:click={toggleTheme}
	class="theme-toggle rounded-lg border border-neutral-300 bg-white p-1 text-neutral-700 hover:text-neutral-900 hover:ring focus-visible:outline-none focus-visible:ring dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
>
	<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		{#if $themeStore.theme === 'dark'}
			<path
				in:draw={{ duration: 300 }}
				d={ICONS.dark}
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		{:else if $themeStore.theme === 'light'}
			<path
				in:draw={{ duration: 300 }}
				d={ICONS.light}
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		{:else}
			<path
				in:draw={{ duration: 300 }}
				d={ICONS[$themeStore.resolvedTheme]}
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		{/if}
	</svg>
</button>
