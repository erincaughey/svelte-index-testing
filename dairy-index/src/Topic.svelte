<script>
    export let topicTitle;
    export let topicImage;
    export let topicDescription;
    export let linkUrl;
    export let headline;
    export let sublinks;
    let topic = '';

    $:topic = topicTitle.toLowerCase().split(' ').join('-')
</script>

<style>
.anchor{
    position: relative;
    top: -100px;
}
.topic{
margin: 10% 0;
border: 8px solid #b10000;
box-shadow: 2px 2px 2px #ccc;
position: relative;
box-sizing: border-box;
}
.topic-title{
font-family: 'Unify Sans', Tahoma, sans-serif;
font-weight: 400;
color: #b10000;
position: absolute;
top: -95px; 
font-size: 3em;
}
.topic-items{
display: flex;
flex-direction: row;
}
.topic-img{
display:flex;
flex-basis: 60vw;
align-items: baseline;
}
.topic-links{
flex-basis: 25vw;
padding: 10px;
font-size: 14px;
}
.topic-links ul{
list-style-type: none;
padding-inline-start: 10px;
margin-block-start: .5em;
margin-block-end: .5em;
}
.topic-links ul li:first-child{
line-height: 1.4; 
font-size: 1.3em;
font-family: 'Unify Sans', Tahoma, sans-serif;
border: 0;
}
.topic-links ul li.topic-summary{
padding: 5px 0;
font-size: 12px;
color: #808080;
font-family: 'Unify Sans', Tahoma, sans-serif;
font-weight: 400;
border: 0;
}
.topic-links ul li{
line-height: 1.4; 
font-size: 1em;
padding: 5px 0;
border-bottom: 1px dashed #ccc;
font-family: 'Unify Sans', Tahoma, sans-serif;
}
.topic-links ul li:last-child{
border: 0;
}
.topic-links ul a{
color: #b10000;
text-decoration: none;
}
@media (max-width: 768px) {
    .topic-items{
        display: flex;
        flex-direction: column;
    }
}
@media(max-width: 550px){
    .topic-title{
        position: absolute;
        top: -82px;
        font-size: 2.5em;
    }
}
@media(max-width: 440px){
    .topic{
        margin: 20% 0;
        border: 6px solid #b10000;
    }
    .topic-title{
        position: absolute;
        top: -62px;
        font-size: 1.9em;
    }
}

@media(max-width: 320px){
    .topic{
        margin: 20% 0;
        border: 6px solid #b10000;
    }
    .topic-title{
        font-family: 'Unify Sans', Tahoma, sans-serif;
        font-weight: 400;
        color: #b10000;
        position: absolute;
        top: -53px;
        font-size: 1.6em;
    }
}
</style>

<div class="topic">
    <div class="anchor" id={topic}></div>
    <h2 class="topic-title">{topicTitle}</h2>
    <div class="topic-items">
        <div class="topic-img">
            <img src="{topicImage}" alt=''>
        </div>
        <div class="topic-links">
        <ul>
            <li><a href="{linkUrl}">{headline}</a></li>
            <li class="topic-summary">{topicDescription}</li>
            {#each sublinks as sublink}
                <li><a href="{sublink.link}">{sublink.headline}</a></li>
            {/each}
        </ul>
        </div>
    </div>
</div>