<script lang="ts">
	import { page } from '$app/stores';
	import { languages, referenceLanguage } from '@inlang/sdk-js';
	import { replaceLocaleInUrl } from '$utils';
</script>

{#each languages as lang}
	<link rel="alternate" hreflang={lang} href={`${replaceLocaleInUrl($page.url, lang, true)}`} />
{/each}
<link
	rel="alternate"
	hreflang="x-default"
	href={`${replaceLocaleInUrl($page.url, referenceLanguage, true)}`}
/>
