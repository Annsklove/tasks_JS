'use strict';

let x = parseInt(prompt("введите первое целое число")),
    y = parseInt(prompt("введите второе целое число")),
    oper = prompt("введите одну из операций: +,-,/ или *");

/**
 *
 * Функция выполняет сложение 2х чисел
 * @param {number} a первое число
 * @param {number} b второе число
 * @returns {number} результат сложения
 */
function add(a, b) {
    return a + b;
}

/**
 *
 * Функция выполняет вычитание 2х чисел
 * @param {number} a первое число
 * @param {number} b второе число
 * @returns {number} результат вычитания
 */
function sub(a, b) {
    return a - b;
}

/**
 *
 * Функция выполняет деление 2х чисел
 * @param {number} a первое число
 * @param {number} b второе число
 * @returns {number} результат деления
 */
function division(a, b) {
    return a / b;
}

/**
 *
 * Функция выполняет умножение 2х чисел
 * @param {number} a первое число
 * @param {number} b второе число
 * @returns {number} результат умножения
 */
function mult(a, b) {
    return a * b;
}

/**
 *
 * Функция выполняет одну из 4х арифметических операций
 * @param {number} arg1 значение первого аргумента
 * @param {number} arg2 значение второго аргумента
 * @param {string} operation строка с названием операции
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return add(arg1, arg2);
        case "-":
            return sub(arg1, arg2);
        case "/":
            return division(arg1, arg2);
        case "*":
            return mult(arg1, arg2);
        default:
            alert(`Неизвестная операция ${operation}`);
    }
}

console.log(mathOperation(x, y, oper));