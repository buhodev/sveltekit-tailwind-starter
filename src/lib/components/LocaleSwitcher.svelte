<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { i, language, languages, switchLanguage } from '@inlang/sdk-js';

	import ArrowPathIcon from '$lib/icons/arrow-path.svg?component';

	let lang = $page.params.lang;
	let formElement: HTMLFormElement;

	const submitUpdateLocale = ({ cancel }) => {
		// when JS is enabled, update locale whenever the select value changes
		switchLanguage(lang);
		// avoid submitting the form / page refresh
		cancel();
	};

	const requestSubmit = () => {
		if (typeof HTMLFormElement.prototype.requestSubmit == 'function') {
			formElement.requestSubmit();
		} else {
			formElement.submit();
		}
	};
</script>

<!-- TODO: refactor to keep `redirectTo` in the url if user submits the form when JS is disabled -->
<form
	bind:this={formElement}
	class="flex items-center space-x-2"
	method="POST"
	action="/{lang}?/setLanguage&origin={$page.url}"
	use:enhance={submitUpdateLocale}
>
	<!-- TODO: the max-width should be relative to the length of the longest language name -->
	<label for="lang" class="w-24">
		<span class="sr-only">{i('locales.description')}</span>
		<!-- Submit the form when the value changes and JS is available -->
		<select
			bind:value={lang}
			on:change={requestSubmit}
			id="lang"
			name="lang"
			class="block w-full rounded-lg border border-neutral-300 bg-white px-2 py-1 text-sm text-neutral-900 focus:border-indigo-500 focus:ring-indigo-500 dark:border dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:placeholder-neutral-400 dark:focus:ring-indigo-500"
		>
			{#each languages as lang}
				<option selected={lang === language} value={lang}>{i(`locales.${lang}`)}</option>
			{/each}
		</select>
	</label>

	<noscript>
		<!-- Show the Update button only when JS is disabled & the current locale value changes -->
		{@html `<style>label:has(option:not([value="${lang}"]):checked) + noscript button {display: block;}</style>`}

		<button
			type="submit"
			class="hidden rounded-md border border-indigo-600 bg-indigo-500 p-1 text-xs font-medium text-white dark:border-indigo-600 dark:bg-indigo-500 dark:text-white"
			title={i('locales.update_button')}
		>
			<span class="sr-only">
				{i('locales.update_button')}
			</span>

			<ArrowPathIcon width="20" height="20" stroke-width="1.75" aria-hidden />
		</button>
	</noscript>
</form>
