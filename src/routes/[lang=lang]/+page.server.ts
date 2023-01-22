import type { PageServerLoad } from './$types';

export const load = (async ({ locals: { LL } }) => {
	console.info(LL.log({ fileName: '+page.server.ts' }));
}) satisfies PageServerLoad;
