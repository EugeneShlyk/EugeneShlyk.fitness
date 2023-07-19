const sliderBox = document.querySelector('.comments__inner');

const Swiper = window.Swiper;

export const workSliderComments = () =>
  sliderBox &&
  new Swiper('.swiper2', {
    navigation: {
      nextEl: '.comments__button--next',
      prevEl: '.comments__button--prev',
    },
    slidesPerView: 1,
  });
