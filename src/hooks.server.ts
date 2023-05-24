export const handle = async ({ event, resolve }) => {
	let theme: string | null = null;

	const newTheme = event.url.searchParams.get('theme');
	const cookieTheme = event.cookies.get('colortheme');

	if (newTheme) {
		theme = newTheme;
	} else if (cookieTheme) {
		theme = cookieTheme;
	}

	if (theme) {
		return await resolve(event, {
			transformPageChunk: ({ html }) =>
				html
					.replace('data-theme=""', `data-theme="${theme}"`)
					.replace('style="color-scheme: normal"', `style="color-scheme: ${theme}"`)
		});
	}

	return await resolve(event);
};
