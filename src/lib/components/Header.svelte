<script lang="ts">
	import { toggleMode } from 'mode-watcher';
	import Container from '$components/Container.svelte';
	import { site } from '$config/site';

	type NavItem = { label: string; href: string };

	type Props = {
		nav?: NavItem[];
	};

	let { nav = [] }: Props = $props();
</script>

<header
	class="sticky top-0 z-40 border-b border-neutral-200/70 bg-white/80 backdrop-blur dark:border-neutral-800/70 dark:bg-neutral-950/80"
>
	<Container>
		<div class="flex h-16 items-center justify-between">
			<a href="/" class="text-lg font-semibold tracking-tight">{site.shortName}</a>

			{#if nav.length > 0}
				<nav class="hidden gap-6 md:flex">
					{#each nav as item (item.href)}
						<a
							href={item.href}
							class="text-sm text-neutral-600 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
						>
							{item.label}
						</a>
					{/each}
				</nav>
			{/if}

			<button
				type="button"
				aria-label="Переключить тему"
				onclick={toggleMode}
				class="inline-flex h-9 w-9 items-center justify-center rounded-full text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
			>
				<svg
					class="h-4 w-4 dark:hidden"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
				>
					<circle cx="12" cy="12" r="4" />
					<path
						d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
					/>
				</svg>
				<svg
					class="hidden h-4 w-4 dark:block"
					viewBox="0 0 24 24"
					fill="currentColor"
					aria-hidden="true"
				>
					<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
				</svg>
			</button>
		</div>
	</Container>
</header>
