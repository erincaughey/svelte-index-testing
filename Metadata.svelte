<script>
    export let pageTitle = '';
    export let pageDescription = '';
    export let pageUrl = '';
    export let projectHed = '';
    export let projectDate = '';
    export let projectSeries = '';
    export let socialTitle = '';
    export let metaImage = '';
</script>

<meta charset="utf-8">
<title>{pageTitle} | Journal Sentinel - jsonline.com</title>
<meta name="description" content="{pageDescription}">
<meta name="viewport" content="width=device-width, initial-scale=1">

<meta name="mjs:headline" content="{projectHed}">
<meta name="mjs:dateline" content="{projectDate}">
<meta name="mjs:series" content="{projectSeries}">

<meta property="og:title" content="{socialTitle}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="{pageUrl}" />
<meta property="og:image" content="{metaImage}" />
    
<!--twitter card-->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@journalsentinel">
<meta name="twitter:creator" content="@journalsentinel">
<meta name="twitter:title" content="{socialTitle}">
<meta name="twitter:description" content="{pageDescription}">
<meta name="twitter:image" content="{metaImage}">

