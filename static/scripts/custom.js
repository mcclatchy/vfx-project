//    _____                 _                                               _           _
//   / ____|               | |                                             (_)         | |
//  | |       _   _   ___  | |_    ___    _ __ ___      ___    ___   _ __   _   _ __   | |_   ___
//  | |      | | | | / __| | __|  / _ \  | '_ ` _ \    / __|  / __| | '__| | | | '_ \  | __| / __|
//  | |____  | |_| | \__ \ | |_  | (_) | | | | | | |   \__ \ | (__  | |    | | | |_) | | |_  \__ \
//   \_____|  \__,_| |___/  \__|  \___/  |_| |_| |_|   |___/  \___| |_|    |_| | .__/   \__| |___/
//                                                                             | |
//                                                                             |_|
//

$(document).ready(function() {
    var projectURL = window.location.href;

    require(['jwplayer'], function(jwplayer) {
        jwplayer.key='tTakaWDwaA/5t6sLfLhYBB4EfEa1ETrJDYnTPw==';

        // Hollywoods greatest trick hero video
        jwplayer("hc-hero-video").setup({
            playlist: [
                {
                    image: "http://www.mcclatchydc.com/news/n3jo3s/picture128695919/binary/vfx-hero.png",
                    sources: [
                        {
                            file: "http://dr6lcqo3bxtwa.cloudfront.net/binary/2017/2/22/19/1437582013143-p5k4ma/VFX%20rev%2015-1487793083490.mp4",
                            label: "480p SD"
                        }, {
                            file: "http://dr6lcqo3bxtwa.cloudfront.net/binary/2017/2/22/19/1437580321678-6bjrso/VFX%20rev%2015-1487793088609.mp4",
                            label: "720p HD",
                            default: "true"
                        }, {
                            file: "http://dr6lcqo3bxtwa.cloudfront.net/binary/2017/2/22/19/art_134277069/VFX_rev_15.m3u8"
                        }
                    ]
                }
            ],
            width: "100%",
            aspectratio: "16:9",
            visualplaylist: false,
            displaytitle: false,
            debug: true,
            advertising: {
                client: "vast",
                skipoffset: 5,
                tag: "http://pubads.g.doubleclick.net/gampad/ads?ciu_szs=300x250&correlator=%5Btimestamp%5D&cust_params=sect%3Dreligion%26id%3D133954254%26eid%3D133954254%26pl%3D&env=vp&gdfp_req=1&hl=en&impl=s&iu=%2F7675%2FFRS.site_fresnobee%2FLifestyle%2FFaithValues%2FReligion&output=vast&sz=400x300&unviewed_position_start=1&url=%5Breferrer_url%5D&vpos=preroll"
                // tag: "http://pubads.g.doubleclick.net/gampad/ads?ciu_szs=300x250&correlator=%5Btimestamp%5D&cust_params=sect%3Dnational%26id%3D131980949%26eid%3D41194104%26pl%3D&env=vp&gdfp_req=1&hl=en&impl=s&iu=%2F7675%2FMDC.site_mcclatchydc%2FNews%2FNational&output=vast&sz=400x300&unviewed_position_start=1&url=%5Breferrer_url%5D&vpos=preroll"
            },
            // Shadow and Sharing Designs set here.
            skin: {
                name: 'mi-video'
            },
            sharing: {
			    link: 'http://fresnobee.com/hollywoods-greatest-trick/',
			    sites: ['facebook', 'twitter', 'reddit', 'email'],
			    code: '<style>.mcclatchy-embed{position:relative;padding:0px 0 62.5%;height:0;overflow:hidden;max-width:100%}.mcclatchy-embed iframe{position:absolute;top:0;left:0;width:100%;height:100%}</style><div class="mcclatchy-embed"><iframe src="'+ projectURL +'/embed.php?play=MEDIAID" width="640" height="400" frameborder="0" allowfullscreen="true"></iframe></div>'
            }
        });

        // Hollywoods greatest trick hero video
        jwplayer("hc-story-video1").setup({
            playlist: [
                {
                    image: "http://media.mcclatchydc.com/static/test/vfx-project/static/img/explainer-keyframe.png",
                    sources: [
                        {
                            file: "http://dr6lcqo3bxtwa.cloudfront.net/binary/2017/2/22/17/1437582013143-p5k4ma/VFX%20Explainer-FINALwSOUND-USE%20THIS-1487784480003.mp4",
                            label: "480p SD"
                        }, {
                            file: "http://dr6lcqo3bxtwa.cloudfront.net/binary/2017/2/22/17/1437580321678-6bjrso/VFX%20Explainer-FINALwSOUND-USE%20THIS-1487784480725.mp4",
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

            // Shadow and Sharing Designs set here.
            skin: {
                name: 'mi-video'
            },
            sharing: {
			    link: 'http://fresnobee.com/hollywoods-greatest-trick/',
			    sites: ['facebook', 'twitter', 'reddit', 'email'],
			    code: '<style>.mcclatchy-embed{position:relative;padding:0px 0 62.5%;height:0;overflow:hidden;max-width:100%}.mcclatchy-embed iframe{position:absolute;top:0;left:0;width:100%;height:100%}</style><div class="mcclatchy-embed"><iframe src="'+ projectURL +'/embed.php?play=MEDIAID" width="640" height="400" frameborder="0" allowfullscreen="true"></iframe></div>'
            }
        });

    });

    // watch for play button click, then make hero img fade out and hero video play automatically
    $('.play-wrapper').click(function () {
        $('#hc-hero-placeholder, #hc-video-overlay, #hc-hero-wrapper').hide();
        $('#hc-hero-video-wrapper').fadeIn();
        jwplayer('hc-hero-video').play('true');
        $('#hc-nav-head span').fadeIn();

        // jquery add class that specifies media queries
        $('#hc-video-head-mob').addClass('hc-show-mob');
    });

    // change masthead newsroom name depending on domain
    var mastheadAlt = $('#masthead-logo img').attr('alt');
    var newsroomName = mastheadAlt.split(" | ");
    $('#hc-nav-logo a').text(newsroomName[0]);
    $('#hc-nav-logo a').attr('href', mast_options.publicationUrl)

    // remove ads
    $('#leaderboard-ad').remove();

    // Put more stories and comments after bottom two ads
    $('#hc-footer').insertAfter($('footer'));

    $('#hc-embed-link').click(function () {
        $('#hc-embed-copied').fadeIn();
        $('#hc-embed-copied').delay(1000).fadeOut();
    });

    var button = document.getElementById('hc-embed-link');

    button.addEventListener('click', function(e) {
      e.preventDefault();
      document.execCommand('copy', false, document.getElementById('hc-hero-textarea').select());
    });

    window.onload = function() {
        if (window.jQuery) {
            // jQuery is loaded
        } else {
            // jQuery is not loaded
            document.getElementById('hc-app-hide').style.display = 'none';

            document.getElementById('hc-app-overlay').style.display = 'block';

        }
    }
});
