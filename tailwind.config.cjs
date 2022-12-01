const { screens } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		// colors: {},
		screens: {
			xs: '475px',
			...screens
		},
		extend: {}
	},
	plugins: []
};
