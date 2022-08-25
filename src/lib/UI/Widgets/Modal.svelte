<script lang="ts">
	import { fade, scale } from "svelte/transition"

	export let caption: string | null = null

	$: open = false

	const close = () => {
		open = false
	}

	const activate = () => {
		open = true
	}

	const animation = {
		duration: 200
	}
</script>

{#if open}
	<section on:click={close} in:fade={animation}>
		<content in:scale={animation}>
			<slot {open} />
		</content>
		{#if caption != null}
			<p>{caption}</p>
		{/if}
	</section>
{/if}

<div on:click={activate}>
	<slot {open} />
</div>

<style>
	section {
		background: #000c;
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-content: center;
		overflow-y: auto;
		padding: 4rem 20%;
		user-select: none;
	}

	div {
		user-select: none;
		cursor: pointer;
	}

	p {
		margin: 2rem 1rem;
		color: white;
	}
</style>
