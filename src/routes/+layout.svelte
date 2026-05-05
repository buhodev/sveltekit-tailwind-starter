<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';
	import BackToTop from '$components/BackToTop.svelte';
	import CookieBanner from '$components/CookieBanner.svelte';
	import SEO from '$components/SEO.svelte';

	const nav = [
		{ label: 'Возможности', href: '/#features' },
		{ label: 'О проекте', href: '/about' }
	];

	let { children } = $props();
</script>

<ModeWatcher />
<SEO />

<div class="flex min-h-screen flex-col">
	<Header {nav} />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>

<BackToTop />
<CookieBanner />
