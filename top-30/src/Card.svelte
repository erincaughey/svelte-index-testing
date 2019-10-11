<script>
    import jquery from 'jquery';
    export let image;
    export let rank;
    export let restaurant;
    export let foodType;
    export let neighborhood;
    export let description;
    export let phone;
    export let website;
    export let location;
    let url = 'https://www.jsonline.com/in-depth/entertainment/dining/carol-deptolla/2019/10/11/best-restaurants-milwaukee-2019-critic-carol-deptollas-top-30/2338732001/';
    export let anchor;

    //if has rank
    //export let url = 'https://www.jsonline.com/in-depth/entertainment/dining/carol-deptolla/2019/10/11/best-restaurants-milwaukee-2019-critic-carol-deptollas-top-30/2338732001/';
    //export let url = 'https://www.jsonline.com/in-depth/entertainment/dining/carol-deptolla/2019/10/11/best-casual-cheap-restaurants-milwaukee-2019-carol-deptolla-top-50/3902521002/';

    jquery(document).ready(function () {
        var $checkboxes = jquery('input[type="checkbox"]');

        $checkboxes.change(function () {
            var countCheckedCheckboxes = $checkboxes.filter(':checked').length;
            jquery('#count-checked-checkboxes').text(countCheckedCheckboxes);
            jquery('#edit-count-checked-checkboxes').val(countCheckedCheckboxes);
        });
    });

    // TWEET UPDATED TEXT
    jquery('#countLink').click(function () {
        // Get the count text
        var countText = jquery('#count').text();
        // Convert to string
        var countStr = countText.toString();
        // Find count length
        var countLen = countText.length;

        // Formats count for length
        if (countLen > 270) { // max chacters allowed
            // trim, and allow space for '...'"
            var trimCount = countStr.substring(0, 200);
            var trimCount = trimCount.trim(); //<-- ensures the last character isnt ' '
            countStr = trimCount + "...";
        }

        // Update the link
        var linkRef = "http://twitter.com/share?url=https://www.jsonline.com/top30&text=" + countStr + " " + "via @journalsentinel and @mkediner."; //+ "&screen_name=mkediner"
        jquery('#countLink').attr('href', linkRef);
    });
</script>

<style>
.card-container{
    display: flex;
    flex-flow: row wrap;
    max-width: 970px;
    margin: 0 auto;
}
.rest-card{
    display: flex;
    flex-flow: row wrap;
    flex-direction: column;
    max-width: 400px;
    box-shadow: 1px 1px 2px #434343;
    border: 1px solid #ccc;
    margin: 10px;
}
.rest-img{
    width: 100%;
}
.rest-card h4{
    font-family: 'Unify Sans', Tahoma, sans-serif;
    padding-left: 10px;
    font-size: 1.4em;
    margin-block-start: .6em;
    margin-block-end: .6em;
}
.rest-name span{
    font-weight: 600;
}
.rest-text{
    padding: 10px;
    font-size: 15px;
    font-family: 'Unify Sans', Tahoma, sans-serif;
    color: #333;
}
.rest-filter{
    display: flex;
    flex-direction: row;
    padding: 10px 0;
    align-items: center;
}
.rest-label{
    display: flex;
    flex-flow: row wrap;
    font-family: 'Unify Sans', Tahoma, sans-serif;
    padding: 0 12px;
    font-size: 14px;
}
.label-purps{
    color: #8A32A3;
}
.label-grey{
    color: rgb(145, 145, 145);
}

/*** custom checkboxes ***/
    input[type=checkbox] {
        position: relative;
        font-size: 20px;
        margin-left: 15px;
    }
    /* to hide the checkbox itself */
    label>input[type=checkbox]:before {
        position: absolute;
        top: -6px;
        left: -6px;
        background-color: #FFFFFF;
        font-family: 'Font Awesome\ 5 Free';
        display: inline-block;
        content:"\f0c8";
        letter-spacing: 5px;
        color: #8A32A3;
    }
    /* space between checkbox and label */
    label>input[type=checkbox]:checked:before {
        font-family: 'Font Awesome\ 5 Free';
        display: inline-block;
        content:"\f14a";
        letter-spacing: 5px;   
        color: #009bff;
    }
</style>

<div class="card-container">
    <div class="rest-card">
        <div class="rest-img">
            <img alt="{restaurant} dish" src="{image}">
        </div>
        <h4 class="rest-name"><span>{rank}</span> {restaurant}</h4>
        <div class="rest-label">
            <span class="label-purps">
                {foodType} &nbsp;
                | &nbsp; 
                {neighborhood} &nbsp;
                <br>
            </span>
        </div>
        <div class="rest-text">
            {description}
        </div>
        <label>
            <input type="checkbox" name="{restaurant}">
            I've been here
        </label>
        <div class="rest-filter">
            <div class="rest-label"><a href="tel:{phone}"><span class="label-grey"><i class="fas fa-phone"></i></span></a></div>
            <div class="rest-label"><a href="{website}" target="_blank"><span class="label-grey"><i class="fas fa-link"></i></span></a></div>
            <div class="rest-label"><a href="{location}" target="_blank"><span class="label-grey"><i class="far fa-compass"></i></span></a></div>
            <div class="rest-label"><a href="{url}{anchor}"><span class="label-purps">More information &rarr;</span></a></div>
        </div>
    </div>
</div>