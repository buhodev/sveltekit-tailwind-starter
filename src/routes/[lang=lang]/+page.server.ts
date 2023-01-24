import type { PageServerLoad } from './$types';
import type { Actions } from './$types';

export const load = (async ({ locals: { LL } }) => {
	console.info(LL.log({ fileName: '+page.server.ts' }));
}) satisfies PageServerLoad;

export const actions: Actions = {
	setTheme: async ({ url, cookies }) => {
		const theme = url.searchParams.get('theme');

		if (theme) {
			cookies.set('colortheme', theme, {
				path: '/',
				maxAge: 60 * 60 * 24 * 365
			});
		}
	}
};
