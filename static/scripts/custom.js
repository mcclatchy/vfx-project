//    _____                 _                                               _           _
//   / ____|               | |                                             (_)         | |
//  | |       _   _   ___  | |_    ___    _ __ ___      ___    ___   _ __   _   _ __   | |_   ___
//  | |      | | | | / __| | __|  / _ \  | '_ ` _ \    / __|  / __| | '__| | | | '_ \  | __| / __|
//  | |____  | |_| | \__ \ | |_  | (_) | | | | | | |   \__ \ | (__  | |    | | | |_) | | |_  \__ \
//   \_____|  \__,_| |___/  \__|  \___/  |_| |_| |_|   |___/  \___| |_|    |_| | .__/   \__| |___/
//                                                                             | |
//                                                                             |_|

$(document).ready(function() {

    require(['jwplayer'], function(jwplayer) {
        jwplayer.key = "tTakaWDwaA/5t6sLfLhYBB4EfEa1ETrJDYnTPw==";
        //Setup the Player
        jwplayer("hc-hero-video").setup({
            playlist: [
                {
                    sources: [
                        {
                            file: "http://dr6lcqo3bxtwa.cloudfront.net/binary/2017/1/24/20/1437582013143-p5k4ma/Teaser%20Trailer-1485288815062.mp4",
                            label: "480p SD"
                        }, {
                            file: "http://dr6lcqo3bxtwa.cloudfront.net/binary/2017/1/24/20/1437580321678-6bjrso/Teaser%20Trailer-1485288815578.mp4",
                            label: "720p HD",
                            default: "true"
                        }, {
                            file: "http://dr6lcqo3bxtwa.cloudfront.net/binary/2017/1/24/20/art_128458254/Teaser_Trailer.m3u8"
                        }
                    ]
                }
            ],
            width: "100%",
            aspectratio: "16:9",
            visualplaylist: false,
            displaytitle: false,
            debug: true,
            image: "http://www.mcclatchydc.com/news/n3jo3s/picture128695919/binary/vfx-hero.png",
            advertising: {
              client: "vast",
              tag: "http://pubads.g.doubleclick.net/gampad/ads?ciu_szs=300x250&correlator=%5Btimestamp%5D&cust_params=sect%3Dnational%26id%3D132251924%26eid%3D132391239%26pl%3D&env=vp&gdfp_req=1&hl=en&impl=s&iu=%2F7675%2FSAC.site_sacbee%2FNews%2FState&output=vast&sz=400x300&unviewed_position_start=1&url=%5Breferrer_url%5D&vpos=preroll"
          },
            // Shadow and Sharing Designs set here.
            skin: {
                name: 'mi-video'
            },
            sharing: {
                sites: [
                    'facebook', 'twitter', 'reddit', 'email'
                ],
                code: 'code here'
            }
        });
    });

    $('.hc-video-play').click(function () {
        $('#hc-video-overlay, #hc-hero-img').fadeOut();
        jwplayer('hc-hero-video').play('true');
    });

    $('#hc-hero-img').load(function() {
        console.log("I loaded");
        $('#hc-video-overlay').show();
    });

});
