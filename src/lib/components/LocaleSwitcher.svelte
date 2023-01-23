<script lang="ts">
	import { browser } from '$app/environment';
	import { invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import { setLocale, locale } from '$i18n/i18n-svelte';
	import type { Locales } from '$i18n/i18n-types';
	import { locales } from '$i18n/i18n-util';
	import { loadLocaleAsync } from '$i18n/i18n-util.async';
	import { replaceLocaleInUrl } from '../utils';
	import { LL } from '$i18n/i18n-svelte';

	let value: Locales = $page.params.lang as Locales;

	const switchLocale = async (newLocale: Locales, updateHistoryState = true) => {
		if (!newLocale || $locale === newLocale) return;
		// load new dictionary from server
		await loadLocaleAsync(newLocale);
		// select locale
		setLocale(newLocale);
		// update `lang` attribute
		document.querySelector('html')?.setAttribute('lang', newLocale);
		if (updateHistoryState) {
			// update url to reflect locale changes
			history.pushState({ locale: newLocale }, '', replaceLocaleInUrl($page.url, newLocale));
		}
		// run the `load` function again
		invalidateAll();
	};
	// update locale when navigating via browser back/forward buttons
	const handlePopStateEvent = async ({ state }: PopStateEvent) => switchLocale(state.locale, false);
	// update locale when page store changes
	$: if (browser) {
		const lang = $page.params.lang as Locales;
		switchLocale(lang, false);
		history.replaceState(
			{ ...history.state, locale: lang },
			'',
			replaceLocaleInUrl($page.url, lang)
		);
	}
</script>

<svelte:window on:popstate={handlePopStateEvent} />

<noscript>
	<style>
		.language-toggle {
			display: none;
		}
	</style>

	<ul class="flex space-x-2">
		{#each locales as l}
			<li>
				<a
					class="rounded bg-neutral-100 px-2 py-1"
					class:bg-blue-600={l === $locale}
					class:text-white={l === $locale}
					href={`${replaceLocaleInUrl($page.url, l)}`}
				>
					{$LL.LOCALES[l]()}
				</a>
			</li>
		{/each}
	</ul>
</noscript>

<div class="language-toggle w-24">
	<label class="sr-only" for="change-language">{$LL.LOCALES.description}</label>
	<select
		bind:value
		on:change={() => switchLocale(value)}
		id="change-language"
		name="change-language"
		class="block w-full rounded-lg border-transparent bg-neutral-50 py-1 px-2 text-sm text-neutral-900 focus:border-indigo-500 focus:ring-indigo-500 dark:bg-neutral-900 dark:text-white dark:placeholder-neutral-400 dark:focus:ring-indigo-500"
	>
		{#each locales as l}
			<option selected={l === $locale} value={l}>{$LL.LOCALES[l]()}</option>
		{/each}
	</select>
</div>
