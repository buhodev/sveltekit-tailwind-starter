export const site = {
	name: 'Svelte Art Starter',
	shortName: 'Starter',
	description:
		'Шаблонный репозиторий для лендингов и многостраничных сайтов на SvelteKit + Svelte 5 + Tailwind 4 с пререндерингом.',
	url: 'https://example.com',
	locale: 'ru-RU',
	ogImage: '/og-default.png',
	twitter: '',
	author: 'Art',
	themeColor: '#0a0a0a'
} as const;

export const routes: { path: string; changefreq?: string; priority?: number }[] = [
	{ path: '/', changefreq: 'weekly', priority: 1.0 },
	{ path: '/about', changefreq: 'monthly', priority: 0.7 }
];
