// получаем все кнопки навигации
const tabsButtons = document.querySelectorAll('.faq-category__item-button');


export const workTabs = () => {
  // Проходимся по всем кнопкам
  tabsButtons.forEach((btn) => {
    // вешаем на каждую кнопку обработчик события клик
    btn.addEventListener('click', () => {
      // Получаем предыдущую активную кнопку
      const prevActiveButton = document.querySelector('.faq-category__item-button--active');
      // Получаем предыдущую активную вкладку
      const prevActiveItem = document.querySelector('.accordion--active');

      // Проверяем есть или нет предыдущая активная кнопка
      if (prevActiveButton) {
        // Удаляем класс _active у предыдущей кнопки если она есть
        prevActiveButton.classList.remove('faq-category__item-button--active');
      }

      // Проверяем есть или нет предыдущая активная вкладка
      if (prevActiveItem) {
        // Удаляем класс _active у предыдущей вкладки если она есть
        prevActiveItem.classList.remove('accordion--active');
      }
      // получаем id новой активной вкладки, который мы берем из атрибута data-tab у кнопки
      const nextActiveItemId = `#${btn.getAttribute('data-tab')}`;
      // получаем новую активную вкладку по id
      const nextActiveItem = document.querySelector(nextActiveItemId);

      // добавляем класс _active кнопке на которую нажали
      btn.classList.add('faq-category__item-button--active');
      // добавляем класс _active новой выбранной вкладке
      nextActiveItem.classList.add('accordion--active');
    });
  });
};

