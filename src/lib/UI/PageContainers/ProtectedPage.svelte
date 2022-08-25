<script lang="ts">
	import { browser } from "$app/env"
	import { goto } from "$app/navigation"
	import { base } from "$app/paths"
	import { awaitMyId } from "$lib/firebase/auth"
	import session from "$lib/firebase/session"
	import Loader from "../Widgets/Loader.svelte"
	import Casing from "./Casing.svelte"

	export let backBtn = true

	let wait = awaitMyId()

	const redirectIfNotLoggedIn = async () => {
		await wait

		if (wait == null && browser) {
			goto(`${base}/login`)
		}
	}

	session.subscribe(async ({ user, ready }) => {
		if (ready && !user) {
			if (browser) goto(`${base}/login`)
		}
	})

	redirectIfNotLoggedIn()
</script>

<Casing {backBtn}>
	{#await wait}
		<Loader loadingStyle="dots" top={4} />
	{:then id}
		{#if id == null}
			Please log in
		{:else}
			<slot />
		{/if}
	{/await}
</Casing>
