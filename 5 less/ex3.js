'use strict';

// ВЫЗОВ МОДАЛЬНОГО ОКНА
// 1 - получаем элементы, с которыми будем работать

//кнопка вызывающая мод.окно
const btnModal = document.querySelector('.btn-modal');
//само модальное окно
const modal = document.querySelector('.modal-window');
//иконка "крестик", закрывающая модальное окно
const closeModal = document.querySelector('.modal-close');

// 2 - создаем события и их обработку

/* вешаем событие "клик" на кнопку btnModal, которое будет вызывать функцию, которая удаляет класс "hidden"
у модального окна */
btnModal.addEventListener('click', function(){
    /* удаляем класс hidden (которые скрывал модалку),
    а так же удялаем класс "animate__fadeOutUp" у модалки
    (так как он уже мог добавится, когда сработало событие на элементе "closeModal") */
    modal.classList.remove('animate__fadeOutUp' , 'hidden');
    //  добавляем 2 класса для анимации (используем библиотеку animate css)
    modal.classList.add('animate__animated', 'animate__fadeInDown');
});

/* вешаем событие "клик" на иконку closeModal, которое будет вызывать функцию, которая добавляет класс "hidden"
у модального окна */
closeModal.addEventListener('click', function(){
    /* удаляем класс animate__fadeInDown (которые отвечает за анимацию появления окна) */
    modal.classList.remove('animate__fadeInDown');
    /* помимо класса 'hidden', добавялем класс "animate__fadeOutUp", которое отвечает за исчезновение модального окна  */
    modal.classList.add('animate__fadeOutUp');
    /* устанавливаем задержку в 1секунду, чтобы сначала "сработала" анимация и только потом добавился класс hidden (который скроет модалку) */
    setTimeout(function(){
        modal.classList.add('hidden');
    }, 1000);
});