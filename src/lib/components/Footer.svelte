<script lang="ts">
	import Container from '$components/Container.svelte';
	import { site } from '$config/site';

	const year = new Date().getFullYear();
</script>

<footer class="border-t border-neutral-200 py-10 dark:border-neutral-800">
	<Container>
		<div
			class="flex flex-col items-start justify-between gap-4 text-sm text-neutral-600 sm:flex-row sm:items-center dark:text-neutral-400"
		>
			<p>© {year} {site.name}</p>
			<nav class="flex gap-4">
				<a href="/about" class="hover:text-neutral-900 dark:hover:text-white">О проекте</a>
			</nav>
		</div>
	</Container>
</footer>
