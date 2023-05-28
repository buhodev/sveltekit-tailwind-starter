import { redirect } from '@sveltejs/kit';
import { replaceLocaleInUrl } from '$utils';

export const actions = {
	setTheme: async ({ url, cookies, params }) => {
		const theme = url.searchParams.get('theme');
		const redirectTo = url.searchParams.get('redirectTo');

		if (theme) {
			cookies.set('colortheme', theme, {
				path: '/',
				maxAge: 60 * 60 * 24 * 365
			});
		}

		throw redirect(303, redirectTo ?? params.lang);
	},

	setLanguage: async ({ url, cookies, request }) => {
		const { lang } = Object.fromEntries(await request.formData());
		const origin = url.searchParams.get('origin') as string;

		if (lang) {
			cookies.set('lang', lang as string, {
				path: '/',
				maxAge: 60 * 60 * 24 * 365
			});
		}

		throw redirect(303, replaceLocaleInUrl(new URL(origin), lang as string));
	}
};
