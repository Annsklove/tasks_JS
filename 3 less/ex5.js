'use strict';

// задаем константу: массив объектов, состоящий из 4х элементов
const products = [
    {
        id: 3, // 0ой элемент -> свойство объекта "products" с ключем "id"
        price: 127, // 0ой элемент -> свойство объекта "products" с ключем "price"
        photos: [ // 0ой элемент -> свойство объекта "photos", который является массивом из 2х элементов
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5, // 1ый элемент -> свойство объекта "products" с ключем "id"
        price: 26, // 1ый элемент -> свойство объекта "products" с ключем "price"
        photos: [ // 1ый элемент -> свойство объекта "photos", который является массивом из 1ого элементов
            "3.jpg"
        ]
    },
    {
        id: 10, // 2ой элемент -> свойство объекта "products" с ключем "id"
        price: 26, // 2ой элемент -> свойство объекта "products" с ключем "price"
        photos: [ // 2ой элемент -> свойство объекта "photos", который является массивом из 1ого элементов
            "3.jpg"
        ]
    },
    {
        id: 8, // 3ий элемент -> свойство объекта "products" с ключем "id"
        price: 78, // 3ий элемент -> свойство объекта "products" с ключем "price"
    },
];


/* используем метод filter() -
создается новый массив из  массива, с элементами, которые прошли проверку в функции.
Задаем новый массив productsPhoto из массива products
- который будет содержать элементы только с фото.
зхадаем функции и передаем ей параметр item - каждый элемент массива, который будем проверять */
const productsPhotos = products.filter(function(item){
    // проверяем, есть ли свойство с ключем "photos"
    // и одновременно проверяем, не пустой ли массив photos (т.е. длина должна быть больше 0)
    return "photos" in item && item.photos.length > 0;
});

// выводим новый получившийся массив productsPhotos
console.log(productsPhotos);


/* Сортируем товары - от низкой цены - к высокой
используем метод sort() - сортирует элементы массива
(не создает новый массив, а переставляет элементы в существующем)
*/
/* будем создавать новый массив, на основе массива  products, но с отсортированными элементами 
задаем функцию - передаем 2 параметра (так как сравниваем 2 элемента),
сравниваем 2 элемента и проверяем, какой из них больше,
если элемент больше - ставим его вперед, если они равны - не меняем местами
*/
const productsSorted = products.sort(function(item1, item2) {
    return item1.price - item2.price;
})

// выводим новый получившийся массив productsSorted
console.log(productsSorted);