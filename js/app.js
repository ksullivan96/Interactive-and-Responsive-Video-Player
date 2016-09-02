video = document.getElementById("click");

$(".video-player").on({
    mouseenter: function () {
        $('.mejs-container .mejs-controls .mejs-time').attr('style', 'visibility: visible;');
        $('.mejs-controls .mejs-play button').attr('style', 'visibility: visible;');
        $('.mejs-controls .mejs-pause button').attr('style', 'visibility: visible;');
        $('.mejs-controls .mejs-fullscreen-button button').attr('style', 'visibility: visible;');
        $('.mejs-controls .mejs-unfullscreen button').attr('style', 'visibility: visible;');
        $('.mejs-controls .mejs-volume-button').attr('style', 'visibility: visible;');
        $('.mejs-controls .mejs-mute button').attr('style', 'visibility: visible;');
        $('.mejs-controls .mejs-unmute button').attr('style', 'visibility: visible;');
        
        console.log("Hovering")
    },
    mouseleave: function () {
        
    if (video.paused) {
       $('.mejs-container .mejs-controls .mejs-time').attr('style', 'visibility: visible;');
        $('.mejs-controls .mejs-play button').attr('style', 'visibility: visible;');
        $('.mejs-controls .mejs-pause button').attr('style', 'visibility: visible;');
        $('.mejs-controls .mejs-fullscreen-button button').attr('style', 'visibility: visible;');
        $('.mejs-controls .mejs-unfullscreen button').attr('style', 'visibility: visible;');
        $('.mejs-controls .mejs-volume-button').attr('style', 'visibility: visible;');
        $('.mejs-controls .mejs-mute button').attr('style', 'visibility: visible;');
        $('.mejs-controls .mejs-unmute button').attr('style', 'visibility: visible;');
    } else {
        $('.mejs-container .mejs-controls .mejs-time').attr('style', 'visibility: hidden;');
        $('.mejs-controls .mejs-play button').attr('style', 'visibility: hidden;');
        $('.mejs-controls .mejs-pause button').attr('style', 'visibility: hidden;');
        $('.mejs-controls .mejs-fullscreen-button button').attr('style', 'visibility: hidden;');
        $('.mejs-controls .mejs-unfullscreen button').attr('style', 'visibility: hidden;');
        $('.mejs-controls .mejs-volume-button').attr('style', 'visibility: hidden;');
        $('.mejs-controls .mejs-mute button').attr('style', 'visibility: hidden;');
        $('.mejs-controls .mejs-unmute button').attr('style', 'visibility: hidden;');
        $('.mejs-controls .mejs-volume-button .mejs-volume-slider').attr('style', 'visibility: hidden;');
    }
    }
});

