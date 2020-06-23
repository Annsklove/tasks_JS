'use strict';

/* в стиле es5 */

/**
 *
 *  Функция конструктор, которая принимает параметры и сохраняет их как свойства объекта
 * @param {string} name параметр name - сохранится как свойство объекта
 * @param {number} price параметр price - сохранится как свойство объекта
 */
function Product(name, price) {
    this.name = name;
    this.price = price;
}

/**
 *
 * метод, который уменьшает цену в объекте на 25%
 */
Product.prototype.make25PercentDiscount = function () {
    this.price = this.price - (this.price * 25 / 100);
};
/* используем свойство prototype,
т.е. храним функцию не в самом объекта, а в прототипе,
чтобы память под функцию выделялась 1 раз
Таким образом, метод make25PercentDiscount - уже будет в прототипе объекта */

//имеющийся список товаров (в массиве)
const products = [
    new Product('товар1', 300),
    new Product('товар2', 500),
    new Product('товар3', 200)
];

/*проходимся по всем товарам (с помощью цикла)
и вызываем метод для создания скидки для каждого продукта */
for (let product of products) {
    product.make25PercentDiscount();
}

//выводим в консоль модифицированные (со скидкой в 25%) товары
console.log(products);