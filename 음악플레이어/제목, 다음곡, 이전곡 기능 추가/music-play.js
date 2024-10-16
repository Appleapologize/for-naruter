// YouTube Iframe API를 로드하는 스크립트 추가
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player; // YouTube 플레이어 객체 전역 변수 선언

// YouTube Iframe API가 준비되면 호출되는 함수
function onYouTubeIframeAPIReady() { let playlistId = 'PLqBWcx7bWEcEdGFj6_kYjMchla4Q5tn1b'; // 재생목록 ID
    player = new YT.Player('bgm', { playerVars: { listType: 'playlist',
                                                   list: playlistId,
                                                   autoplay: 1,
                                                   loop: 1,
                                                   disablekb: 1,
                                                   playsinline: 1,
                                                   rel: 0},
                                      events: {'onReady': onPlayerReady,
                                              'onStateChange': onPlayerStateChange // 플레이어 상태 변화 이벤트 처리
                                               }});}

// 플레이어가 준비되면 호출되는 함수
function onPlayerReady(event) {
    event.target.playVideo(); // 플레이어가 준비되면 재생
}

// 플레이어 상태가 변할 때 호출되는 함수 (재생, 일시정지 등)
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        updateVideoTitle(); // 재생 상태일 때 동영상 제목 업데이트
    }}

// 현재 재생 중인 동영상의 제목을 가져와서 업데이트하는 함수
function updateVideoTitle() {
    if (player && player.getVideoData) {
        let videoData = player.getVideoData(); // 현재 동영상 데이터 가져오기
        document.getElementById('marqueeText').innerText =  videoData.title; // 제목 업데이트
    }
}

function updateTitle(newTitle) {
    const marqueeText = document.getElementById('marqueeText');
    
    // 새로운 텍스트로 업데이트
    marqueeText.textContent = newTitle;

    // 애니메이션을 재설정하여 다시 시작
    void marqueeText.offsetWidth; // 트리거로 리플로우 발생
    marqueeText.style.animation = ''; // 애니메이션 적용
}

// 예시로 제목을 업데이트
updateTitle('새로운 제목 텍스트입니다.');

// 다음 곡, 이전 곡, 재생/멈춤 기능을 처리하는 함수
function bgm(action) {
    let status = document.getElementById('bgmStatus');
    
    if (action == 'play') {
        if (player && player.playVideo) {
            player.playVideo(); // 재생
            status.setAttribute("value", "play");
        }
    } else if (action == 'stop') {
        if (player && player.stopVideo) {
            player.stopVideo(); // 멈춤
            status.setAttribute("value", "stop");
        }
    } else if (action == 'next') {
        if (player && player.nextVideo) {
            player.nextVideo(); // 다음
            status.setAttribute("value", "next");
        }
    } else if (action == 'prev') {
        if (player && player.previousVideo) {
            player.previousVideo(); // 이전
            status.setAttribute("value", "prev");
        }
    }
}
