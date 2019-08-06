<script>
    import { fly } from 'svelte/transition';

    export let category;
    export let question;
    export let answer;

    let active = false;

    function handleClick() {
		active = !active;
	}
</script>

<style>
.question-box{
    display: flex;
    margin: 5px 0;
    padding: 5px;
    border: 1px solid #009bff;
    background-color: #d4d4d4;
    box-shadow: 2px 2px 2px #ccc;
    box-sizing: border-box;
    width: 100%;
    flex-basis: 90vw;
}
.qa {
    flex-basis: 90vw;
}
.voter-question{
    display:flex;
    flex-flow: row wrap;
    align-items: center;
    font-family: 'Unify Sans', Tahoma, sans-serif;
    cursor: pointer;
}
.voter-question:hover {
  color: #009bff;
}
.voter-question:before{
    font-size: 24px;
    padding: 5px 10px;
    content: '+';
    color: #009bff;
    font-weight: 900;
    cursor: pointer;
}
.voter-answer {
    display: flex;
    padding: 20px;
    flex-flow: row wrap;
    font-family: 'Unify Serif', Georgia, serif;
}
@media(max-width: 440px){
    .voter-question{
        position: relative;
    }
    .voter-question:before{
        font-size: 20px;
        position: absolute;
        bottom: -50%;
        right: 0;
    }
}
</style>

<div class="question-box" on:click={handleClick} transition:fly="{{ y: 10, duration: 1000 }}">
    <div class="qa">
        <h4 class="voter-question">{question}</h4>
        {#if active}
            <div class="voter-answer">
                {answer}
            </div>
        {/if}
    </div>
</div>