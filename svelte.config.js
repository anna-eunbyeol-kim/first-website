import adapter from "@sveltejs/adapter-static"
import preprocess from "svelte-preprocess"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		methodOverride: {
			allowed: ["POST", "PUT", "DELETE"]
		},
		adapter: adapter({
			pages: "docs",
			assets: "docs",
			hostineSite: "data",
			precompress: false,
			fallback: "index.html"
		}),
		prerender: {
			default: true
		},
		trailingSlash: "always",
		paths: {
			base: dev ? "" : "/haja-web"
		}
	}
}

export default config
