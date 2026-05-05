<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

	type Variant = 'primary' | 'secondary' | 'ghost';
	type Size = 'sm' | 'md' | 'lg';

	type CommonProps = {
		children: Snippet;
		variant?: Variant;
		size?: Size;
		class?: string;
	};

	type Props =
		| (CommonProps & { href: string } & Omit<HTMLAnchorAttributes, 'href' | 'class' | 'children'>)
		| (CommonProps & { href?: undefined } & Omit<HTMLButtonAttributes, 'class' | 'children'>);

	// svelte-ignore custom_element_props_identifier
	let {
		children,
		variant = 'primary',
		size = 'md',
		class: className = '',
		href,
		...rest
	}: Props = $props();

	const base =
		'inline-flex items-center justify-center gap-2 rounded-full font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none';

	const variants = {
		primary:
			'bg-neutral-900 text-white hover:bg-neutral-700 focus-visible:outline-neutral-900 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200',
		secondary:
			'bg-neutral-100 text-neutral-900 hover:bg-neutral-200 focus-visible:outline-neutral-900 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700',
		ghost:
			'text-neutral-900 hover:bg-neutral-100 focus-visible:outline-neutral-900 dark:text-white dark:hover:bg-neutral-800'
	} as const;

	const sizes = {
		sm: 'h-9 px-4 text-sm',
		md: 'h-11 px-6 text-base',
		lg: 'h-14 px-8 text-lg'
	} as const;

	const classes = $derived(`${base} ${variants[variant]} ${sizes[size]} ${className}`);
</script>

{#if href}
	<a {href} class={classes} {...rest as HTMLAnchorAttributes}>
		{@render children()}
	</a>
{:else}
	<button class={classes} {...rest as HTMLButtonAttributes}>
		{@render children()}
	</button>
{/if}
