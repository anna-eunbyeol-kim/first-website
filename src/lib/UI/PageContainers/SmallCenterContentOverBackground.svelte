<script lang="ts">
	import Logo from "$lib/UI/Branding/Logo.svelte"
</script>

<div class="container">
	<div class="logo">
		<Logo url={"/logo/logo_horizontal_white.png"} height={200} />
	</div>

	<slot />
</div>

<style>
	.container {
		display: flex;
		background-color: var(--bg);
		padding: 1rem 4rem 4rem 4rem;
		display: flex;
		height: 100vh;
		flex-direction: column;
		flex: 2;
		background-color: var(--primary);
		user-select: none;
		-webkit-user-select: none;
	}

	.logo {
		margin: 0 auto 0.5rem auto;
		width: 100%;
		max-width: 200px;
		max-height: 100%;
		text-align: center;
	}

	div {
		color: white;
	}
</style>
