<script>
	import { onMount } from 'svelte';
	import Question from './Question.svelte';

	let questions = [];

	onMount(async () => {
		const res = await fetch(`questions.json`);
		questions = await res.json();
	});
</script>

<style>
</style>

<div class="flex-container">
{#each questions as question, i}
	<Question category = {question.category} question = {question.question} answer = {question.answer} />
{/each}
</div>
