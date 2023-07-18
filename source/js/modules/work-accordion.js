const boxes = Array.from(document.querySelectorAll('.accordion__item')); // считываем все элементы аккордеона в массив
boxes[0].classList.add('accordion__item--active');

export const workAccordion = () => {
  boxes.forEach((box) => {
    // при нажатии на бокс вызываем функцию boxHandler
    box.addEventListener('click', (evt) => {
      evt.preventDefault(); // сбрасываем стандартное поведение
      let currentBox = evt.target.closest('.accordion__item'); // определяем текущий бокс
      let currentContent = currentBox.querySelector('p'); // находим скрытый контент
      currentBox.classList.toggle('accordion__item--active'); // присваиваем ему активный класс
      if (currentBox.classList.contains('accordion__item--active')) {
        // если класс активный ..
        currentContent.style.maxHeight = currentContent.scrollHeight + 'px'; // открываем контент
      } else {
        // в противном случае
        currentContent.style.maxHeight = 0; // скрываем контент
      }
    });
  });
};
