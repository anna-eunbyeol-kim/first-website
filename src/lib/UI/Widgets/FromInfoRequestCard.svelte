<script lang="ts">
	import { base } from '$app/paths';
	import DataInput from './DataInput.svelte';

	export let inputs = [
		{
			text: 'Email',
			id: 'email_reset',
			type: 'email',
			icon: '/icon/person.svg'
		}
	];

	export let error: string = '';
	export let callback: (form) => Promise<string | null> = async (form) => '';

	let formElement;

	$: requestSent = false;
	$: attempted = false;

	const sendRequest = async () => {
		attempted = true;
		error = validateForm();

		if (error != '') {
			return false;
		}

		requestSent = true;
		error = (await callback(formElement)) ?? '';
	};

	const validateForm = (): string => {
		error = null;
		let password;

		for (let index in inputs) {
			const input = inputs[index];
			const value = formElement[input.id].value;

			if (input.type == 'password') {
				password = value;
			} else if (input.id == 'pass_confirm' && value != password) {
				return "Passwords don't match";
			}
		}

		return '';
	};
</script>

<section>
	<div class="content">
		<h1>
			<slot name="title">Reset Password</slot>
		</h1>

		{#if error !== ''}
			<div class="error">
				{error}
			</div>
		{:else}
			<p>
				<slot name="help">
					Enter your email address below and we'll send you a link to reset your password.
				</slot>
			</p>
		{/if}

		<div class="form-container">
			<form bind:this={formElement} on:submit|preventDefault={sendRequest}>
				{#each inputs as input}
					<DataInput
						text={input.text}
						name={input.id}
						id={input.id}
						type={input.type}
						icon={input.icon}
						{attempted}
						required
					/>
				{/each}

				{#if requestSent}
					<button disabled> Request Sent </button>
				{:else}
					<button type="submit">
						<slot name="button">Reset Password</slot>
					</button>
				{/if}
			</form>
		</div>
	</div>

	<div class="bottom content">
		<slot name="bottom">
			<span> New to here? </span>
			<a href="{base}/login/signup">Sign up</a>
		</slot>
	</div>
</section>

<style>
	section {
		background-color: white;
		width: 100%;
		overflow: hidden;
	}

	section {
		margin: 2rem auto;
		border: 1px solid #f0f0f0;
		border-radius: 0.5rem;
		max-width: 400px;
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
	}
	h1 {
		color: var(--primary);
		text-align: center;
		font-weight: bold;
		font-size: 1.4rem;
		margin-top: 1rem;
		margin-bottom: 1.25rem;
	}
	span,
	p {
		border: 1px solid transparent;
		text-align: left;
		margin: 1.5rem 0 0 0;
		color: #555;
		font-size: 0.9rem;
		padding: 0.5rem 0 calc(0.5rem + 2px) 0;
	}
	:global(section .bottom span) {
		color: #555;
	}
	:global(section .bottom a) {
		color: var(--primary);
		text-decoration: none;
		border-bottom: 1px solid;
		border-bottom-color: var(--transparent);
		transition: border-bottom-color 0.3s;
	}

	.error {
		border: 1px solid transparent;
		background-color: #fdf6f6;
		border-color: var(--error-soft);
		color: var(--error);
		padding: 1rem 1.6rem;
		border-radius: 0.5rem;
		font-size: 0.9rem;
		margin-top: 1.5rem;
	}

	.form-container {
		margin: 1.5rem auto 0 auto;
		width: 100%;
		position: relative;
	}
	button {
		padding: 1rem 1.6rem;
		border: none;
		width: 100%;
		border-radius: 0.5rem;
		font-size: 0.9rem;
		margin-top: 0.5rem;
		text-transform: uppercase;
		color: white;
		background: #0081c6;
		cursor: pointer;
	}
	button:disabled {
		opacity: 0.6;
	}

	.content {
		padding: 2rem;
	}

	.bottom {
		border-top: 1px solid #ddd;
		background-color: #f5f5f5;
		text-align: center;
		padding: 1.5rem;
	}
</style>
