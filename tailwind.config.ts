import type { Config } from 'tailwindcss';

import { fontFamily, screens } from 'tailwindcss/defaultTheme';
import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		// colors: {},
		screens: {
			xs: '475px',
			...screens
		},
		extend: {
			fontFamily: {
				sans: ['Inter Variable', ...fontFamily.sans]
			}
		}
	},
	plugins: [typography, forms, containerQueries, aspectRatio]
} satisfies Config;
