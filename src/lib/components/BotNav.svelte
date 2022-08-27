<script lang="ts">
	import { base } from "$app/paths"

	import NavLink from "./NavLink.svelte"

	const cat = false
</script>

<nav>
	<div class="icons">
		<NavLink keyword="Home" src="{base}/svg/home.svg" {cat} />
		<NavLink keyword="Products" src="{base}/svg/strategy.svg" {cat} />
		<NavLink keyword="My Skills" src="{base}/svg/skills.svg" {cat} />
		<NavLink keyword="Contact Me" src="{base}/svg/contact.svg" {cat} />
	</div>
</nav>

<style>
	nav {
		position: fixed;
		width: 100%;
		background: var(--bg-dark);
		bottom: 0;
		z-index: 999;
	}
	.icons {
		width: 95%;
		padding: 4px 0;
		margin: auto;
		display: flex;
		justify-content: space-around;
	}
	@media only screen and (min-width: 684px) {
		nav {
			display: none;
		}
	}
</style>
