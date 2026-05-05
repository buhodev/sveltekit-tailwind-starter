<script lang="ts">
	import { page } from '$app/state';
	import { site } from '$config/site';

	type Props = {
		title?: string;
		description?: string;
		image?: string;
		canonical?: string;
		type?: 'website' | 'article';
		noindex?: boolean;
	};

	let { title, description, image, canonical, type = 'website', noindex = false }: Props = $props();

	const fullTitle = $derived(title ? `${title} — ${site.name}` : site.name);
	const desc = $derived(description ?? site.description);
	const url = $derived(canonical ?? `${site.url}${page.url.pathname}`);
	const ogImage = $derived(
		image
			? image.startsWith('http')
				? image
				: `${site.url}${image}`
			: `${site.url}${site.ogImage}`
	);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={desc} />
	<link rel="canonical" href={url} />
	{#if noindex}
		<meta name="robots" content="noindex, nofollow" />
	{/if}

	<meta property="og:type" content={type} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={desc} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:locale" content={site.locale} />
	<meta property="og:site_name" content={site.name} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={desc} />
	<meta name="twitter:image" content={ogImage} />
	{#if site.twitter}
		<meta name="twitter:site" content={site.twitter} />
	{/if}

	<meta name="theme-color" content={site.themeColor} />
</svelte:head>
