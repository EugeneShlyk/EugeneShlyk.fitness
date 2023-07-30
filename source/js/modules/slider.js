const sliderWrapper = document.querySelector('.slider-wrapper');

const Swiper = window.Swiper;

export const workSlider = () =>
  sliderWrapper &&
  new Swiper('.swiper1', {
    navigation: {
      nextEl: '.slider__button--next',
      prevEl: '.slider__button--prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 5,
      },
      1360: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
    loop: true,
  });
