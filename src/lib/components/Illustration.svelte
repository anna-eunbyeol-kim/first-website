<script>
	import { base } from "$app/paths"
	import { onMount } from "svelte"

	let smallContent = false

	$: style = smallContent
		? `background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
				url(${base}/images/ilustracion-mini.png),
				radial-gradient(61.49% 60.79% at 50% 60.79%, #81ecf2 42.16%, #589ef0 100%)`
		: ""

	const resize = () => {
		smallContent = window.matchMedia("only screen and (max-height: 680px) and (max-width: 539px)")
	}

	onMount(resize)
</script>

<div class="container" {style}>
	<div
		class="agua"
		style={`background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${base}/images/agua.png);
		background-position-x: center;`}
	/>
	<div
		class="tierra"
		style={`background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${base}/images/tierra.png);
		background-position: center calc(2px + 100%);
		background-repeat: repeat-x;`}
	/>
	<div class="nube-uno" />
	<div class="nube-dos" />
	<div class="hielo" style="background: url({base}/images/hielo.png) no-repeat" />
</div>
<svg>
	<filter id="turbulence" x="0" y="0" width="100%" height="100%">
		<feTurbulence id="sea-filter" numOctaves="3" seed="2" baseFrequency="0.02 0.05" />
		<feDisplacementMap scale="20" in="SourceGraphic" />
		<animate
			xlink:href="#sea-filter"
			attributeName="baseFrequency"
			dur="30s"
			keyTimes="0;0.5;1"
			values="0.02 0.06;0.04 0.08;0.02 0.06"
			repeatCount="indefinite"
		/>
	</filter>
</svg>

<style>
	div.container {
		position: fixed;
		width: 101vw;
		height: 100vh;
		margin: 0 auto;
		top: 3em;
		left: -10px;
		z-index: -99;
		background: radial-gradient(61.49% 60.79% at 50% 60.79%, #81ecf2 42.16%, #589ef0 100%);
	}

	div.agua {
		position: absolute;
		background-position-x: center;
		height: 329px;
		filter: url("#turbulence");
		bottom: 0;
		width: 105vw;
		margin: 0 -10px;
		z-index: -1;
		float: right;
	}

	@media only screen and (max-height: 680px) {
		div.agua {
			filter: none;
		}

		div.container {
			left: 0;
		}
	}

	@media only screen and (max-height: 680px) and (max-width: 539px) {
		div.container > * {
			display: none;
		}
		div.container {
			background-position: center center;
			background-repeat: no-repeat;
		}
	}

	div.tierra {
		position: absolute;
		/* background-position: 8px 60px; */
		background-position: center calc(2px + 100%);
		height: calc(100vh - 279px);
		width: 105%;
		z-index: 1;
		top: -42px;
		background-repeat: repeat-x;
	}

	div.hielo {
		position: absolute;
		z-index: 2;
		width: 100%;
		height: 121px;
		left: 0;
		bottom: 201px;
	}
</style>
