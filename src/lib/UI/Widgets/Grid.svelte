<script lang="ts">
	type T = $$Generic
	interface $$Slots {
		default: {
			item: T
			index: number
		}
	}
	export let items: T[] = []
	export let cols: number = 4
	export let gap: string = "0"

	$: style = `grid-template-columns: repeat(${cols}, 1fr); gap: ${gap};`
</script>

<section {style}>
	{#each items as item, index}
		<slot {item} {index} />
	{/each}
</section>

<style>
	section {
		display: grid;
	}
</style>
