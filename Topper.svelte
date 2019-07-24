<script>
    let topImage = 'https://cdn.cnn.com/cnnnext/dam/assets/170407220916-04-iconic-mountains-matterhorn-restricted.jpg';
    let topLabel = 'Dairyland in Distress';
</script>

<style>
.series-topper{
    background: url('{topImage}') no-repeat;-webkit-background-size: 100%;-moz-background-size: 100%;-o-background-size: 100%;background-size: 100%;
    padding-bottom: 50%;
    margin-bottom: 3%;
    position: relative;
}
.topper-title{
    font-size: 3rem;
    color: #b10000;
    background: rgba(252, 252, 252, 0.9);
    padding: 10px 20px;
    border-radius: 1px;
    box-shadow: 2px 5px 10px 4px rgba(0, 0, 0, 0.3);
    border: 1px solid #ccc;
    position: absolute;
    top: 10%;
    left: 50%;
    font-weight: 700;
    font-family: 'Unify Sans', Tahoma, sans-serif;
}
</style>

<div class="series-topper"></div>
<div class="topper-title">{topLabel}</div>