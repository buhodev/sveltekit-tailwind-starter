<script lang="ts">
	import { languages, referenceLanguage } from '@inlang/sdk-js';
	import { page } from '$app/stores';
	import { replaceLocaleInUrl } from '$lib/utils';
</script>

{#each languages as lang}
	<link rel="alternate" hreflang={lang} href={`${replaceLocaleInUrl($page.url, lang, true)}`} />
{/each}
<link
	rel="alternate"
	hreflang="x-default"
	href={`${replaceLocaleInUrl($page.url, referenceLanguage, true)}`}
/>
