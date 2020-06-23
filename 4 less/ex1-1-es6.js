'use strict';

/* в стиле es6 */

class Product {

    /* создаем конструктор,
    передаем 2 параметра, которые сохранятся как свойства объекта */
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    /* создаем метод, который уменьшает цену в объекте на 25% */
    make25PercentDiscount() {
        this.price = this.price - (this.price * 25 / 100);
    }
    // метод так же находится в ПРОТОТИПЕ объекта, а не в конструкторе
}

// создаем объект на основе конструктора
const product1 = new Product('apple', 200);
// и вызываем метод для создания скидки
product1.make25PercentDiscount();

//выводим в консоль
console.log(product1);


// или массив объектов:
const products = [
    new Product('товар1', 300),
    new Product('товар2', 500),
    new Product('товар3', 200)
];
// и вызываем метод для создания скидки для каждого товара
for (let product of products) {
    product.make25PercentDiscount();
}

console.log(products);