<script>
	import { onMount } from 'svelte';
	import Card from './Card.svelte';
	import Filters from './Filters.svelte';

	let restaurants = [];
	let foodOptions = [];
	let placeOptions = [];
	let priceOptions = [];
	//let otherOptions = [];

	function onlyUnique(value, index, self) { 
		return self.indexOf(value) === index;
	}

	onMount(async () => {
		const res = await fetch(`data.json`);
		restaurants = await res.json();
		foodOptions = restaurants.map(d => d.foodType).filter(onlyUnique);
		placeOptions = restaurants.map(d => d.neighborhood).filter(onlyUnique);
		priceOptions = restaurants.map(d => d.price).filter(onlyUnique).sort();

	});
	
</script>

<Filters foodOptions = {foodOptions} placeOptions = {placeOptions} priceOptions = {priceOptions}/>
<div class="flex-container">
<div class="chatter">
	<div class="topper-title">Search Milwaukee's top 30 list</div>
	<p>chatter....Spicy jalapeno bacon ipsum dolor amet cow nulla ex pariatur dolore ea. Hamburger leberkas velit beef ribs chuck non in tail sirloin swine tenderloin venison pork loin. Shoulder pork meatloaf beef capicola salami excepteur voluptate est enim short loin dolor ea minim pork chop. Meatball filet mignon shoulder exercitation cow, magna aliqua beef ut ribeye dolore.</p>
	<p>Ground round ullamco brisket excepteur, shoulder eu aliqua. Labore tri-tip in ut ipsum. Pancetta pork chop t-bone magna, pariatur occaecat officia beef ribs sirloin lorem ball tip ham aliquip short ribs. Ad magna esse, in jerky meatloaf t-bone tenderloin beef rump veniam burgdoggen fugiat irure ullamco. Aliqua hamburger nulla tenderloin incididunt excepteur meatball qui jowl ex ullamco. Laborum ut meatball aliquip reprehenderit ribeye dolor pork chop ad prosciutto nostrud.</p>
	<div class="counter">
		<div class="count-checkboxes-wrapper">
			<div id="count">
				&ldquo;I've visited <span class="end-count" id="count-checked-checkboxes">0</span> of the restaurants on this year's Milwaukee 50 list&rdquo;
				<span class="checklist-share-button-tw">
					<span id="sharing">
						<a id="countLink" href="" target="_blank"><i class="fab fa-twitter"></i></a>
					</span>
				</span>
			</div> 
		</div>
	</div>
</div>

{#each restaurants as restaurant, i}
	<Card image = {restaurant.image} rank = {restaurant.rank} restaurant = {restaurant.restaurant} foodType = {restaurant.foodType} neighborhood = {restaurant.neighborhood} description = {restaurant.description} phone = {restaurant.phone} website = {restaurant.website} location = {restaurant.location} url = {restaurant.url} anchor = {restaurant.anchor}/>
{/each}
</div>