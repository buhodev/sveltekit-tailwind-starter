<script lang="ts">
	import { confetti } from '@neoconfetti/svelte';
	import { showConfetti } from '$stores';
</script>

{#if $showConfetti}
	<div class="pointer-events-none absolute inset-0 top-32 flex justify-center">
		<div use:confetti />
	</div>
{/if}
