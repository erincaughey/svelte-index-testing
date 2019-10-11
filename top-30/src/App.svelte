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
<!-- <Filters /> -->
{#each restaurants as restaurant, i}
	<Card image = {restaurant.image} rank = {restaurant.rank} restaurant = {restaurant.restaurant} foodType = {restaurant.foodType} neighborhood = {restaurant.neighborhood} description = {restaurant.description} phone = {restaurant.phone} website = {restaurant.website} location = {restaurant.location} url = {restaurant.url} anchor = {restaurant.anchor}/>
{/each}
</div>