<script lang="ts">
	import SolPrice from '$lib/sol-price.svelte';

	if (SolPrice === 10) {
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Shahin" />
</svelte:head>

<div class="text-column">
	<SolPrice />
</div>
