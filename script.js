let popupBg = document.querySelector('.popup__bg') //фон
let popup = document.querySelector('.popup') //окно
let openPopupButtons = document.querySelectorAll('.open-popup') //кнопка показать
let closePopupButton = document.querySelector('.close-popup') //кнопка закрыть

openPopupButtons.forEach((button) => { //перебираем кнопки
    button.addEventListener('click', (e) => { //на каждую кнопку вешаем обработчик события клик
        e.preventDefault(); //отключаем дефолтное действие браузера
        popupBg.classList.add('active'); //добавляем класс active для фона
        popup.classList.add('active'); //добавляем класс active для окна
    }) 
});

closePopupButton.addEventListener('click', () => { //обработчик события на крестик
    popupBg.classList.remove('active'); //убираем класс active с фона
    popup.classList.remove('active'); //убираем класс active для окна
});

document.addEventListener('click', (e) => { //вешаем обработчик на весь документ
    if(e.target === popupBg) { //если место клика фон, то:
        popupBg.classList.remove('active'); //убираем класс active с фона   
        popup.classList.remove('active'); //и с окна
    }
});

