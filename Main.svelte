<script>
    import Topic from './Topic.svelte';
    import Topper from './Topper.svelte';
    import Promo from './Promo.svelte';
    import Metadata from './Metadata.svelte';
</script>

<head>
<Metadata />
<link rel="shortcut icon" href="/shared/media/js-favicon.png">
<link href="/shared/css/unify/unify-fonts.css" rel="stylesheet">
<link rel="stylesheet" href="css/story-template.css" type="text/css" />
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
<script src="js/jquery.min.js"></script>

<style>
  body{
    margin: 0;
  }
  img {
    width: 100%;
  }
  a {
    text-decoration: none;
    color: #222;
  }
  .flex-container{
    display: flex;
    flex-flow: row wrap;
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
  }
  .series-intro{
    display: flex;
    flex-direction: row;
  }
  .series-text{
    flex-basis: 60vw;
    padding: 10px;
  }
  .series-topics{
    flex-basis: 25vw;
    padding: 10px;
  }
  .series-topics ul{
    list-style-type: none;
    padding-inline-start: 20px;
    line-height: 1.4; 
    font-size: 1.3em;
    font-weight: 600;
    font-family: 'Unify Sans', Tahoma, sans-serif;
    border-left: 1px solid #222;
  }
  .series-topics ul a{
    color: #b10000;
    text-decoration: underline solid #b10000;
  }
  .dairy-topics{
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    .topper-title{
      left: 30%;
      font-size: 2rem;
    }
    
    .series-intro{
      display: flex;
      flex-direction: column;
    }
    .series-topics ul{
      border-left: none;
      padding: 0 10px 50px 10px;
      text-align: center;
    }
    .topic-items{
      display: flex;
      flex-direction: column;
    }
    .highlight-box{
      display: flex;
      flex-direction: column;
    }
  }
</style>

</head>

<body>
<script src="/shared/header/v5/header.js"></script>
<Topper/>

