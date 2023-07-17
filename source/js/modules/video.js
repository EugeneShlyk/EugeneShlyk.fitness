function findVideos() {
  let videos = document.querySelectorAll('.gym__inner-video-wrapper');

  for (let i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  let link = video.querySelector('.gym__video-link');
  let media = video.querySelector('.gym__video-image');
  let button = video.querySelector('.gym__inner-video-button');
  let id = parseMediaURL(media);

  video.addEventListener('click', () => {
    let iframe = createIframe(id);

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('gym__inner-video-wrapper--enabled');
}

function parseMediaURL(media) {
  let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault\.jpg/i;
  let url = media.src;
  let match = url.match(regexp);

  return match[1];
}

function createIframe(id) {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('gym__video-image');

  return iframe;
}

function generateURL(id) {
  let query = '?rel=0&showinfo=0&autoplay=1';

  return 'https://www.youtube.com/embed/' + id + query;
}

export {findVideos};
