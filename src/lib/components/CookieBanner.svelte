<script lang="ts">
	import { onMount } from 'svelte';

	const STORAGE_KEY = 'cookie-consent';

	let visible = $state(false);

	onMount(() => {
		try {
			const v = localStorage.getItem(STORAGE_KEY);
			visible = v !== 'accepted';
		} catch {
			visible = false;
		}
	});

	function accept() {
		try {
			localStorage.setItem(STORAGE_KEY, 'accepted');
		} catch {
			// no-op (private mode etc.)
		}
		visible = false;
	}
</script>

{#if visible}
	<div
		role="dialog"
		aria-live="polite"
		class="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-white p-4 shadow-lg sm:inset-x-auto sm:right-4 sm:bottom-4 sm:max-w-md sm:rounded-2xl sm:border dark:border-neutral-800 dark:bg-neutral-900"
	>
		<p class="text-sm text-neutral-700 dark:text-neutral-300">
			Сайт использует файлы cookie для аналитики. Продолжая, вы соглашаетесь с их использованием.
		</p>
		<div class="mt-3 flex justify-end">
			<button
				type="button"
				onclick={accept}
				class="inline-flex h-9 items-center rounded-full bg-neutral-900 px-4 text-sm font-medium text-white hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
			>
				Принять
			</button>
		</div>
	</div>
{/if}
