const video = document.querySelector('.gym__video');

export const changePoster = () => {
  console.log(window.innerWidth);
  if (window.innerWidth < '1200px' && window.innerWidth > '767px') {
    video.setAttribute('poster', 'img/gym-image/gym-video-tablet.jpg');
  }
};
// video.poster = 'gym-video-tablet.jpg';
