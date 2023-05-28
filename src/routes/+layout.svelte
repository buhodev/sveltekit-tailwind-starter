<script lang="ts">
	import '../app.postcss';
	import Header from '$components/Header.svelte';
	import SvelteTheme from '$components/SvelteThemes/SvelteTheme.svelte';

	export let data;
</script>

<Header />

<slot />

<SvelteTheme attribute="data-theme" />
