<script lang="ts">
	// import * as THREE from "three"
	// import * as SC from "svelte-cubed"
	import { Parallax, ParallaxLayer, StickyLayer } from "svelte-parallax"
	import { base } from "$app/paths"

	const moon = `${base}/images/descent/moon.png`
	const land = `${base}/images/descent/land.png`
	const cat = `${base}/images/descent/cat.gif`

	let parallax
	let fancy = "fancy".split("")
	let ref

	const scroll = (where: number) => () => ref.scrollTo(where)
</script>

<Parallax sections={4} bind:this={ref}>
	<ParallaxLayer
		offset={0}
		rate={1}
		span={2}
		style="background-image: url({moon}); background-size: cover;"
	/>

	<ParallaxLayer
		offset={2}
		rate={1}
		span={4}
		style="background-image: url({land}); background-size: cover;"
	/>

	<StickyLayer offset={{ top: 0.9, bottom: 2.5 }}>
		<div style="text-align: center;">
			<img src={cat} alt="cat" />
		</div>
	</StickyLayer>

	<ParallaxLayer offset={0.2} rate={0.05} on:click={scroll(3)}>
		<h2>Welcome to my website</h2>
	</ParallaxLayer>

	<ParallaxLayer offset={3} rate={2} on:click={scroll(0)}>
		<h2>Hi Mom!</h2>
	</ParallaxLayer>
</Parallax>

<style>
	img {
		width: 40%;
	}

	h2 {
		text-align: center;
		font-family: cubano, sans-serif;
		font-weight: 400;
		color: white;
		font-size: 10vw;
		text-shadow: -0.04em 0.04em 0 #000, 0.04em 0.04em 0 #000, 0.04em -0.04em 0 #000,
			-0.04em -0.04em 0 #000;
	}
</style>
