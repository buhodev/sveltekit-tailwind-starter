<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
		class?: string;
	};

	let { children, size = 'lg', class: className = '' }: Props = $props();

	const sizes = {
		sm: 'max-w-3xl',
		md: 'max-w-5xl',
		lg: 'max-w-6xl',
		xl: 'max-w-7xl',
		full: 'max-w-none'
	} as const;
</script>

<div class="mx-auto w-full px-4 sm:px-6 lg:px-8 {sizes[size]} {className}">
	{@render children()}
</div>
