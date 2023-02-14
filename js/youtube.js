// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
    new YT.Player('player', { //plyaer라는 id 값을 찾음
        videoId: 'o-Ikkh5oxuo', // 최초 재생할 유투브 영상 ID
        playerVars: {
            autoplay: true, // 자동 재생 유무
            loop: true, // 반복 재생 유무 
            playlist: 'o-Ikkh5oxuo'
        },
        events: {
            onReady: function(event) {
                // event.target.mute(); // target은 재생되고 있는 영상 자체
                // 음소거 - 기본적으로 음소거 처리함
            }
        }
    });
}