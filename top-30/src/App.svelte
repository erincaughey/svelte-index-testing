<script>
	import Card from './Card.svelte';
	import MobileCard from './MobileCard.svelte';

	let restaurants = [];

	onMount(async () => {
		const res = await fetch(`restaurants.json`);
		restaurants = await res.json();
	});
</script>

<style>
.flex-container{
	display: flex;
	flex-flow: row wrap;
	max-width: 900px;
	margin: 0 auto;
	padding: 20px;
}
</style>

<div class="flex-container">
{#each restaurants as restaurant, i}	
	<Card name = {restaurant.restaurant} description = {restaurant.description} image = {restaurant.image} food = {restaurant.food-type} price = {restaurant.price-range} neighborhood = {restaurant.neighborhood}/>
	<!-- <MobileCard name = {restaurant.restaurant} description = {restaurant.description} image = {restaurant.image} food = {restaurant.food-type} price = {restaurant.price-range} neighborhood = {restaurant.neighborhood}/> -->
{/each}
</div>
