<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import themeStore, { setTheme } from '$lib/SvelteThemes/index';
	import { draw } from 'svelte/transition';
	import { page } from '$app/stores';

	const themes = ['dark', 'light'];

	const submitUpdateTheme: SubmitFunction = ({ action }) => {
		const theme = action.searchParams.get('theme');

		if (theme) {
			document.documentElement.setAttribute('data-theme', theme);
		}
	};

	const toggleTheme = () => {
		if ($themeStore.theme === 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
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

<form method="POST" class="no-js hidden space-x-2" use:enhance={submitUpdateTheme}>
	{#each themes as theme}
		<button
			class="rounded border px-2 py-1"
			formaction="/{$page.params.lang}?/setTheme&theme={theme}&redirectTo={$page.url.pathname}"
		>
			{theme}
		</button>
	{/each}
</form>

<button
	on:click={toggleTheme}
	class="theme-toggle rounded border border-neutral-200 bg-white p-1 text-neutral-900 hover:ring focus-visible:outline-none focus-visible:ring dark:border-neutral-600 dark:bg-neutral-900 dark:text-neutral-100"
>
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
