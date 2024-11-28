# for-naruter
로토리 님께서 배포하신 나루터(멀티페이지, 메뉴는 상단 고정)에 사용할 수 있는 코드들입니다.

모든 코드에 대한 오류 및 문의 모두 받지 않습니다.
제가 코딩은 초보라 오류가 있어도 금방 해결해드리기 어려울것 같아요;;

로토리님께서 배포하신 나루터 깃허브는 이쪽입니다.
<a href="https://github.com/rotorri/naruter">나루터 다운받으러 가기</a>

모든 footer는 height:100%코드를 따옴표 안에 추가해 주시길 바랍니다.<br>
아니면 footer가 보이지 않습니다.


대부분의 코드의 미리보기와 공지사항은 제 나루 홈페이지(<a href="https://appleapologize.naru.pub/">https://appleapologize.naru.pub/</a>)에서 확인하실 수 있습니다.

<br><br>
<h3>SNS틀</h3>
<hr>
<p>로토리 님께서 배포하신 나루터에서 board를 수정해서 SNS처럼 보이게 만들었습니다.</p>
<p>얼굴이 정중앙으로 오는 예시 이미지도 같이 넣어두었으니 참고 부탁드립니다.</p>

<br>

<h3>게시판</h3>
<hr>
<p>위의 SNS틀과 스타일을 공유합니다.</p>
<p>table 코드를 이용해서 게시판처럼 보이는 링크 모음으로 사용하실 수 있습니다.</p>

<br>
<h3>서브메뉴</h3>
<hr>
<H4>HTML</H4>
  <p>기존 a태그에 btn-sub (서브메뉴) 와 btn-sub-sub(서브의 서브메뉴)를 클래스로 추가하고서
 ul과 li태그로 감싸주어야 합니다.
  서브메뉴가 없다면 li태그만 사용하셔도 괜찮으시나 되도록이면 ul 태그로 감싸두시는 걸 추천해 드립니다.</p>

  <H4>CSS</H4>
  <p>css는 style.css의 :root안의 코드는 같은 곳에 추가해 주시면 되십니다.
    저는 전체색상 변경의 맨 밑에 넣었습니다.</p>
  <p>그 외의 다른 CSS코드는 맨 밑에 두셔도 상관 없습니다. 
  저는 미디어 태그 바로 위에 넣었습니다.</p>

기본적으로 배포된 style.css 의 240번째 줄에서
min-width: 0;
을
min-width: var(--button-min-width); 
으로 바꿔주시면 더 이쁘게 나와요*/
  
