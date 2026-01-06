import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/ remark-reading-time.mjs";

import svelte from "@astrojs/svelte";

// https://astro.build/config
// TODO: Update 'site' with your own GitHub Pages URL
// For user pages: https://<username>.github.io
// For project pages: https://<username>.github.io/<repository>
const siteUrl = 'https://susumutomita.github.io';

// TODO: If using a project page (not user page), set the base path
// For project pages: '/repository-name'
// For user pages: leave as undefined
const basePath = '/Tatsuya-K3.github.io';

export default defineConfig({
	site: siteUrl,
	base: basePath,
	integrations: [
		sitemap(),
		robotsTxt({
			sitemap: [
				`${siteUrl}/sitemap-index.xml`,
				`${siteUrl}/sitemap-0.xml`,
			],
		}),
		solidJs(),
		UnoCSS({ injectReset: true }),
		icon(),
		svelte(),
	],
	markdown: {
		remarkPlugins: [remarkReadingTime],
	},
	output: "static",
	vite: {
		assetsInclude: "**/*.riv",
	},
});
