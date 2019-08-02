<script>
    export let promoTitle;
    export let promoImage;
    export let promoDescription;
    export let promoUrl;
    export let promoHeadline;
</script>

<style>
.highlight-box{
display: flex;
flex-direction: row;
position: relative;
margin: 5% 0;
}
.highlight-info{
flex-basis: 90vw;
margin: 2% 2% 0 0;
}
.highlight-title{
margin-block-start: 0;
margin-block-end: 1em;
font-size: 1.7rem;
font-family: 'Unify Serif', Georgia, serif;
font-weight: 700;
}
.highlight-title:hover{
color: #b10000;
font-family: 'Unify Serif', Georgia, serif;
}
.topic-summary{
font-size: 16px;
color: #808080;
font-family: 'Unify Sans', Tahoma, sans-serif;
font-weight: 400;
}
.highlight-one{
flex-basis: 50vw;
padding: 10px;
}
.highlight-two{
flex-basis: 50vw;
padding: 10px;
}
.highlight-vis{
flex-basis: 40vw;
padding: 10px;
position: relative;
}
.highlight-title-one, .highlight-title-two{
font-family: 'Unify Sans', Tahoma, sans-serif;
color: #222;
font-size: 1.5em;
text-shadow: 2px 3px 8px rgba(99, 99, 99, 0.4);
z-index: 90;
text-align: center;
}
.highlight-one:hover .highlight-title-one, .highlight-two:hover .highlight-title-two{
color: #b10000;
-webkit-text-stroke: 0px;
}
.highlight-title-vis{
font-family: 'Unify Sans', Tahoma, sans-serif;
color: #222;
position: absolute;
bottom: 50%; 
right:20%;
font-size: 1.6;
text-shadow: 2px 3px 8px rgba(99, 99, 99, 0.4);
z-index: 90;
}
.highlight-vis:hover .highlight-title-vis{
color: #b10000;
-webkit-text-stroke: 0px;
}



@media (max-width: 425px) {
    .highlight-box{
	  display: flex;
      flex-direction: column;
      margin-bottom: 20%;
	}
	.highlight-info{
	  flex-basis: 0;
	  margin: 0;
	}
	.highlight-vis{
	  flex-basis: 40vw;
	  padding: 10px 0;
	  position: relative;
    }
}
</style>


<div class="highlight-box">
    <div class="highlight-info">
        <a href="{promoUrl}">
        <h3 class="highlight-title">{promoHeadline}</h3>
        <div class="promo-summary">{promoDescription}</div>
        </a>
    </div>
    <div class="highlight-vis">
        <a href="{promoUrl}">
        <img src="{promoImage}" alt=''>
        </a>
    </div>
</div>