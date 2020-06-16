'use strict';


/* создаем константу "post", которая является объектом
и содержит 3 свойства, ключи которых: autor, postId, comments
в свою очередь, свойство "comments" является массивом объектов */
const post = {
    autor: "John", // свойство объекта "post", ключ: autor
    postId: 23, // свойство объекта "post", ключ: postId
    comments: [ // свойство объекта "post", является массивом из 2х объектов
        {   // 1ый элемент массива
            userId: 10, // свойство объекта "comments", ключ: userId
            username: "Alex", // свойство объекта "comments", ключ: username
            text: "lorem ipsum", // свойство объекта comments, ключ: username
            rating: { // свойство объекта comments, является так же объектом
                likes: 10,  // свойство объекта "rating", ключ: likes
                dislikes: 2 // свойство объекта "rating", ключ: dislikes
            }
        },
        { // 2ой элемент массива
            userId: 5, // свойство объекта "comments", ключ: userId
            username: "jane", // свойство объекта "comments", ключ: username
            text: "lorem ipsum 2", // свойство объекта comments, ключ: username
            reting: { // свойство объекта comments, является так же объектом
                likes: 3, // свойство объекта "rating", ключ: likes
                dislikes: 1 // свойство объекта "rating", ключ: dislikes
            }
        },
    ]
}

// выводим в консоль, указанные значение в задании

// выводим строку (значение) 1ого свойства объекта "post", через ключ "autor"
console.log(post.autor);

/* выводим ('путь к исходному значение'):  объект "post" -> свойство (массив) "comments" -> 0-ой элемент массива
-> свойство (объект) "rating" -> значение свойства "dislikes" */
console.log(post.comments[0].rating.dislikes);

/* выводим ('путь к исходному значение'):  объект "post" -> свойство (массив) "comments" -> 1-ый элемент массива
-> значение свойства "userId" */
console.log(post.comments[1].userId);

/* выводим ('путь к исходному значение'):  объект "post" -> свойство (массив) "comments" -> 1-ый элемент массива
-> значение свойства "text" */
console.log(post.comments[1].text);
