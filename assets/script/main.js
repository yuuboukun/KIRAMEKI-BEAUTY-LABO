var swiper = new Swiper('.swiper', {
  slidesPerView: 1,  // 表示するスライド数
  spaceBetween: 15,  // スライド間のスペース
  loop: true,        // ループ設定
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
