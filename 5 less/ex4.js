'use strict';

/* получаем все элементы (кнопки) */
const buttons = document.querySelectorAll('.btn-product');

/* на каждый элемент (кнопку) нужно назначить событие,
для этого используем цикл forEach -
перебираем все элементы и назначаем им событие*/

buttons.forEach(function (button) {
    //на каждую кнопку назначаем событие "клик"
    button.addEventListener('click', function (event) {
        //событие клик будет вызывать функцию handleClick
        handleClick(event);
    })
});

//описание самой функции handleClick

/**
 * функция, которая вызывается по клику на кнопке
 * данная функция вызывает другие функции (showMoreText и hedeMoreText),
 * который показывают или скрывают картинку или текст
 *
 * @param {MouseEvent} clickButtonEvent
 */
function handleClick(clickedButtonEvent) {
    //получаем объект (элемент) карточки
    const cardNode = clickedButtonEvent.target.parentNode;
    const card = {
        wrap: cardNode,
        img: cardNode.querySelector('img'), //элемент картинки
        productName: cardNode.querySelector('.name-product'), //имя товара
        button: cardNode.querySelector('.btn-product'), //кнопка у товара
    };

    /* Меняем текст на кнопке
    (в зависимости от того, что на ней написано в момент нажатия) */
    const textOnButton = card.button.innerText;
    /* если на кнопке отображается "Подробнее" - мы показываем текст
    (вызываем функцию showMoreText) */
    if (textOnButton === 'ПОДРОБНЕЕ') {
        showMoreText(card);
    /* если на кнопке отображается "Отмена" - мы скрываем текст
    (вызываем функцию hedeMoreText) */
    } else if (textOnButton === 'ОТМЕНА') {
        hedeMoreText(card);
    }
}

//описание функций showMoreText и hedeMoreText

/**
 * функция скрывает текст (описание товара)
 *
 * @param {Object} card
 * @param {HTMLDiv Element} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button
 */
function hedeMoreText(card) {
    /* берем картинку - берем у неё стиль display
    и присваиваем ему значение inline-flex (отображаем картинку) */
    card.img.style.display = 'inline-flex';
    /* берем div с классрм .text-product (который создала функция showMoreText)
    и удаляем его */
    card.wrap.querySelector('.text-product').remove();
    // меняем текст на кнопке
    card.button.innerText = 'Подробнее';
}

/**
 * функция отображает текст (описание товара)
 *
 * @param {Object} card
 * @param {HTMLDiv Element} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button
 */
function showMoreText(card) {
    /* берем картинку - берем у неё стиль display
    и присваиваем ему значение none (скрываем картинку) */
    card.img.style.display = 'none';
    /* берем текст (описание товара) и будем е5го вставлять в нашу разметку */
    const text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet. ';
    // текст вставляем ПОСЛЕ закрывающегося тега productName (.name-product)
    card.productName.insertAdjacentHTML('afterend', `<div class="text-product">${text}</div>`)
    // меняем текст на кнопке
    card.button.innerText = 'Отмена';
}

