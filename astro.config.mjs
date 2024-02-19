import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import AstroPWA from '@vite-pwa/astro'


import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	integrations: [
		svelte(),
		tailwind(),
		AstroPWA({
			mode: 'production',
			base: '/',
			scope: '/',
			includeAssets: ['nn.svg'],
			registerType: 'autoUpdate',
			manifest: {
				name: 'Fullstack Developer',
				short_name: 'Fullstack Developer',
				theme_color: '#1e1e2e'
			},
			workbox: {
				navigateFallback: '/',
				globPatterns: ['**/*.{css,js,html,svg,png,ico,txt}']
			},
			devOptions: {
				enabled: true,
				navigateFallbackAllowlist: [/^\//]
			},
			experimental: {
				directoryAndTrailingSlashHandler: true
			}
		})
	],
	site: 'https://frnncs.github.io/portofolio/',
	base: '/'
})