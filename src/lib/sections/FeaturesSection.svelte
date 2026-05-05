<script lang="ts">
	import Container from '$components/Container.svelte';
	import Section from '$components/Section.svelte';
	import { featuresSection } from './features';
</script>

<Section id="features" spacing="md" class="border-t border-neutral-200 dark:border-neutral-800">
	<Container>
		<div class="max-w-2xl">
			<h2 class="text-3xl font-semibold tracking-tight sm:text-4xl">
				{featuresSection.title}
			</h2>
			<p class="mt-3 text-lg text-neutral-600 dark:text-neutral-400">
				{featuresSection.description}
			</p>
		</div>

		<ul class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each featuresSection.items as item (item.title)}
				<li
					class="rounded-2xl border border-neutral-200 p-6 transition hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600"
				>
					<h3 class="font-semibold">{item.title}</h3>
					<p class="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{item.text}</p>
				</li>
			{/each}
		</ul>
	</Container>
</Section>
