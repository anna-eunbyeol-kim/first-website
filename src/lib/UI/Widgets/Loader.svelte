<script context="module" lang="ts">
	export type LoadingStyle = "dots" | "circle" | "bar"
</script>

<script lang="ts">
	export let loadingStyle: LoadingStyle = "circle"
	export let size: number = 3
	export let left: number = 0
	export let top: number = 0
	export let right: number = 0
	export let bototm: number = 0

	let adjustedSize = loadingStyle == "dots" ? "10px" : `${size - 0.9}rem`

	const style = `
		width: ${adjustedSize};
		height: ${adjustedSize};
		left: ${left}rem;
		top: ${top}rem;
		right: ${right}rem;
		bototm: ${bototm}rem;
	`
</script>

<div class={loadingStyle} {style} />

<style>
	div {
		margin: auto;
		width: 3rem;
		height: 3rem;
	}

	.bar,
	.circle {
		border-radius: 50%;
		border: 0.5rem solid #f3f3f3;
		border-top: 0.5rem solid #3498db;
		-webkit-animation: spin 2s linear infinite; /* Safari */
		animation: spin 2s linear infinite;
	}

	/* Safari */
	@-webkit-keyframes spin {
		0% {
			-webkit-transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
		}
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.dots {
		position: relative;
		width: 10px;
		height: 10px;
		margin-bottom: 40px;
		border-radius: 5px;
		background-color: transparent;
		color: transparent;
		box-shadow: 0 -18px 0 0 #3498db, 12.72984px -12.72984px 0 0 #3498db, 18px 0 0 0 #3498db,
			12.72984px 12.72984px 0 0 rgba(152, 128, 255, 0), 0 18px 0 0 rgba(152, 128, 255, 0),
			-12.72984px 12.72984px 0 0 rgba(152, 128, 255, 0), -18px 0 0 0 rgba(152, 128, 255, 0),
			-12.72984px -12.72984px 0 0 rgba(152, 128, 255, 0);
		animation: dotSpin 1.5s infinite linear;
	}

	@keyframes dotSpin {
		0%,
		100% {
			box-shadow: 0 -18px 0 0 #3498db, 12.72984px -12.72984px 0 0 #3498db, 18px 0 0 0 #3498db,
				12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
				0 18px 0 -5px rgba(152, 128, 255, 0),
				-12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
				-18px 0 0 -5px rgba(152, 128, 255, 0),
				-12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
		}
		12.5% {
			box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0), 12.72984px -12.72984px 0 0 #3498db,
				18px 0 0 0 #3498db, 12.72984px 12.72984px 0 0 #3498db,
				0 18px 0 -5px rgba(152, 128, 255, 0),
				-12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
				-18px 0 0 -5px rgba(152, 128, 255, 0),
				-12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
		}
		25% {
			box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
				12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 0 #3498db,
				12.72984px 12.72984px 0 0 #3498db, 0 18px 0 0 #3498db,
				-12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
				-18px 0 0 -5px rgba(152, 128, 255, 0),
				-12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
		}
		37.5% {
			box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
				12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0),
				18px 0 0 -5px rgba(152, 128, 255, 0), 12.72984px 12.72984px 0 0 #3498db,
				0 18px 0 0 #3498db, -12.72984px 12.72984px 0 0 #3498db,
				-18px 0 0 -5px rgba(152, 128, 255, 0),
				-12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
		}
		50% {
			box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
				12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0),
				18px 0 0 -5px rgba(152, 128, 255, 0),
				12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 0 #3498db,
				-12.72984px 12.72984px 0 0 #3498db, -18px 0 0 0 #3498db,
				-12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
		}
		62.5% {
			box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
				12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0),
				18px 0 0 -5px rgba(152, 128, 255, 0),
				12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
				0 18px 0 -5px rgba(152, 128, 255, 0), -12.72984px 12.72984px 0 0 #3498db,
				-18px 0 0 0 #3498db, -12.72984px -12.72984px 0 0 #3498db;
		}
		75% {
			box-shadow: 0 -18px 0 0 #3498db, 12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0),
				18px 0 0 -5px rgba(152, 128, 255, 0),
				12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
				0 18px 0 -5px rgba(152, 128, 255, 0),
				-12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 0 #3498db,
				-12.72984px -12.72984px 0 0 #3498db;
		}
		87.5% {
			box-shadow: 0 -18px 0 0 #3498db, 12.72984px -12.72984px 0 0 #3498db,
				18px 0 0 -5px rgba(152, 128, 255, 0),
				12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
				0 18px 0 -5px rgba(152, 128, 255, 0),
				-12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
				-18px 0 0 -5px rgba(152, 128, 255, 0), -12.72984px -12.72984px 0 0 #3498db;
		}
	}
</style>
