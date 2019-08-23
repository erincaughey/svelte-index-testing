<script>
    export let category;
    export let question;
    export let answer;
</script>

<style>
.category{
    display: flex;
    margin: 5px 0;
    width: 100%;
}
.cat-title{
    font-family: 'Unify Sans', Tahoma, sans-serif;
    font-weight: 600;
    color: #ccc;
    font-size: 3em;
}
</style>

<div class="category">
    <h2 class="cat-title">{category}</h2>
</div>