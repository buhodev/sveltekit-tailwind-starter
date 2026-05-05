import { site } from '$config/site';

export const prerender = true;

export const GET = async () => {
	const body = `User-agent: *
Allow: /

Sitemap: ${site.url}/sitemap.xml
`;
	return new Response(body, {
		headers: { 'content-type': 'text/plain; charset=utf-8' }
	});
};
