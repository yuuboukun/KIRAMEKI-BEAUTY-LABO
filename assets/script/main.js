// カルーセル
const swiper = new Swiper('.swiper', {
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  initialSlide: 1,
});

