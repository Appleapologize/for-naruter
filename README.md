# for-naruter
로토리 님께서 배포하신 나루터(멀티페이지, 메뉴는 상단 고정)에 사용할 수 있는 코드들입니다.

모든 코드에 대한 오류 및 문의 모두 받지 않습니다.
제가 코딩은 초보라 오류가 있어도 금방 해결해드리기 어려울것 같아요;;

로토리님께서 배포하신 나루터 깃허브는 이쪽입니다.
<a href="https://github.com/rotorri/naruter">나루터 다운받으러 가기</a>

대부분의 코드는 제 나루 홈페이지(<a href="https://appleapologize.naru.pub/">https://appleapologize.naru.pub/</a>)에서 확인하실 수 있습니다.

<br><br>
<h3>갤러리</h3>
<hr>
<p>컴퓨터에서는 4열 배열 / 패드에서는 3열 배열 / 모바일에서는 1열로 배열됩니다.</p>
<p>가로배열 갤러리는 왼쪽에서 오른쪽으로 이미지가 정렬됩니다. 하지만 상하 여백이 남는다는 단점이 있습니다.</p>
<p>세로 배열 갤러리는 위에서 아래로 이미지가 정렬됩니다. 상하 여백이 남지 않지만, 세로로 배열되는게 단점입니다.</p>
<p>위의 갤러리에서 사용 할 수 있는 슬라이더가 있습니다. 세로 배열 갤러리를 기준으로 작성되어있습니다. 참고 부탁드립니다.</p>
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

<br>

<h3>음악 플레이어</h3>
<hr>
'제목 불러오기' 기능만 추가 된 파일과 '다음곡 이전곡 버튼이 추가된 파일',
<BR>두가지 버전입니다.(폴더명으로 구분해 두었습니다.)
<BR> style css에서 모바일의
<BR>#bgmBtn {display: none;}
<BR>의 none을 flex로 변경하셔야 모바일에서도 플레이어를 사용하실 수 있습니다.
<BR>디자인은 메뉴 바로 위에 존재하며, 모바일에서도 동일합니다. 허나 너무 좁은 화면의 경우 이미지가 안 보이거나 버튼이 겹쳐질 수 있습니다.
<BR>로토리 님께서 배포하신 코드에서 수정해야 할 부분도 있습니다. 해당 부분은 따로 주석을 달아두었으니 참고 바랍니다.
<BR><BR>

<h3>페어 타임라인</h3>
<hr>
나루터가 아니더라도 사용 가능합니다.
<BR>타임라인 전체의 색상과 캐릭터 명의 색상이 연동되어있는 것(전체 색상과 캐릭터명 색상 동일)과 캐릭터 명의 색상을 타임라인 색상과 별도로 지정할 수 있는 것(전체 색상과 캐릭터명 색상 각각 지정 가능) 두가지 버전입니다.
<BR>
편하신 것으로 사용하시면 되십니다.
컴퓨터에서는 타임라인 선은 가운데로 오게, 모바일에서는 왼쪽으로 치우쳐져있는 디자인입니다.
