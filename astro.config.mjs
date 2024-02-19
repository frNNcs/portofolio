import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import AstroPWA from '@vite-pwa/astro'


import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    tailwind(),
    AstroPWA(),
  ],
  site: "https://frnncs.github.io/portofolio/",
  base: '/',
});