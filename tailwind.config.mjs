/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	plugins: [
		require('flowbite/plugin'),
		require("@catppuccin/tailwindcss")({
			prefix: "ctp",
			defaultFlavour: "mocha",
		  }),
	],

	darkMode: 'class',

	theme: {
		extend: {
			keyframes: {
				blinkingText: {
					'0%': { opacity: 1 },
					'50%': { opacity: 0 },
					'100%': { opacity: 1 },
				}
			},
			animation: {
				blinkingText: 'blinkingText 1s infinite',
			}
		},
	},
}