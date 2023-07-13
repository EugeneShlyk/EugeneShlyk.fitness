const swiperContainer = document.querySelector('.swiper-container');
const sliderInner = document.querySelector('.slider__inner');

export const workSlider = () => {
  if (swiperContainer) {
    new Swiper('.slider-wrapper', {
      navigation: {
        nextEl: '.slider__button-next',
        prevEl: '.slider__button-prev',
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
  }
};


