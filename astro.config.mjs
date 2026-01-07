import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/ remark-reading-time.mjs";

import svelte from "@astrojs/svelte";

// ============================================
// GitHub Pages 設定 - デプロイ前に変更してください
// ============================================
//
// パターンA: ユーザーページ (username.github.io) の場合
//   const basePath = '';
//   const siteUrl = 'https://yourusername.github.io';
//
// パターンB: プロジェクトページ (username.github.io/repo-name) の場合
//   const basePath = '/your-repo-name';
//   const siteUrl = `https://yourusername.github.io${basePath}`;
//
const basePath = '';
const siteUrl = `https://Tatsuya-K3.github.io`;

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
