<script lang="ts">
	import { language } from '@inlang/sdk-js';

	import LocaleSwitcher from '$components/LocaleSwitcher.svelte';
	import ThemeSwitcher from '$components/ThemeSwitcher.svelte';
</script>

<header>
	<a href="/{language}">
		<h1>Home</h1>
	</a>

	<LocaleSwitcher />

	<ThemeSwitcher />
</header>
