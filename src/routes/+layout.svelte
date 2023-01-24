<script lang="ts">
	import '../app.postcss';
	import { page } from '$app/stores';
	import LL, { setLocale } from '$i18n/i18n-svelte';
	import Header from '$lib/components/Header.svelte';
	import HeadHrefLangs from '$lib/components/HeadHrefLangs.svelte';
	import type { LayoutData } from './$types';
	import SvelteTheme from '$lib/SvelteThemes/SvelteTheme.svelte';
	export let data: LayoutData;
	// at the very top, set the locale before you access the store and before the actual rendering takes place
	setLocale(data.locale);
	console.info($LL.log({ fileName: '+layout.svelte' }));
</script>

<svelte:head>
	<title>{$page.data.title || 'SvelteKit + TypeScript + TailwindCSS starter'}</title>
	<HeadHrefLangs />
</svelte:head>

<Header />

<slot />

<SvelteTheme attribute="data-theme" />
