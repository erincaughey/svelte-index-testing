<script>
	import Card from './Card.svelte';
	import Filters from './Filters.svelte';

	let restaurants = [];

	onMount(async () => {
		const res = await fetch(`data.json`);
		restaurants = await res.json();
	});
</script>

<div class="flex-container">
	<Filters />
	<Card />
</div>
