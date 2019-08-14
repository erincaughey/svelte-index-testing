<script>
    export let name;
    export let description;
    export let image;
    export let food;
    export let price;
    export let neighborhood;
    export let anchorLink;
</script>

<style>
.rest-card-mob{
    display: flex;
    flex-direction: column;
    max-width: 300px;
    box-shadow: 2px 2px 2px #434343;
    border: 1px solid #ccc;
}
.rest-img-mob{
    width: 100%;
}
.rest-card-mob h4{
    font-family: 'Unify Sans', Tahoma, sans-serif;
    padding-left: 10px;
}
.rest-info{
    flex-basis: 50vw;
}
.rest-text{
    padding: 10px;
    font-size: 15px;
    font-family: 'Unify Sans', Tahoma, sans-serif;
    color: rgb(145, 145, 145);
}
.rest-text a{
    color: #A46583;
}
.rest-filters{
    display: flex;
    flex-direction: row;
    padding: 10px 0;
}
.rest-item{
    font-family: 'Unify Sans', Tahoma, sans-serif;
    flex-basis: 30vw;
    padding: 0 10px;
}
.label-1{
    color: #8A32A3;
}
</style>

<div class="rest-card-mob">
    <div class="rest-img-mob">
        <img src="{image}">
    </div>
    <h4 class="rest-name">{name}</h4>
    <div class="rest-text">
        {description}
        <a href="{anchorLink}">Read more &rarr;</a>
    </div>
    <div class="rest-filters">
        <div class="rest-item"><span class="label-1">{food}</span></div>
        <div class="rest-item"><i class="fas fa-map-marker"></i> {neighborhood}</div>
        <div class="rest-item"><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i>{price}</div>
    </div>
</div>