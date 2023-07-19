const sliderWrapper = document.querySelector('.slider-wrapper');

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
      },
      768: {
        slidesPerView: 2,
      },
      1160: {
        slidesPerView: 4,
      },
    },
    spaceBetween: 40,
    loop: true,
  });


