export const featuresSection = {
	title: 'Что внутри',
	description: 'Минимальный набор инфраструктуры для тиражируемых лендингов и многостраничников.',
	items: [
		{
			title: 'Пререндер по умолчанию',
			text: 'adapter-static + prerender = true в корневом layout. Все маршруты — статические.'
		},
		{
			title: 'SEO из коробки',
			text: 'Компонент <SEO />, sitemap.xml и robots.txt как роуты, OG/Twitter мета-теги.'
		},
		{
			title: 'Tailwind 4 stable',
			text: 'CSS-first конфиг через @theme и @plugin. Forms, typography, container-queries.'
		},
		{
			title: 'MDsveX',
			text: 'Контентные страницы (.svx, .md) рядом с роутами. Можно вставлять Svelte-компоненты внутрь.'
		},
		{
			title: 'enhanced-img',
			text: 'Оптимизация изображений на этапе сборки: AVIF/WebP, srcset, размеры.'
		},
		{
			title: 'Конвенции',
			text: 'Sections+data file pair, naming для ассетов, правила в agent/*.md для AI-агентов.'
		}
	]
} as const;
