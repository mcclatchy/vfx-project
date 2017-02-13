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
        jwplayer("sa-playlist-player").setup({
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
            width: "80%",
            aspectratio: "16:9",
            visualplaylist: false,
            displaytitle: false,
            debug: true,
            image: "http://media.star-telegram.com/static/media/titletowntxmain.jpg",
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

});
