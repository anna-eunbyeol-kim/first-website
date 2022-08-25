<script lang="ts">
	import Icon from "@iconify/svelte"

	export let icon: string = "typcn:edit"
	export let width: string = "20px"
	export let callback: VoidFunction
</script>

<button on:click={callback}>
	<Icon {icon} {width} />
</button>

<style>
	button {
		padding: 0.5rem 0.75rem;
		border-radius: 0.4rem;
		border: 1px solid #555;
		transition: 0.7s ease;
		color: var(--bg);
		cursor: pointer;
		box-shadow: 0px 1px 20px 1px #9995;
		background: rgba(34, 34, 34, 0.89);
		user-select: none;
	}
	button:hover {
		background: rgba(51, 51, 51, 0.795);
	}
</style>
