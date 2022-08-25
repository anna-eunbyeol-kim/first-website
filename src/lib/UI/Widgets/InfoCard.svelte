<section>
	<div class="content">
		<h1>
			<slot name="title">Info</slot>
		</h1>

		<p>
			<slot />
		</p>
	</div>
</section>

<style>
	section {
		background-color: white;
		width: 100%;
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
	p {
		border: 1px solid transparent;
		text-align: left;
		margin: 1.5rem 0 0 0;
		color: #555;
		font-size: 0.9rem;
		padding: 0.5rem 0 calc(0.5rem + 2px) 0;
	}

	.content {
		padding: 2rem;
	}
</style>
