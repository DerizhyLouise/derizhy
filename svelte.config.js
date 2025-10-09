import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: "build",
			assets: "build",
			fallback: undefined,
			precompress: false,
			strict: true,
		}),
		paths: { base: process.argv.includes('dev') ? '' : process.env.BASE_PATH },
		prerender: {
			handleMissingId: "ignore"
		}
	},
};

export default config;
