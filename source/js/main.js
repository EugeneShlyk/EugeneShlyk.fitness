import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {workSlider} from './modules/slider.js';
import {workTabs} from './modules/work-tabs.js';
import {workAccordion} from './modules/work-accordion.js';
import {workSliderComments} from './modules/slider-comments.js';
import {findVideos} from './modules/video.js';
import {subscribe} from './modules/subscription.js';
// import {Validator} from './modules/form-validate/validator.js';


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
    initModals();

    const form = new Form();
    form.init();
    window.form = form;

    // window.form.reset(form);
    // window.form.initPhoneInput(parent);
    // window.form.validateForm(form);
    // window.form.validateFormElement(item, true);

    // const validator = new Validator();
    // window.validator = validator;
    subscribe();
    workSlider();
    workTabs();
    workAccordion();
    workSliderComments();
    findVideos();

  });
});


// const form = document.getElementById('form');
// form.addEventListener('submit', formSend);
//
// async function formSend(e) {
//   e.preventDefault();
//
//   let error = formValidate(form);
//
//   const formValidate = (form) => {
//     let error = 0;
//     let required = document.querySelector('.required');
//   };
//
// }

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
