'use strict';

// создаем массив объектов

let positions = [
    //названия и координаты белых фигур, кроме пешек
    {
        coordCol: 'a', // координаты фигуры (строка)
        coordRow: 1, // координаты фигуры (колонка)
        figure: 'rook', // название фигуры (ладья)
        color: 'white' // цвет фигуры
    },
    {
        coordCol: 'b',
        coordRow: 1,
        figure: 'knight', // название фигуры (конь)
        color: 'white'
    },
    {
        coordCol: 'c',
        coordRow: 1,
        figure: 'bishop', // название фигуры (слон)
        color: 'white'
    },
    {
        coordCol: 'd',
        coordRow: 1,
        figure: 'queen', // название фигуры (королева)
        color: 'white'
    },
    {
        coordCol: 'e',
        coordRow: 1,
        figure: 'king',  // название фигуры (король)
        color: 'white'
    },
    {
        coordCol: 'f',
        coordRow: 1,
        figure: 'bishop',
        color: 'white'
    },
    {
        coordCol: 'g',
        coordRow: 1,
        figure: 'knight',
        color: 'white'
    },
    {
        coordCol: 'h',
        coordRow: 1,
        figure: 'rook',
        color: 'white'
    },




    //названия и координаты черных фигур, кроме пешек
    //аналогично белмы фигурам, меняем только цвет
    {
        coordCol: 'a',
        coordRow: 8,
        figure: 'rook',
        color: 'black'
    },
    {
        coordCol: 'b',
        coordRow: 8,
        figure: 'knight',
        color: 'black'
    },
    {
        coordCol: 'c',
        coordRow: 8,
        figure: 'bishop',
        color: 'black'
    },
    {
        coordCol: 'd',
        coordRow: 8,
        figure: 'queen',
        color: 'black'
    },
    {
        coordCol: 'e',
        coordRow: 8,
        figure: 'king',
        color: 'black'
    },
    {
        coordCol: 'f',
        coordRow: 8,
        figure: 'bishop',
        color: 'black'
    },
    {
        coordCol: 'g',
        coordRow: 8,
        figure: 'knight',
        color: 'black'
    },
    {
        coordCol: 'h',
        coordRow: 8,
        figure: 'rook',
        color: 'black'
    },
];