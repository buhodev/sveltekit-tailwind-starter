<script lang="ts">
	import '../app.postcss';
	import Header from '$lib/components/Header.svelte';
	import type { LayoutData } from './$types';
	import SvelteTheme from '$lib/components/SvelteThemes/SvelteTheme.svelte';
	export let data: LayoutData;
</script>

<Header />

<slot />

<SvelteTheme attribute="data-theme" />
