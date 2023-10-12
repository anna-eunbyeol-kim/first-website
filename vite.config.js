import { sveltekit } from "@sveltejs/kit/vite"

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	build: {
		rollupOptions: {
			external: ["iconify-icon"]
		},
	},
	paths:  { base: process.argv.includes('dev') ? '' : 'first-website' }
}

export default config
