<script>
	import { page } from "$app/stores"
	import Casing from "$lib/UI/PageContainers/Casing.svelte"
	import FallbackImage from "$lib/UI/Widgets/FallbackImage.svelte"
</script>

<Casing>
	<center>
		{$page.status}: {$page.error.message}
	</center>
	<FallbackImage alt={`${$page.status}, ${$page.error.message}`} />
</Casing>
