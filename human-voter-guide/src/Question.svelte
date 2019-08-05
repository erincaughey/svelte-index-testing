<script>

</script>

<style>
/* .anchor{
    position: relative;
    top: -100px;
} */
.question-box{
    display: flex;
    margin: 10% 0;
    padding: 20px;
    border: 1px solid #009bff;
    background-color: #d4d4d4;
    box-shadow: 2px 2px 2px #ccc;
    box-sizing: border-box;
    width: 100%;
}
.qa {
    flex-basis: 90vw;
}
.voter-question{
    display:flex;
    flex-flow: row wrap;
    align-items: baseline;
    font-family: 'Unify Sans', Tahoma, sans-serif;
    cursor: pointer;
}
.voter-answer {
    display: flex;
    flex-flow: row wrap;
    font-family: 'Unify Serif', Georgia, serif;
    
}
.expand-question {
    font-size: 18px;
    color: #009bff;
    font-weight: 900;
    align-self: center;
    cursor: pointer;
}

.voter-question:hover {
  color: #009bff;
}
</style>

<div class="question-box">
<!-- <div class="anchor" id={cat}></div> -->
    <div class="qa">
        <h4 class="voter-question">This is a question</h4>
        <div class="voter-answer">This is your answer</div>
    </div>
    <div class="expand-question">+</div>
</div>