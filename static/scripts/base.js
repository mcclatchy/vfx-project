$(document).ready(function() {
    var projectURL = window.location.href;

    setShareURL();

    function setShareURL() {
        var projectURL = window.location.href;

        // Facebook
        var facebookURL = "http://www.facebook.com/sharer/sharer.php?u=" + projectURL;
        $('#hc-facebook-share').attr("href", facebookURL);

        // Twitter
        var phrase = " Hollywood's Oscars nominees gather as the VFX industry continues to be exported from LA #hollywoodtrick";
        // Story headline
            // var metaTitle = $('meta[name=title]').attr('content');
            // var title = metaTitle.split(' | ');
            // var twitterPartial = encodeURI(title[0]);
            // twitterPartial = amperOctoPlus(twitterPartial);
        var twitterURL = "https://twitter.com/home?status=" + encodeURIComponent(phrase) + "%20" + projectURL;
        $("#hc-twitter-share").attr("href", twitterURL);

        // Email
        var emailPartial = "mailto:?subject=Watch Documentary: Hollywood's Greatest Trick &body=";
        var emailURL = emailPartial + projectURL;
        $("#hc-email-share").attr("href", emailURL);
    }

    // Clean up ampersands, octothorpes, and pluses
    function amperOctoPlus(url) {
        url = url.replace(/%26/g, '%26');
        url = url.replace(/#/g, '%23');
        url = url.replace(/\+/g, '%2B');
        url = url.replace(/@/g, '%40');
        url = url.replace(/:/g, '%3A');
        return url;
    }
});
