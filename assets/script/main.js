// カルーセルの初期化
const swiper = new Swiper('.swiper', {
  grabCursor: true,
  slidesPerView: 1,  // 表示するスライド数
  spaceBetween: 15,  // スライド間のスペース
  loop: true,        // ループ設定
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  initialSlide: 1,   // 最初に表示するスライドを2番目に設定
});

