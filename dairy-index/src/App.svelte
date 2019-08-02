<script>
	import { onMount } from 'svelte';
	import Topic from './Topic.svelte';
	import Promo from './Promo.svelte';

	let chunks = [];

	onMount(async () => {
		const res = await fetch(`data.json`);
		chunks = await res.json();
	});
</script>

<style>

</style>

{#each chunks as chunk, i}
	{#if chunk.type == 'topic-box'}
		<Topic topicTitle = {chunk.title} topicImage = {chunk.image} topicDescription = {chunk.description} linkUrl = {chunk.link} headline = {chunk.headline} sublinks = {chunk.sublinks}/>
	{:else if chunk.type == 'promo-link'}
		<Promo promoTitle = {chunk.title} promoImage = {chunk.image} promoDescription = {chunk.description} promoUrl = {chunk.link} promoHeadline = {chunk.headline}/>
	{/if}
{/each}