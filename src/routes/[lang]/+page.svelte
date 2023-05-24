<script>
	import { i } from '@inlang/sdk-js';
	import HeadHrefLangs from '$lib/components/HeadHrefLangs.svelte';
</script> 

<svelte:head>
	<title>SvelteKit + TypeScript + TailwindCSS starter</title>
	<HeadHrefLangs />
</svelte:head>

<h1 class="text-5xl font-extralight">{i('welcome')}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
