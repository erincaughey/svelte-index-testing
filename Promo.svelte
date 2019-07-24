<script>
    export let promoTitle;
    export let promoImage;
    export let promoDescription;
    export let promoUrl;
    export let promoText;
    export let promoPosition;
    // how to we incorporate the link position

    let promoLinks = [
        {promoTitle: 'promo', promoImage: 'media/farm-scene.png', promoDescription: 'Explore the forces affecting a signature Wisconsin industry by navigating through common scenarios faced by dairy farmers.', promoUrl: 'https://projects.jsonline.com/apps/dairyland-in-distress/can-you-survive-the-dairy-crisis.html', promoText: 'Can you survive the dairy crisis?', promoPosition: ''},
        {promoTitle: 'promo', promoImage: 'media/farm-scene.png', promoDescription: 'Explore the forces affecting a signature Wisconsin industry by navigating through common scenarios faced by dairy farmers.', promoUrl: 'https://projects.jsonline.com/apps/dairyland-in-distress/can-you-survive-the-dairy-crisis.html', promoText: 'Can you survive the dairy crisis?', promoPosition: ''},
        {promoTitle: 'promo', promoImage: 'media/farm-scene.png', promoDescription: 'Explore the forces affecting a signature Wisconsin industry by navigating through common scenarios faced by dairy farmers.', promoUrl: 'https://projects.jsonline.com/apps/dairyland-in-distress/can-you-survive-the-dairy-crisis.html', promoText: 'Can you survive the dairy crisis?', promoPosition: ''},
        {promoTitle: 'promo', promoImage: 'media/farm-scene.png', promoDescription: 'Explore the forces affecting a signature Wisconsin industry by navigating through common scenarios faced by dairy farmers.', promoUrl: 'https://projects.jsonline.com/apps/dairyland-in-distress/can-you-survive-the-dairy-crisis.html', promoText: 'Can you survive the dairy crisis?', promoPosition: ''}
    ]
</script>


<div class="highlight-box">
{#each promoLinks as {promoImage, promoDescription, promoUrl, promoText}, i}
    <div class="highlight-info">
        <a href="{promoUrl}">
        <h3 class="highlight-title">{promoText}</h3>
        <div class="promo-summary">{promoDescription}</div>
        </a>
    </div>
    <div class="highlight-vis">
        <a href="{promoUrl}">
        <img src="{promoImage}" alt=''>
        </a>
    </div>
{/each}
</div>