const video = document.querySelector('.gym__video');

export const changePoster = () => {
  if (window.matchMedia('(min-width: 1200px)').matches) {
    video.poster = 'img/gym-image/gym-video.jpg';
  } if (window.matchMedia('(max-width: 1199px)').matches) {
    video.poster = 'img/gym-image/gym-video-tablet.jpg';
  } if (window.matchMedia('(max-width: 767px)').matches) {
    video.poster = 'img/gym-image/gym-video-mobile.jpg';
  }
};
