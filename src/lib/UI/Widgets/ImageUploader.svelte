<script lang="ts">
	import { updateDocument } from "$lib/firebase/firestore"
	import { uploadFileAndGetUrl } from "$lib/firebase/storage"
	import Icon from "@iconify/svelte"
	import FallbackImage from "./FallbackImage.svelte"
	import Loader from "./Loader.svelte"

	const fallback = "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"

	export let id: string
	export let source: string = null
	export let type: string = null
	export let isTeam: boolean
	export let src: string = fallback
	export let alt: string
	export let dest: string = "picture"
	export let oncomplete: () => void = () => {}

	const accept = ".jpg, .jpeg, .png, .svg"
	const icon = "akar-icons:cloud-upload"
	const width = "3rem"

	let fileinput
	let status = null
	let state: "ready" | "uploading" | "finished" | "failed" = "ready"

	const onFileSelected = async (e) => {
		const blob = e.target.files[0]

		const reader = new FileReader()
		reader.readAsDataURL(blob)
		reader.onload = (e) => {
			src = e.target.result as string
		}

		state = "uploading"

		try {
			const picture = (
				await uploadFileAndGetUrl({
					type,
					source,
					isTeam,
					id: `${id}/${blob.name}`,
					blob
				})
			).replace(import.meta.env.VITE_STORAGE_URL_PREFIX, "")

			await updateDocument({
				type,
				id,
				source,
				isTeam,
				content: {
					[dest]: picture
				},
				timestamp: "updatedOn"
			})

			state = "finished"
			oncomplete()
		} catch (e) {
			state = "failed"
			status = e
		}
	}

	const open = () => {
		fileinput.click()
	}
</script>

<section>
	<h1>Change {alt}</h1>

	<div class="image-uploader-container" on:click={open}>
		<FallbackImage {src} {alt} {fallback} />

		<div class="upload" class:status={state != "ready"}>
			{#if state == "ready"}
				<Icon {icon} {width} />
			{:else if state == "uploading"}
				<Loader loadingStyle="bar" />
			{:else if state == "failed"}
				<Icon icon={"akar-icons:triangle-alert-fill"} {width} color={"var(--error)"} />
				<p class="error">{status}</p>
			{:else if state == "finished"}
				<Icon icon={"ic:round-cloud-done"} {width} color={"var(--primary)"} />
			{/if}
		</div>
	</div>

	<input type="file" {accept} on:change={onFileSelected} bind:this={fileinput} />
</section>

<style>
	section {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-flow: column;
	}

	h1 {
		margin: 2rem 0;
	}

	.image-uploader-container {
		position: relative;
		cursor: pointer;
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr;
		border: solid #cccc;
	}

	:global(.image-uploader-container > *) {
		grid-row: 1;
		grid-column: 1;
		align-self: center;
		justify-self: center;
	}

	.upload {
		cursor: pointer;
		opacity: 0;
		transition: 0.7s ease;
		background-color: #fff6;
		padding: 1rem;
		margin: 1rem;
		border: solid grey;
		border-radius: 50%;
	}

	.upload:hover {
		background-color: var(--bg);
	}

	.status {
		opacity: 1;
	}

	.error {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		text-align: center;
		margin: 2rem 0;
		padding: 1rem 0.5rem;
		color: var(--error);
		background-color: var(--bg);
		border-radius: 1rem;
		border: solid grey;
	}

	.image-uploader-container:hover .upload {
		opacity: 1;
	}

	input {
		display: none;
	}
</style>
