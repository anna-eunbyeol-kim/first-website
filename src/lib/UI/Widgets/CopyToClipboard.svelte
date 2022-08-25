<script lang="ts">
	import { onMount } from "svelte"

	export let value: string

	let textarea

	onMount(() => {
		textarea.select()
		textarea.setSelectionRange(0, 99999)
		navigator.clipboard.writeText(textarea.value)
	})
</script>

<textarea bind:value bind:this={textarea} />

<style>
	textarea {
		display: none;
	}
</style>
