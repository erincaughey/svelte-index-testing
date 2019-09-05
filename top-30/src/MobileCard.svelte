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
    box-shadow: 1px 1px 2px #434343;
    border: 1px solid #ccc;
}
.rest-img-mob{
    width: 100%;
}
.rest-card-mob h4{
    font-family: 'Unify Sans', Tahoma, sans-serif;
    padding-left: 10px;
    font-size: 1.4em;
    margin-block-start: .6em;
    margin-block-end: .6em;
}
.rest-info{
    flex-basis: 50vw;
}
.rest-text{
    padding: 10px;
    font-size: 15px;
    font-family: 'Unify Sans', Tahoma, sans-serif;
    color: #333;
}
.rest-text a{
    color: #A46583;
}
.rest-filter{
    display: flex;
    flex-direction: row;
    padding: 10px 0;
    align-items: center;
}
.rest-label{
    font-family: 'Unify Sans', Tahoma, sans-serif;
    padding: 0 12px;
    font-size: 14px;
}
.label-purps{
    color: #A46583;
}
.label-grey{
    color: rgb(145, 145, 145);
}
</style>

<div class="rest-card-mob">
    <div class="rest-img-mob">
        <img src="https://www.gannett-cdn.com/presto/2018/10/06/PMJS/c7dbca3b-9a63-4438-a90f-92a4eead9b10-5030-LIST-SANFORD.JPG?width=400">
    </div>
    <h4 class="rest-name">Sandford</h4>
    <div class="rest-label"><span class="label-purps">type &nbsp;|&nbsp; local</span></div>
    <div class="rest-text">
        Dishes can be fleeting, because Sanford serves a seasonal menu and has, long before it was cool.
    </div>
    <div class="rest-filter">
        <div class="rest-label"><a href=""><span class="label-grey"><i class="fas fa-phone"></i></span></a></div>
        <div class="rest-label"><a href=""><span class="label-grey"><i class="fas fa-link"></i></span></a></div>
        <div class="rest-label"><a href=""><span class="label-grey"><i class="far fa-compass"></i></span></a></div>
        <div class="rest-label"><a href=""><span class="label-purps">More information &rarr;</span></a></div>
    </div>
</div>



<!-- <div class="rest-card-mob">
    <div class="rest-img-mob">
        <img alt="" src="{image}">
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
</div> -->