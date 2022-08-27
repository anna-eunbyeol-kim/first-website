<script lang="ts">
	import { base } from "$app/paths"

	import { _ } from "svelte-i18n"
	const endpoint = "https://formspree.io/xbjzrjzv"
	const formData = {
		name: "",
		_replyto: "",
		message: ""
	}
	let active = false
	const formAction = async () => {
		active = true
		const res = await fetch(endpoint, {
			method: "POST",
			body: JSON.stringify(formData),
			headers: {
				"Content-Type": "application/json"
			}
		})
		const text = await res.text()
		if (res.ok) {
			return text
		} else {
			throw new Error(text)
		}
	}
	let promise
	const handleSubmit = () => (promise = formAction())
</script>

{#if active}
	{#if promise}
		{#await promise}
			<section class="info">{$_("contact-me.mensajes.mandando")}</section>
		{:then value}
			<section class="success">{$_("contact-me.mensajes.exito")}</section>
		{:catch error}
			<section class="error">
				{error.message === "Failed to fetch" ? $_("contact-me.mensajes.error") : error.message}
			</section>
		{/await}
	{/if}
{/if}

<h1>{$_("contact-me.titulo")}</h1>
<p>
	{$_("contact-me.subtitulo")}
	<a class="email" href="mailto:sstar6533@gmail.com "> sstar6533@gmail.com </a>
</p>
<div>
	<form on:submit|preventDefault={handleSubmit}>
		<input
			type="text"
			name="name"
			placeholder={$_("contact-me.nombre")}
			bind:value={formData.name}
		/>
		<input
			type="email"
			name="_replyto"
			placeholder={$_("contact-me.email")}
			bind:value={formData._replyto}
		/>
		<textarea
			name="message"
			cols="30"
			rows="10"
			placeholder={$_("contact-me.mensaje")}
			bind:value={formData.message}
		/>
		<button type="submit" class="main-action">{$_("contact-me.enviar")}</button>
	</form>

	<h3>{$_("contact-me.titulo_redes")}</h3>
	<aside>
		<a rel="nofollow" href="https://github.com/annakimstorm">
			<img src="{base}/svg/github.svg" alt="My Github" />
		</a>
		<a rel="nofollow" href="https://dev.to/annakimstorm">
			<img src="{base}/svg/devto.svg" alt="My dev.to profile" />
		</a>
		<a rel="nofollow" href="https://www.instagram.com/babichona/">
			<img src="{base}/svg/insta.svg" alt="My Instagram" />
		</a>
	</aside>
</div>

<style>
	div {
		display: grid;
		grid-template-areas:
			"form aside-head"
			"form aside-cont";
		grid-column-gap: 2rem;
		grid-template-rows: 1fr 5fr;
		width: 100%;
	}
	form {
		grid-area: form;
		display: flex;
		flex-direction: column;
		max-width: 90vw;
	}
	input,
	textarea {
		background-color: var(--bg-dark);
		color: var(--text);
		padding: 10px 90px 10px 20px;
		margin: 10px;
		border-radius: 14px;
	}
	::placeholder {
		color: var(--text-secondary);
	}

	textarea {
		resize: none;
	}

	aside {
		grid-area: aside-cont;
		display: flex;
		/* flex-direction: column; */
		width: 100%;
		justify-content: space-around;
		text-align: center;
	}
	h3 {
		color: var(--text);
		grid-area: aside-head;
		font-size: 150%;
		white-space: nowrap;
	}
	img {
		filter: grayscale(100%) brightness(150%);
		transition: filter ease-in-out 200ms;
		width: min(10vw, 99px);
		min-width: 65px;
	}
	img:hover {
		filter: grayscale(0%) brightness(100%);
	}

	button {
		margin: 10px;
		max-width: 700px;
	}
	button:hover {
		background: var(--accent-hover);
	}

	h1,
	p {
		margin-bottom: 20px;
		margin-left: 10px;
	}

	@media only screen and (max-width: 1068px) {
		aside {
			flex-direction: column;
		}
	}

	@media only screen and (max-width: 683px) {
		div {
			grid-template-areas:
				"   form   "
				"aside-head"
				"aside-cont";
			grid-template-rows: 3fr 0.3fr 2fr;
		}
		aside {
			flex-direction: row;
		}
	}
	a.email {
		color: var(--accent);
	}

	section {
		margin: 20px auto;
		text-align: center;
		padding: 10px;
		width: 90%;
	}

	.success {
		color: rgb(4, 53, 28);
		background: rgb(124, 224, 137);
	}
	.error {
		color: rgb(53, 4, 4);
		background: rgb(240, 93, 93);
	}

	.info {
		color: rgb(4, 47, 53);
		background: rgb(93, 193, 240);
	}
</style>
