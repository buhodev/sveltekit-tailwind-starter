<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		id?: string;
		spacing?: 'sm' | 'md' | 'lg';
		class?: string;
	};

	let { children, id, spacing = 'md', class: className = '' }: Props = $props();

	const padding = {
		sm: 'py-10 sm:py-14',
		md: 'py-16 sm:py-24',
		lg: 'py-24 sm:py-32'
	} as const;
</script>

<section {id} class="relative {padding[spacing]} {className}">
	{@render children()}
</section>
