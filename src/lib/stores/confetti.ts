import { writable } from 'svelte/store';
import { tick } from 'svelte';

const createConfetti = () => {
	const { subscribe, set } = writable(false);

	return {
		subscribe,
		fire: async () => {
			set(false);
			await tick();
			set(true);
		}
	};
};

export const showConfetti = createConfetti();
