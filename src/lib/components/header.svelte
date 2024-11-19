<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import LocaleSwitcher from '$components/locale-switcher.svelte';
</script>

<header class="flex items-center justify-between">
	<a href="/">{m.house_patchy_flamingo_link()}</a>

	<LocaleSwitcher />
</header>
