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


// Mobile Nav

const mobileNavOpenBtn = document.querySelector('#open-mobile-nav-btn');
const mobileNavCloseBtn = document.querySelector('#close-mobile-nav-btn');
const mobileNav = document.querySelector('#mobile-nav');

mobileNavOpenBtn.onclick = function (){
  mobileNav.classList.add('mobile-nav-wrapper--open');
}

mobileNavCloseBtn.onclick = function () {
  mobileNav.classList.remove('mobile-nav-wrapper--open');
};