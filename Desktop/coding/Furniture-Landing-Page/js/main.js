const swiper = new Swiper('.swiper', {

    loop: true,
    freeMode: true,

    slidesPerView: 4,
    spaceBetween: 42,

    navigation: {
      nextEl: '#sliderNext',
      prevEl: '#sliderPrev',
    },
  });