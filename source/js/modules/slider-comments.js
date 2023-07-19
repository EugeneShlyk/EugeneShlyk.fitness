const sliderBox = document.querySelector('.comments__inner');


export const workSliderComments = () => {
  if (sliderBox) {
    new Swiper('.swiper2', {
      navigation: {
        nextEl: '.comments__button--next',
        prevEl: '.comments__button--prev',
      },
      slidesPerView: 1,
    });
  }
};
