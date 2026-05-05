import { routes, site } from '$config/site';

export const prerender = true;

export const GET = async () => {
	const urls = routes
		.map(({ path, changefreq, priority }) => {
			const loc = `${site.url}${path}`;
			const cf = changefreq ? `<changefreq>${changefreq}</changefreq>` : '';
			const pr = priority !== undefined ? `<priority>${priority}</priority>` : '';
			return `  <url><loc>${loc}</loc>${cf}${pr}</url>`;
		})
		.join('\n');

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

	return new Response(body, {
		headers: {
			'content-type': 'application/xml; charset=utf-8',
			'cache-control': 'max-age=0, s-maxage=3600'
		}
	});
};
