document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.gallery-img');
    const images = document.querySelectorAll('.gallery-img img');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    // 슬라이더가 필요한지 확인
    if (images.length <= 1) {
      slides.style.display = 'block'; // 슬라이더 컨테이너 보이기
      nextButton.style.display = 'none'; // Next 버튼 숨기기
      prevButton.style.display = 'none'; // Prev 버튼 숨기기
      return; // 슬라이더 기능 중지
    }

    // 슬라이더 기능 활성화
    let index = 0;
    function showSlide(n) {
      // 슬라이드 인덱스 범위 제어
      if (n >= images.length) index = 0;      // 마지막 슬라이드 이후 다시 첫 번째 슬라이드로
      else if (n < 0) index = images.length - 1; // 첫 번째 슬라이드 이전에 마지막 슬라이드로
      else index = n;
      const offset = -index * 100;
    slides.style.transform = `translateX(${offset}%)`;

    }

  nextButton.addEventListener('click', () => showSlide(index + 1));
  prevButton.addEventListener('click', () => showSlide(index - 1));

    // 자동으로 이미지 넘어가게 (마지막에 처음 슬라이드로 돌아감)
  setInterval(() => showSlide(index + 1), 3000);
  });
});
