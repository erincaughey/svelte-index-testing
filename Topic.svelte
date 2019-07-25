<script>
    export let topic;
    export let topicTitle;
    export let topicImage;
    export let topicDescription;
    export let linkUrl;
    export let linkText;
    export let linkPosition;
    // how to we incorporate the link position

    let links = [
        {topic: 'crisis', topicTitle: 'The Crisis', topicImage: '', topicDescription: 'Farmers cling to a dream that, for some, has become a nightmare.', linkUrl: '', linkText: 'primary', linkPosition: 1},
        {topic: 'crisis', topicTitle: 'The Crisis', topicImage: '', topicDescription: '', linkUrl: '', linkText: 'sub one', linkPosition: 2},
        {topic: 'crisis', topicTitle: 'The Crisis', topicImage: '', topicDescription: '', linkUrl: '', linkText: 'sub two', linkPosition: 3},
        {topic: 'crisis', topicTitle: 'The Crisis', topicImage: '', topicDescription: '', linkUrl: '', linkText: 'sub three', linkPosition: 4},
        {topic: 'economics', topicTitle: 'Economics', topicImage: '', topicDescription: '', linkUrl: '', linkText: 'primary', linkPosition: 1},
        {topic: 'economics', topicTitle: 'Economics', topicImage: '', topicDescription: '', linkUrl: '', linkText: 'sub one', linkPosition: 2},
        {topic: 'economics', topicTitle: 'Economics', topicImage: '', topicDescription: '', linkUrl: '', linkText: 'sub two', linkPosition: 3},
        {topic: 'economics', topicTitle: 'Economics', topicImage: '', topicDescription: '', linkUrl: '', linkText: 'sub three', linkPosition: 4}
    ]
</script>

<style>
.topic{
    margin: 5% 0;
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
    top: -96px;
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
    border-bottom: 1px solid #ccc;
}
.topic-links ul{
    list-style-type: none;
    padding-inline-start: 20px;
}
.topic-links ul li:first-child{
    line-height: 1.4; 
    font-size: 1.3em;
    font-family: 'Unify Sans', Tahoma, sans-serif;
}
.topic-links ul li.topic-summary{
    padding: 10px 0;
    font-size: 12px;
    color: #808080;
    font-family: 'Unify Sans', Tahoma, sans-serif;
    font-weight: 400;
}
.topic-links ul li{
    line-height: 1.4; 
    font-size: 1em;
    font-family: 'Unify Sans', Tahoma, sans-serif;
}
.topic-links ul a{
    color: #b10000;
    text-decoration: none;
}
</style>

<div class="topic" id={topic}>
    <slot name="topic">
        <h2 class="topic-title">topic</h2>
    </slot>
    {#each links as {topic, topicImage, topicDescription, linkUrl, linkText, linkPosition}, i}
    <div class="topic-items">
        <div class="topic-img">
            <img src="{topicImage}" alt=''>
        </div>
        <div class="topic-links">
        <ul>
            <li><a data-link-position={linkPosition} href="{linkUrl}">{linkText}</a></li>
            <li class="topic-summary">{topicDescription}</li>
            <li><a data-link-position={linkPosition} href="{linkUrl}">{linkText}</a></li>
            <li><a data-link-position={linkPosition} href="{linkUrl}">{linkText}</a></li>
            <li><a data-link-position={linkPosition} href="{linkUrl}">{linkText}</a></li>
            <li><a data-link-position={linkPosition} href="{linkUrl}">{linkText}</a></li>
        </ul>
        </div>
    </div>
    {/each}
</div>