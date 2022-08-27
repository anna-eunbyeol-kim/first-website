<script lang="ts">
	export let checked: boolean = true

	const change = () => {
		checked = !(checked ?? false)
	}
</script>

<input type="checkbox" on:change={change} bind:value={checked} />

<!-- <style>
    input {
        
    }
</style> -->
