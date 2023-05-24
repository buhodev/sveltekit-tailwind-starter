<script lang="ts">
	import { page } from '$app/stores';
	import { i, language, languages, switchLanguage } from '@inlang/sdk-js';
	import { replaceLocaleInUrl } from '$lib/utils';

	let lang = $page.params.lang;
</script>

<noscript>
	<style>
		.language-toggle {
			display: none;
		}
	</style>

	<ul class="flex space-x-2">
		{#each languages as lang}
			<li>
				<a
					class="rounded bg-neutral-100 px-2 py-1"
					class:bg-blue-600={lang === language}
					class:text-white={lang === language}
					href={`${replaceLocaleInUrl($page.url, lang)}`}
				>
					{i(`locales.${lang}`)}
				</a>
			</li>
		{/each}
	</ul>
</noscript>

<div class="language-toggle w-24">
	<label class="sr-only" for="change-language">{i('locales.description')}</label>
	<select
		bind:value={lang}
		on:change={() => switchLanguage(lang)}
		id="change-language"
		name="change-language"
		class="block w-full rounded-lg border-transparent bg-neutral-50 px-2 py-1 text-sm text-neutral-900 focus:border-indigo-500 focus:ring-indigo-500 dark:bg-neutral-900 dark:text-white dark:placeholder-neutral-400 dark:focus:ring-indigo-500"
	>
		{#each languages as lang}
			<option selected={lang === language} value={lang}>{i(`locales.${lang}`)}</option>
		{/each}
	</select>
</div>
