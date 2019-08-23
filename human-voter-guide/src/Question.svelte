<script>
    import { fade } from 'svelte/transition';

    export let category;
    export let question;
    export let answer;

    let active = false;

    function handleClick() {
		active = !active;
	}
</script>

<style>
.category{
    display: flex;
    margin: 5px 0;
    width: 100%;
}
.question-box{
    display: flex;
    margin: 5px 0;
    padding: 10px;
    border: 1px solid #009bff;
    background-color: #fff;
    box-shadow: 0 0 2px #d3d3d3;
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
    padding: 3px 10px;
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
        bottom: -60%;
        right: 0;
    }
}
</style>

<div class="category">
    <!-- <h2 class="cat-title">{category}</h2> -->
    <div class="question-box" on:click={handleClick} transition:fade>
        <div class="qa">
            <h4 class="voter-question">{question}</h4>
            {#if active}
                <div class="voter-answer">
                    {answer}
                </div>
            {/if}
        </div>
    </div>
</div>