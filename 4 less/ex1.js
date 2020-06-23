'use strict';

/**
 *
 * функция, преобразующая число в объект: разбивает число на разряды и возвращает объект
 * @param {int} num число в диапазоне [0, 999]
 * @returns {object} объект, в котором в свойствах описаны разряды числа: единицы, десятки, сотни
 */
function getDigits(num) {
    /* проверяем, является ли число целым
    если число НЕ целое И есил число меньше 0 И если число больше 999,
    будем выводить сообщение в логах об ошибке ввода числа */
    if (!Number.isInteger(num) || num < 0 || num > 999) {
        //Number.isInteger(value) – функция проверяет, является ли переданное число целым
        console.log('Число должно быть целым и в диапазоне от 0 до 999 включая');
        return {}; // возвражаем пустой объект
    }

    //если число введино верно, то есть прошли условие, переходим дальше

    //будем разбивать число на разряды.
    return {
        /* чтобы получить единицы - нужно взять остаток от деления на 10 */
        units: num % 10,

        /* чтобы получить десятки - нужно число разделить на 10, откинуть дробную часть,
        затем - получить остаток от деления на 10 */
        tens: Math.floor(num / 10) % 10,
        /* Math.floor(value) - метод возвращает целое число, которое меньше или равно данному числу (проще
            говоря округляет в меньшую сторону) */

        /* чтобы получить сотни - нужно поделить число на 100 и "откинуть" дробную часть */
        hundreds: Math.floor(num / 100),
    }
}

//вызываем функци и передаем ей число
console.log(getDigits(713));

//если передаем "неправильное" число
//console.log(getDigits(1023));
//console.log(getDigits(13.23));