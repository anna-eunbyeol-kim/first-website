<script lang="ts">
	import Header from "$lib/UI/Header.svelte"

	export let backBtn: boolean = true
	export let logoLink: string = "/"
</script>

<section>
	<div class="container">
		<Header {backBtn} {logoLink} />
		<div class="padding-bottom" />
		<slot />
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	.container {
		width: 100%;
		max-width: 900px;
		padding: 64px 184px;
		overflow: hidden;
		word-wrap: break-word;
	}
	.padding-bottom {
		padding-bottom: var(--default-padding);
	}

	@media only screen and (max-width: 50em) {
		.container {
			padding: 64px 7%;
		}
	}
</style>
