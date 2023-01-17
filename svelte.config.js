import adapter from "@sveltejs/adapter-static"
import preprocess from "svelte-preprocess"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			pages: "docs",
			assets: "docs",
			hostineSite: "data",
			precompress: false,
			fallback: "index.html"
		})
	}
}

export default config
