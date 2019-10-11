<script>
    export let image;
    export let rank;
    export let restaurant;
    export let foodType;
    export let neighborhood;
    export let description;
    export let phone;
    export let website;
    export let location;
    export let anchor;

    $(document).ready(function () {
        var $checkboxes = $('input[type="checkbox"]');

        $checkboxes.change(function () {
            var countCheckedCheckboxes = $checkboxes.filter(':checked').length;
            $('#count-checked-checkboxes').text(countCheckedCheckboxes);
            $('#edit-count-checked-checkboxes').val(countCheckedCheckboxes);
        });
    });

    // TWEET UPDATED TEXT
    $('#countLink').click(function () {
        // Get the count text
        var countText = $('#count').text();
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
        $('#countLink').attr('href', linkRef);
    });
</script>

<style>
.card-container{
    display: flex;
    flex-flow: row wrap;
    max-width: 970px;
    margin: 0 auto;
}
.topper-title {
    font-size: 4rem;
    color: #222;
    font-weight: 700;
    font-family: 'Unify Sans', Tahoma, sans-serif;
    position: relative;
    margin-bottom: 5%;
    z-index: -99;
}
.topper-title::after {
    display: block;
    position: absolute;
    top: 100px;
    left: 0;
    content: " ";
    width: 100px;
    height: 230px;
    border-top: 8px solid #009bff;
}
.chatter{
    margin: 2%;
}
.counter{
    font-family: 'Unify Sans', Tahoma, sans-serif;
    padding: 0 10px;
    align-self: center;
    font-size: 30px;
}
.end-count{
    font-size: 34px;
    color: #009bff;
    font-weight: 700;
}
.checklist-share-button-tw{
    padding-left: 10px;
}
.checklist-share-button-tw:hover{
    cursor: alias;
}
.fab.fa-twitter{
    color: #999;
}
.rest-card-mob{
    display: flex;
    flex-flow: row wrap;
    flex-direction: column;
    max-width: 300px;
    box-shadow: 1px 1px 2px #434343;
    border: 1px solid #ccc;
    margin: 10px;
}
.rest-card{
    display: flex;
    flex-direction: row;
    max-width: 600px;
    box-shadow: 1px 1px 2px #434343;
    border: 1px solid #ccc;
}
.rest-img-mob{
    width: 100%;
}
.rest-img{
    flex-basis: 50vw;
}
.rest-card h4, .rest-card-mob h4{
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
    color: #8A32A3;
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
select{
    border: 1px solid #222;
    margin: 1%;
    background-color: #fff;
    font-family: 'Unify Sans', Tahoma, sans-serif;
    font-weight: 400;
    text-transform: uppercase;
}

/*** custom checkboxes ***/
    input[type=checkbox] {
        position: relative;
        font-size: 20px;
        margin-left: 3px;
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
    <div class="chatter">
        <div class="topper-title">Search Milwaukee's top 30 list</div>
        <p>chatter....Spicy jalapeno bacon ipsum dolor amet cow nulla ex pariatur dolore ea. Hamburger leberkas velit beef ribs chuck non in tail sirloin swine tenderloin venison pork loin. Shoulder pork meatloaf beef capicola salami excepteur voluptate est enim short loin dolor ea minim pork chop. Meatball filet mignon shoulder exercitation cow, magna aliqua beef ut ribeye dolore.</p>
        <p>Ground round ullamco brisket excepteur, shoulder eu aliqua. Labore tri-tip in ut ipsum. Pancetta pork chop t-bone magna, pariatur occaecat officia beef ribs sirloin lorem ball tip ham aliquip short ribs. Ad magna esse, in jerky meatloaf t-bone tenderloin beef rump veniam burgdoggen fugiat irure ullamco. Aliqua hamburger nulla tenderloin incididunt excepteur meatball qui jowl ex ullamco. Laborum ut meatball aliquip reprehenderit ribeye dolor pork chop ad prosciutto nostrud.</p>
        <div class="counter">
            <div class="count-checkboxes-wrapper">
                <div id="count">
                    <span class="end-count" id="count-checked-checkboxes">0</span> restaurants visited 
                        <span class="checklist-share-button-tw">
                            <span id="sharing">
                                <a id="countLink" href="#" target="_blank"><i class="fab fa-twitter"></i></a>
                        </span>
                    </span>
                </div> 
            </div>
        </div>
    </div>

    <div class="rest-card-mob">
        <div class="rest-img-mob">
            <img src="https://www.gannett-cdn.com/presto/2018/10/06/PMJS/c7dbca3b-9a63-4438-a90f-92a4eead9b10-5030-LIST-SANFORD.JPG?width=400">
        </div>
        <h4 class="rest-name">Sandford</h4>
        <div class="rest-label">
            <span class="label-purps">
                type &nbsp;
                |&nbsp; 
                local &nbsp;
                <label>
                    <input type="checkbox" name="sanford">
                    I've been here
                </label>
            </span>
        </div>
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

    <div class="rest-card-mob">
        <div class="rest-img-mob">
            <img src="https://www.gannett-cdn.com/presto/2018/10/06/PMJS/04634467-887f-4c14-a3ae-ba8014834594-5030-LIST-ARDENT.JPG?width=400">
        </div>
        <h4 class="rest-name">Ardent</h4>
        <div class="rest-label">
            <span class="label-purps">
                type &nbsp;
                |&nbsp;
                local &nbsp;
                <label>
                    <input type="checkbox" name="sanford">
                    I've been here
                </label>
            </span>
        </div>
        <div class="rest-text">
            Ardent, with its changing tasting menu of 10 or so courses, always surprises and delights.
        </div>
        <div class="rest-filter">
            <div class="rest-label"><a href=""><span class="label-grey"><i class="fas fa-phone"></i></span></a></div>
            <div class="rest-label"><a href=""><span class="label-grey"><i class="fas fa-link"></i></span></a></div>
            <div class="rest-label"><a href=""><span class="label-grey"><i class="far fa-compass"></i></span></a></div>
            <div class="rest-label"><a href=""><span class="label-purps">More information &rarr;</span></a></div>
        </div>
    </div>

    <div class="rest-card-mob">
        <div class="rest-img-mob">
            <img src="https://www.gannett-cdn.com/presto/2018/10/06/PMJS/80f6e850-e099-42f4-a4de-f082dbb288dc-5030-esterev.JPG?width=400">
        </div>
        <h4 class="rest-name">EsterEv</h4>
        <div class="rest-label">
            <span class="label-purps">
                type &nbsp;
                |&nbsp;
                local &nbsp;
                <label>
                    <input type="checkbox" name="sanford">
                    I've been here
                </label>
            </span>
        </div>
        <div class="rest-text">
            You never know what you’ll get on the tasting menu by chefs Dan Jacobs and Dan Van Rite but it assuredly will be
            delicious.
        </div>
        <div class="rest-filter">
            <div class="rest-label"><a href=""><span class="label-grey"><i class="fas fa-phone"></i></span></a></div>
            <div class="rest-label"><a href=""><span class="label-grey"><i class="fas fa-link"></i></span></a></div>
            <div class="rest-label"><a href=""><span class="label-grey"><i class="far fa-compass"></i></span></a></div>
            <div class="rest-label"><a href=""><span class="label-purps">More information &rarr;</span></a></div>
        </div>
    </div>  
</div>