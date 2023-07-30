import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {workSlider} from './modules/slider.js';
import {workTabs} from './modules/work-tabs.js';
import {workAccordion} from './modules/work-accordion.js';
import {workSliderComments} from './modules/slider-comments.js';
import {subscribe} from './modules/subscription.js';
import {videoWork} from './modules/video.js';
import {changePoster} from './modules/poster-video.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {

    const form = new Form();
    form.init();
    window.form = form;

    subscribe();
    workSlider();
    workTabs();
    workAccordion();
    workSliderComments();
    videoWork();
    changePoster();
  });
});
