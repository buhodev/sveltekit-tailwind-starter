<script lang="ts">
	import { onMount } from 'svelte';

	let visible = $state(false);

	function onScroll() {
		visible = window.scrollY > 600;
	}

	function scrollTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	onMount(() => {
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

{#if visible}
	<button
		type="button"
		aria-label="Наверх"
		onclick={scrollTop}
		class="fixed right-4 bottom-4 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full bg-neutral-900 text-white shadow-lg transition hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
	>
		<svg
			class="h-5 w-5"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			aria-hidden="true"
		>
			<path d="M12 19V5M5 12l7-7 7 7" />
		</svg>
	</button>
{/if}
