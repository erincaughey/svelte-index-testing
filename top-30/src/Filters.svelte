<script>
    export let foodType;
    export let price;
    export let neighborhood;
    export let brunch;
    export let lunch;
    export let convo;

    export let foodOptions;
    export let placeOptions;
    export let priceOptions;

</script>

<style>
.filter-container{
    display: flex;
    border-bottom: 1px solid #999;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 9999;
}
select{
    border: 1px solid #222;
    margin: 1%;
    background-color: #fff;
    font-family: 'Unify Sans', Tahoma, sans-serif;
    font-weight: 400;
}
.position-box{
    display: flex;
}
.mobile-stack{
    display: flex;
    flex-direction: row;
    max-height: 90%;
    align-self: center;
}
.position-box h4{
    width: 220px; 
    align-self: center;
    font-weight: 600;
    margin-left: 20px;
    position: relative;
}
.custom-nav{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-self: center;
}
.dine-link{
    align-self: center;
    position: absolute;
    right: 20px;
}
.custom-nav img.one{
    width: 40%;
}
.custom-nav img.two{
    width: 50%;
}

/* tooltip */
.tool-tip {
    display: inline-block;
    position: relative;
    align-self: center;
    margin-right: 2%;
}
.tool-tip #tool-tip__icon {
    color: #999;
    font-size: 20px;
}
.tool-tip .tool-tip__info {
    display: none;
    background: #262626;
    color: #fff;
    border-radius: 3px;
    font-size: 0.875em;
    padding: 1em;
    position: absolute;
    left: -10px;
    top: 20px;
    width: 250px;
    z-index: 999;
}
.tool-tip .tool-tip__info:before, .tool-tip .tool-tip__info:after {
    content: "";
    transform: rotate(90deg);
    position: absolute;
    left: 15px;
    top: -15px;
    border-style: solid;
    border-width: 10px 10px 10px 0;
}
.tool-tip .tool-tip__info:after {
    left: 15px;
    border-right-color: #262626;
}
.tool-tip .tool-tip__info .info {
    display: block;
}
.tool-tip .tool-tip__info .info__title {
    color: #fff;
    font-weight: 600;;
}
.tool-tip:hover .tool-tip__info, .tool-tip:focus .tool-tip__info {
    display: inline-block;
}

a:focus + .tool-tip .tool-tip__info {
    display: inline-block;
}

@media(max-width: 1400px){
    #hide{
        display: none;
    }
}

@media(max-width: 1024px){
    #hide{
        display: none;
    }
    .position-box{
        display: inline-flex;
    }
    .custom-nav img.one{
    width: 90%;
}
.custom-nav img.two{
    width: 100%;
}
}
@media(max-width: 920px){
    .mobile-stack{
        display: flex;
        flex-direction: column;
        margin: 2% 0;
    }
    .position-box h4{
        margin: 0;
    }
    .tool-tip {
        align-self: flex-end;
    }
    .tool-tip #tool-tip__icon {
        color: #999;
        font-size: 20px;
        position: absolute;
        top: -24px;
        left: 10px;
    }
    .tool-tip .tool-tip__info {
        left: -200px;
    }
    .tool-tip .tool-tip__info:before, .tool-tip .tool-tip__info:after {
        left: 220px;
    }
    .tool-tip .tool-tip__info:after {
        left: 220px;
    }
    #hide{
        display: none;
    }
}

@media(max-width: 770px){
    #hide{
        display: none;
    }
    .position-box{
        display: inline-flex;
    }
}
</style>

<div class="filter-container">
    <div class="position-box">
        <div class="custom-nav">
            <a href="https://www.jsonline.com/">
                <img class="one" alt="Milwaukee Journal Sentinel logo" src="media/badge-sm.png">
                <img class="two" alt="Milwaukee Journal Sentinel logo" src="media/name-sm.png">
            </a>
        </div>

        <div class="mobile-stack">
            <h4>Filter by:</h4>

            <select name="food-type">
            <option value="none">Food Type</option>
            {#each foodOptions as foodOption, i}
                <option value="{foodOption}">{foodOption}</option>
            {/each}
            </select>

            <select name="neighborhood">
            <option value="none">Neighborhood</option>
            {#each placeOptions as placeOption, i}
                <option value="{placeOption}">{placeOption}</option>
            {/each}
            </select>

            <select name="price">
            <option value="none">Price</option>
            {#each priceOptions as priceOption, i}
                <option value="{priceOption}">{priceOption}</option>
            {/each}
            </select>

            <div class="tool-tip">
                <i id="tool-tip__icon" class="fas fa-info-circle"></i>
                <p class="tool-tip__info">
                    <span class="info"><span class="info__title">Price (based on median entrée or equivalent)</span></span>
                    <span class="info"><br></span>
                    <span class="info"><span class="info__title">$</span> &rarr; $1-$10</span>
                    <span class="info"><span class="info__title">$$</span> &rarr; $11-$20</span>
                    <span class="info"><span class="info__title">$$$</span> &rarr; $21-$30</span>
                    <span class="info"><span class="info__title">$$$$</span> &rarr; $31-$40</span>
                    <span class="info"><span class="info__title">$$$$$</span> &rarr; $40-plus</span>
                </p>
            </div>

            <select name="more">
                <option value="more">More...</option>
                <option value="brunch">Open for brunch</option>
                <option value="lunch">Open for lunch</option>
                <option value="reservations">Good for conversation</option>
            </select>
        </div>
    </div>        
    <div class="dine-link">
        <a id="hide" href="https://www.jsonline.com/entertainment/dining/">More dining news &rarr;</a>
    </div>        
</div>