<div class="flex-container">
  <div class="series-intro">
    <div class="series-text">
      <p>Cauliflower a seeds quail. Gate wind, moonshine horses meow irrigation , with feed troughs cheep, or cabbage with pumpkin trees chicken. Straw augers beef kettle our crickets. Mallet herbs basil nest, in welding equipment pens quail. Garden windmill chicks, hen at corn in, lettus a peppers. Bulls at rose garden cucumbers mice sunflower wheat in pig. Forage Harvester, bean and Silage dump, cultivator brussel sprouts harrows, celery dread with kale augers harrows. Pic.</p>
      <p>Up truck livestock, pets and storage shed, troughs feed bale manure, is garden wheat oats at augers. Blue berries pigeons buzz and bean prairie dogs nails at est. Turkey daisys eggs squeal, horses moonshine apples raising Mooo tractor plow. Rooste.</p>    
      <p>Celery pineapples fertilizer, a melon chirp pets in. Garden windmill chicks, hen at corn in, lettus a peppers. Mallet herbs basil nest, in welding equipment pen.</p>
    </div>
    <div class="series-topics">
      <ul>
        <strong>Topics</strong>
        <li><a href="#{topicTitle}" data-link-position={linkPosition}>{topicTitle}</a></li>
        <!-- is this right? -->
        <li><a href="#econ">Economics</a></li>
        <li><a href="#consumer">Consumerism</a></li>
        <li><a href="#immigration">Global Impact</a></li>
        <li><a href="#enviro">Environment</a></li>
        <li><a href="">more...</a></li>
      </ul>
    </div>
  </div>
  <div class="dairy-topics">

    <Topic topic={crisis} />
    <Promo promoPosition={1}/>
    <Topic topic={economics} />

      <!-- <div class="topic" id="overview">
        <h2 class="topic-title">The Crisis</h2>
        <div class="topic-items">
          <div class="topic-img">
              <img src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/03/12/11/ausangate-mountains-5.jpg?width=1000&height=614&fit=bounds&format=pjpg&auto=webp&quality=70&crop=16:9,offset-y0.5">
          </div>
          <div class="topic-links">
            <ul>
              <li><a href="https://www.jsonline.com/in-depth/news/special-reports/dairy-crisis/2019/02/21/wisconsin-dairy-farms-failing-milk-prices-fall/2540796002/"><strong>Part one:</strong> Dairy farmers are in crisis — and it could change Wisconsin forever</a></li>
              <li class="topic-summary">Farmers cling to a dream that, for some, has become a nightmare.</li>
              <li><a href="https://www.jsonline.com/story/news/special-reports/dairy-crisis/2019/03/25/wisconsin-dairy-farms-seek-higher-milk-prices-before-its-too-late-high-cost-economic-downturn-farmer/3190067002/">'We need to be heard now because time is running out'</a></li>
              <li><a href="https://www.jsonline.com/story/news/special-reports/dairy-crisis/2019/03/25/wisconsin-dairy-crisis-fremont-farmers-fight-survive-after-55-years/2787644002/">Fremont dairy farmers fight to survive after 55 years</a></li>
              <li><a href="https://www.jsonline.com/in-depth/news/special-reports/dairy-crisis/2019/02/21/how-4-wisconsin-family-dairy-farms-fighting-survive/2812251002/">How four family dairy farms in Wisconsin are fighting to survive</a></li>
              <li><a href=""><strong>Historical perspecitve:</strong> story link</a></li>
            </ul>
          </div>
        </div>
      </div> -->

      <div class="highlight-box" id="charts">
        <div class="highlight-info">
          <a href="">
            <h3 class="highlight-title">The dairy crisis in 6 charts</h3>
            <div class="topic-summary">A seeds quail. Utters are weathervane foal est. Onion organic oranges and purr ducks canning owls at a squeal. veterinarian blue berrie.</div>
          </a>
        </div>
        <div class="highlight-vis">
          <a href="">
            <img src="https://www.gannett-cdn.com/indepth-static-assets/uploads/master/3508060002/d2f4c595-18b6-471f-815f-a3d2816b2d1c-chart-story-promo-1.png?width=1800">
          </a>
        </div>
      </div>

      <div class="highlight-box" id="map">
        <div class="highlight-info">
          <a href="">
            <h3 class="highlight-title">Farms lost since 2014</h3>
            <div class="topic-summary">A seeds quail. Utters are weathervane foal est. Onion organic oranges and purr ducks canning owls at a squeal. veterinarian blue berrie.</div>
          </a>
        </div>
        <div class="highlight-vis">
          <a href="">
            <img src="https://www.gannett-cdn.com/indepth-static-assets/uploads/master/3508060002/4d9eb280-8580-4cbf-b0a8-095c443d6c30-dairy-interactive-promo-1.png?width=1800">
          </a>
        </div>
      </div>

      <!-- <div class="highlight-box" id="charts">
        <div class="highlight-one">
          <h3 class="highlight-title-one">The dairy crisis in 6 charts</h3>
          <a href="">
            <img src="https://www.gannett-cdn.com/indepth-static-assets/uploads/master/3508060002/d2f4c595-18b6-471f-815f-a3d2816b2d1c-chart-story-promo-1.png?width=1800">
          </a>
        </div>
        <div class="highlight-two">
          <h3 class="highlight-title-two">Farms lost since 2014</h3>
          <a href="">
            <img src="https://www.gannett-cdn.com/indepth-static-assets/uploads/master/3508060002/4d9eb280-8580-4cbf-b0a8-095c443d6c30-dairy-interactive-promo-1.png?width=1800">
          </a>
        </div>
      </div> -->

      <div class="topic" id="econ">
        <h2 class="topic-title">Economics</h2>
        <div class="topic-items">
          <div class="topic-img">
              <img src="https://www.pandotrip.com/wp-content/uploads/2018/03/Ushguli-village-at-the-foot-of-Mount-Shkhara.-Upper-Svaneti-Georgia-Europe.jpg">
          </div>
          <div class="topic-links">
            <ul>
              <li><a href=""><strong>Part two:</strong> story link</a></li>
              <li class="topic-summary">A seeds quail. Utters are weathervane foal est. Onion organic oranges and purr ducks canning owls at a squeal. veterinarian blue berrie.</li>
              <li><a href="">story link</a></li>
              <li><a href="">story link</a></li>
              <li><a href="">story link</a></li>
              <li><a href=""><strong>Historical perspecitve:</strong> story link</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="highlight-box" id="blog">
        <div class="highlight-info">
          <a href="">
            <h3 class="highlight-title">Wisconsin dairy farmers: Life in their own words</h3>
            <div class="topic-summary">As part of a yearlong project, journalists from the Milwaukee Journal Sentinel and USA TODAY NETWORK-Wisconsin are following dairy farms of different sizes at a time when the state's rural landscape and cultural identity could be altered permanently.</div>
          </a>
        </div>
        <div class="highlight-vis">
          <a href="">
            <img src="media/cows.jpg">
          </a>
        </div>
      </div>


      <div class="highlight-box" id="game">
        <div class="highlight-info">
          <a href="">
            <h3 class="highlight-title">Can you survive the dairy crisis?</h3>
            <div class="topic-summary">Explore the forces affecting a signature Wisconsin industry by navigating through common scenarios faced by dairy farmers.</div>
          </a>
        </div>
        <div class="highlight-vis">
          <a href="">
            <img src="media/farm-scene.png">
          </a>
        </div>
      </div>
  </div>
</div>

<!--footer-->
<script id="footer-script" src="/shared/footer/v1/footer.js" 
  data-first-link=""
  data-first-headline=""
  data-first-image=""
  data-first-desc=""
  data-second-link=""
  data-second-headline=""
  data-second-image=""
  data-second-desc="">
</script>



<!-- GET NEW ANALYTICS SCRIPT BLOCK
<script src="https://projects.jsonline.com/shared/js/projects-ga.js"></script> -->
</body>
