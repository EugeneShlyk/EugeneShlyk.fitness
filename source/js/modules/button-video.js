const video = document.querySelector('.gym__inner-video');
const videoButton = document.querySelector('.gym__inner-video-button');

// export const videoOnclick = () => {
//   if (videoButton.style.display:'block') {
//     videoButton.style.display = 'none';
//   } if (videoButton.style.display == 'none')
//   {videoButton.style.display = 'block';}
// };

export const videoOnclick = () => {
  if (videoButton.classList.contains('gym__inner-video-button--hidden')) {
    videoButton.classList.remove('gym__inner-video-button--hidden');
  } else {
    videoButton.classList.add('gym__inner-video-button--hidden');
  }
};

const foo = () => video.addEventListener('click', videoOnclick);

export {foo};
