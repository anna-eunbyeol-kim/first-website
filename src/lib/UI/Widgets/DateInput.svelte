<script lang="ts">
	import { Datepicker } from "svelte-calendar"

	const theme = {
		calendar: {
			shadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.1)",
			colors: {
				background: {
					highlight: "var(--primary)"
				}
			}
		}
	}
	const format = "ddd, MMM D, YYYY"

	export let date

	const add = (amt) => {
		console.log($date?.selected)
		date.add(1, amt)
	}

	const sub = (amt) => {
		date.add(-1, amt)
	}
</script>

<section class="flex">
	<div class="flex remove-defaults">
		<Datepicker bind:store={date} {theme} {format} let:key let:send let:receive>
			<div class="display" in:receive|local={{ key }} out:send|local={{ key }}>
				{($date?.selected ?? new Date()).toLocaleDateString("en-us", {
					weekday: "short",
					year: "numeric",
					month: "short",
					day: "numeric"
				})}
			</div>
		</Datepicker>
	</div>

	<div class="flex">
		<button class="button color primary" on:click={() => sub("week")}>-&nbsp;week</button>
		<button class="button color primary" on:click={() => add("week")}>+&nbsp;week</button>
	</div>
</section>

<style>
	section {
		flex-direction: column;
		align-self: center;
		align-self: center;
		padding: 0 1rem;
		grid-column: 1 / 3;
		margin-bottom: 2rem;
	}
	.flex {
		display: flex;
		gap: 1rem;
	}
	.flex > * {
		align-self: center;
		justify-self: center;
		flex: 1;
	}

	.display {
		margin: auto;
		cursor: pointer;
	}

	:global(.remove-defaults .button) {
		color: unset;
		border-radius: unset;
		border: unset;
		box-shadow: unset;
	}
</style>
