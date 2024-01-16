// let player;
// function onYouTubeIframeAPIReady() {
//     player = new YT.Player('player', {
//         events: {
//             'onReady': onPlayerReady,
//             'onStateChange': onPlayerStateChange
//         }
//     });
// }

// function onPlayerReady(event) {
//     event.target.playVideo();
// }

// let done = false;
// function onPlayerStateChange(event) {
//     if (event.data == YT.PlayerState.PLAYING && !done) {
//         setTimeout(stopVideo, 6000);
//         done = true;
//     }
// }
// function stopVideo() {
//     player.stopVideo();
// }