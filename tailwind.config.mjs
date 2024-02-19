import { colors } from '@catppuccin/palette'

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	plugins: [
		require('flowbite/plugin'),
		require('@catppuccin/tailwindcss')({
			prefix: 'mocha',
			defaultFlavour: 'mocha'
		})
	],

	darkMode: 'media',

	theme: {
		extend: {
			keyframes: {
				blinkingText: {
					'0%': { opacity: 1 },
					'50%': { opacity: 0 },
					'100%': { opacity: 1 }
				}
			},
			animation: {
				blinkingText: 'blinkingText 1s infinite'
			}
		},
		colors: {
			...colors,
			latte: {
				base: '#eff1f5',
				text: '#4c4f69'
			}
		}
	}
}
