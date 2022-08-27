<script lang="ts">
	import { addMessages, init, getLocaleFromNavigator } from "svelte-i18n"
	import Navbar from "$lib/components/Navbar.svelte"
	import Transition from "$lib/components/Transition.svelte"
	import { activeStore } from "$lib/stores"

	import { kr } from "$lib/messages/kr.json"
	import { en } from "$lib/messages/en.json"
	import { es } from "$lib/messages/es.json"

	import Landing from "$lib/pages/Landing.svelte"
	import Home from "$lib/pages/Home.svelte"
	import Strategy from "$lib/pages/Strategy.svelte"
	import Skills from "$lib/pages/Skills.svelte"
	import Contact from "$lib/pages/Contact.svelte"

	addMessages("kr", kr)
	addMessages("en", en)
	addMessages("es", es)

	init({
		fallbackLocale: "en",
		initialLocale: getLocaleFromNavigator()
	})
</script>

<Navbar />

<main>
	{#if $activeStore === "Landing"}
		<Landing />
	{:else if $activeStore === "Home"}
		<Transition>
			<Home />
		</Transition>
	{:else if $activeStore === "Products"}
		<Transition>
			<Strategy />
		</Transition>
	{:else if $activeStore === "My Skills"}
		<Transition>
			<Skills />
		</Transition>
	{:else if $activeStore === "Contact Me"}
		<Transition>
			<Contact />
		</Transition>
	{/if}
</main>
