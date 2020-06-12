'use strict';

let x = parseInt(prompt("введите первое целое число")),
    y = parseInt(prompt("введите второе целое число"));

/**
 *
 * Функция выполняет сложение 2х чисел
 * @param {number} a первое число
 * @param {number} b второе число
 * @returns {string} сообщение о результате сложения
 */
function add(a, b) {
    let result = a + b;
    return alert(`Результат сложения: ${result}`);
}

/**
 *
 * Функция выполняет вычитание 2х чисел
 * @param {number} a первое число
 * @param {number} b второе число
 * @returns {string} сообщение о результате вычитания
 */
function sub(a, b) {
    let result = a - b;
    return alert(`Результат вычитания: ${result}`);
}

/**
 *
 * Функция выполняет деление 2х чисел
 * @param {number} a первое число
 * @param {number} b второе число
 * @returns {string} сообщение о результате деления
 */
function division(a, b) {
    let result = a / b;
    return alert(`Результат вычитания: ${деления}`);
}

/**
 *
 * Функция выполняет умножение 2х чисел
 * @param {number} a первое число
 * @param {number} b второе число
 * @returns {string} сообщение о результате умножения
 */
function mult(a, b) {
    let result = a * b;
    return alert(`Результат вычитания: ${умножения}`);
}

add(x, y);
// sub(x, y);
// division(x, y);
// mult(x, y);
