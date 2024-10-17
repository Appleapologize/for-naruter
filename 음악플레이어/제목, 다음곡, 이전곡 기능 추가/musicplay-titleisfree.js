/*
html에서는 <div id="bgmVisual"></div> 코드 밑에 하단의 코드를 붙여넣어야 합니다.
<div id="bgmTitles" style="display:none;">
    <span data-video-index="0" data-title="첫 번째 곡 제목"></span>
    <span data-video-index="1" data-title="두 번째 곡 제목"></span>
    <span data-video-index="2" data-title="세 번째 곡 제목"></span>
</div>
*/

let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player; // YouTube 플레이어 객체 전역 변수 선언
let currentIndex = 0; // 현재 곡 인덱스 추적

// YouTube Iframe API가 준비되면 호출되는 함수
function onYouTubeIframeAPIReady() {
    let playlistId = 'PLrWUB4lPqAdRnSyYg7aTXG5On7jbuUqoO'; // 재생목록 ID
    player = new YT.Player('bgm', {
        playerVars: {
            listType: 'playlist',
            list: playlistId,
            autoplay: 1,
            loop: 1,
            disablekb: 1,
            playsinline: 1,
            rel: 0
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange // 플레이어 상태 변화 이벤트 처리
        }
    });
}

// 플레이어가 준비되면 호출되는 함수
function onPlayerReady(event) {
    event.target.playVideo(); // 플레이어가 준비되면 재생
}

// 플레이어 상태가 변할 때 호출되는 함수 (재생, 일시정지 등)
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        updateVideoTitle(); // 재생 상태일 때 동영상 제목 업데이트
    }
}

// 현재 재생 중인 동영상의 제목을 HTML에서 가져오거나 YouTube에서 가져오는 함수
function updateVideoTitle() {
    // HTML에서 곡 제목 가져오기
    let titleElement = document.querySelector(`#bgmTitles span[data-video-index="${currentIndex}"]`);
    let title = titleElement ? titleElement.getAttribute('data-title') : null;

    if (title) {
        // HTML에 지정된 제목이 있으면 해당 제목 사용
        document.getElementById('marqueeText').innerText = title;
    } else {
        // HTML에 제목이 없으면 YouTube API로부터 제목 가져오기
        if (player && player.getVideoData) {
            let videoData = player.getVideoData(); // 현재 동영상 데이터 가져오기
            document.getElementById('marqueeText').innerText = videoData.title; // 제목 업데이트
        }
    }
}

// 다음 곡, 이전 곡, 재생/멈춤 기능을 처리하는 함수
function bgm(action) {
    let status = document.getElementById('bgmStatus');

    if (action == 'play') {
        if (player && player.playVideo) {
            player.playVideo(); // 재생
            status.setAttribute("value", "play");
            updateVideoTitle(); // 재생 시 제목 업데이트
        }
    } else if (action == 'stop') {
        if (player && player.stopVideo) {
            player.stopVideo(); // 멈춤
            status.setAttribute("value", "stop");
            document.getElementById('marqueeText').innerText = "음악 정지"; // 정지 상태일 때 표시
        }
    } else if (action == 'next') {
        if (player && player.nextVideo) {
            player.nextVideo(); // 다음 곡
            currentIndex = (currentIndex + 1) % player.getPlaylist().length; // 인덱스 업데이트
            updateVideoTitle(); // 제목 업데이트
            status.setAttribute("value", "next");
        }
    } else if (action == 'prev') {
        if (player && player.previousVideo) {
            player.previousVideo(); // 이전 곡
            currentIndex = (currentIndex - 1 + player.getPlaylist().length) % player.getPlaylist().length; // 인덱스 업데이트
            updateVideoTitle(); // 제목 업데이트
            status.setAttribute("value", "prev");
        }
    }
}
