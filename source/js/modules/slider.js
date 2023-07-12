const swiperContainer = document.querySelector('.swiper-container');
const sliderInner = document.querySelector('.slider__inner');

export const workSlider = () => {
  if (swiperContainer) {
    new Swiper('.slider-wrapper', {
      navigation: {
        nextEl: '.slider__button-next',
        prevEl: '.slider__button-prev',
      },
      slidesPerView: 4,
      spaceBetween: 40,
      loop: true,
    });
  }
  // if (sliderInner.style.width === '768px') {
  //   Swiper('.slider-wrapper', {
  //     slidesPerView: 2,
  //     spaceBetween: 40,
  //     loop: true,
  //   });
  // }
};


