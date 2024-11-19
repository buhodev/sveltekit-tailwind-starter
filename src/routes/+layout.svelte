<script lang="ts">
	import '../app.css';

	import { i18n } from '$lib/i18n';
	import { ModeWatcher } from 'mode-watcher';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';

	let { children } = $props();
</script>

<ModeWatcher />

<ParaglideJS {i18n}>
	{@render children()}
</ParaglideJS>
