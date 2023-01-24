<script lang="ts">
	import { locale } from '$i18n/i18n-svelte';
	import LocaleSwitcher from './LocaleSwitcher.svelte';
	import ThemeSwitcher from './ThemeSwitcher.svelte';
</script>

<header>
	<a href="/{$locale}">
		<h1>Home</h1>
	</a>

	<LocaleSwitcher />

	<ThemeSwitcher />
</header>
