const videoWrapper = document.querySelector('.gym__inner-video-wrapper');

function findVideos() {
  if (videoWrapper) {
    let videos = document.querySelectorAll('.gym__inner-video-wrapper');

    for (let i = 0; i < videos.length; i++) {
      setupVideo(videos[i]);
    }
  }
}

function setupVideo(video) {
  let link = video.querySelector('.gym__video-link');
  let button = video.querySelector('.gym__inner-video-button');

  video.addEventListener('click', () => {
    let iframe = createIframe();

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('gym__inner-video-wrapper--enabled');
}

function createIframe() {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw');
  iframe.classList.add('gym__video-image');

  return iframe;
}

export {findVideos};
