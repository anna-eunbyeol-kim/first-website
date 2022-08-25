<script lang="ts">
	import { base } from "$app/paths"

	const colors = [
		"#B3D2AE",
		"#C7EBFF",
		"#FFFDC7",
		"#FFCDC7",
		"#D5C7FF",
		"#FFC7D1",
		"#BEF8BD",
		"#98E0FF",
		"#ACFFF5"
	] as const

	const fonts = ["bungee", "squada one", "merriweather", "bitter", "arvo", "holtwood"] as const

	const fontPaths = {
		bungee: "Bungee/Bungee-Regular",
		"squada one": "Squada_One/SquadaOne-Regular",
		merriweather: "Merriweather/Merriweather-Regular",
		bitter: "Bitter/Bitter-VariableFont_wght",
		arvo: "Arvo/Arvo-Regular",
		holtwood: "Holtwood_One_SC/HoltwoodOneSC-Regular"
	} as const

	let index = 0

	const ucfirst = (str: string) => str.slice(0, 1).toUpperCase() + str.substring(1)

	const fontName = (font: typeof fonts) => fontPaths[font]
	const fontRender = (font: typeof fonts) => ucfirst(font)

	const textRender = (font: typeof fonts) => `${index++}: ${font}`

	const styleRender = (color: typeof colors, font: typeof fonts) =>
		`color: ${color}; font-family: ${fontRender(font)}, sans-serif !important;`
</script>

<svelte:head>
	{#each fonts as font (font)}
		<link href={`${base}/fonts/${fontName(font)}.ttf`} rel="stylesheet" />
	{/each}
</svelte:head>

<section style={`grid-template-columns: repeat(${fonts.length}, 1fr);`}>
	{#each colors as color (color)}
		{#each fonts as font (font)}
			<p style={styleRender(color, font)}>{textRender(font)}</p>
		{/each}
	{/each}
</section>

<style>
	section {
		display: grid;
		gap: 1rem;
	}
	p {
		text-stroke: 3px #000;
		-webkit-text-stroke: 3px #000;
		text-shadow: 3px 3px 0px #000;
		font-size: 4rem;
		text-transform: uppercase;
	}
</style>
