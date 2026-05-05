<script lang="ts">
	import Container from '$components/Container.svelte';
	import Section from '$components/Section.svelte';
	import Button from '$components/Button.svelte';
	import { heroSection } from './hero';
</script>

<Section id="hero" spacing="lg">
	<Container size="md">
		<div class="text-center">
			<p
				class="mb-4 inline-block rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium tracking-wide text-neutral-600 uppercase dark:border-neutral-800 dark:text-neutral-400"
			>
				{heroSection.eyebrow}
			</p>
			<h1 class="text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
				{heroSection.title}
			</h1>
			<p class="mx-auto mt-6 max-w-2xl text-lg text-pretty text-neutral-600 dark:text-neutral-400">
				{heroSection.description}
			</p>
			<div class="mt-10 flex flex-wrap justify-center gap-3">
				<Button href={heroSection.primaryCta.href} size="lg">
					{heroSection.primaryCta.label}
				</Button>
				<Button href={heroSection.secondaryCta.href} variant="secondary" size="lg">
					{heroSection.secondaryCta.label}
				</Button>
			</div>
		</div>
	</Container>
</Section>
