'use strict';

// создаем приложение (создание шах. доски)
let app = {
    config: {
        //нумерация для строк шах. доски
        rows: [8, 7, 6, 5, 4, 3, 2, 1],
        // названия для колонок шахю доски
        cols: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    },

    //метод для создания шах.доски
    run() {
        //создаем саму шах.доску (игровое поле)
        let board = this.generateBoard();

        //добавляем доску в тег с классом wrapper
        document.body.innerHTML = board;

        // добавляем на игровое поле все фигуры кроме пешек
        this.insertFiguresOnDesk();
        // добавляем на игровое поле добавляем пешки
        this.insertPawns();

        //метод, который добавляет колонку с номерами строк (от 8 до 1)
        this.insertRowsNumbers();
        //метод, который добавляет строку с названиями колонок (от a до h)
        this.insertColsChars();
    },

    //описание метода  generateBoard

    /**
     * Метод создает игровое поле (8х8)
     * @returns {string} html разметка в виде строки
     */
    generateBoard() {
        let board = '';
        // с какого цвета будет начинаться строка
        let rowStartWithColor = 'white'; // строка начинается с белого цвета
        //цикл для "отрисовки" всех строк (т.е. 8 строк, т.к. длина rows = 8)
        for (let i = 0; i < this.config.rows.length; i++) {
            let row = '';
            //проверяем, если строка начинается с белого цвета
            if (rowStartWithColor == 'white') {
                // генерируем строку
                row = this.generateRow(rowStartWithColor, this.config.rows[i]);
                // меняем цвет начала строки с белого - на черный
                rowStartWithColor = 'black';
            // иначе (если строка начинается с черного цвета)
            } else {
                // генерируем строку
                row = this.generateRow(rowStartWithColor, this.config.rows[i]);
                // меняем цвет начала строки с черного - на белый
                rowStartWithColor = 'white';
            }

            //дописывае к игровому полю - сгенерированную строчку
            board += row;
        }
        /* возвращаем html разметку в виде строки */
        return `<table>${board}</table>`;
    },

    /**
     * Метод создает строку шах.доски - в виде тега tr
     * и черные или белые теги td - это ячейки шах.доски
     *
     * @param {string} rowStartWithColor это цвет, с которого строка будет начинаться
     * принимает 2 значения - "white" и "black"
     * @param {number} rowNum номер строки от 8 до 1
     * @returns {string} html разметка, тег tr и теги td
     */
    generateRow(startWithColor, rowNum) {
        //цвет, с которого начинаем
        let currentColorClass = startWithColor;
        // строка, где будем создавать теги td
        let row = "";
        // используем цикл для создания ячеек
        for (let i = 0; i < this.config.cols.length; i++) {
            let field = "";
            // если цвет начала строки у нас белый, то генерируем ячейки
            if (currentColorClass === 'white') {
                // ячейке передаем цвет, номер строки и номер колонки
                field = this.generateField('white', rowNum, this.config.cols[i]);
                // меняем цвет (название класса)
                currentColorClass = 'blackField';
            /* если строка начинается не с белого (а с черного) цвета,
            также генерируем ячейку, но черного цвета */
            } else {
                field = this.generateField('black', rowNum, this.config.cols[i]);
                // меняем цвет (название класса)
                currentColorClass = 'white';
            }
            //приписываем ячейку в строку
            row += field;
        }
        //возвращаем html-разметку в виде строки
        return `<tr>${row}</tr>`;
    },


    /**
     * Метод, который генерирует ячейку (тег td) с указанным классом (для цвета)
     * и имеет координаты на поле
     *
     * @param {string} color класс для цвета ячейки (белый "white" или черный "black")
     * @param {number} rowNum rowNum номер строки игровой досик
     * @param {string} colChar colChar буква колонки игровой доски
     * @returns {string} html-разметка с заполненными атрибутами координат и классом цвета
     */
    generateField(color, rowNum, colChar) {
        return `<td data-rownum="${rowNum}" data-colchar="${colChar}" class="${color}"></td>`;
    },

    /**
     * метод, который вставляет на игровую доску - колонку слева,
     * где указаны номера строк (от 8 до 1)
     *
     */
    insertRowsNumbers() {
        // берем все теги tr
        let trs = document.querySelectorAll('tr');
        // нужно добавить в начало каждого тега tr еще один тег td
        for (let i = 0; i < trs.length; i++) {
            // создаем сам тег td
            let td = document.createElement('td');
            // берем значения строк (от 8 до 1) и вставляем эти значения
            td.innerText = this.config.rows[i];
            //находим нужный тег tr и после открытого тега tr вставляем тег td
            trs[i].insertAdjacentElement("afterbegin", td);
        }
    },

    /**
     * метод, который вставляет на игровую доску - строку снизу (tr),
     * где указаны значения колоенок (от a до h)
     *
     */
    insertColsChars() {
        // создаем тег tr
        let tr = document.createElement('tr');
        //создаем пустую ячейку, которая расположена по цифрами (а не под игровым полем)
        tr.innerHTML += '<td></td>';
        // запускаем цикл (перебираем колонку)
        for (let i = 0; i < this.config.cols.length; i++) {
            //создаем тег td и записываем в него значение буквы колокнки (от a до h)
            tr.innerHTML += `<td>${this.config.cols[i]}</td>`;
        }
        let tbody = document.querySelector('tbody');
        tbody.insertAdjacentElement("beforeend", tr);
    },

    /**
     * Метод добавляет на доску все фигуры, кроме пешок
     *
     */
    insertFiguresOnDesk() {
        for (let i = 0; i < positions.length; i++) {
            /* получаем нужную ячейку (по его data- атрибутам,
                то есть по координатам coordCol и coordRow) */
            let cell = document.querySelector(`[data-rownum="${positions[i].coordRow}"][data-colchar="${positions[i].coordCol}"]`);
            /* получаем саму фигуру (по свойству figure определяем название),
            а так же получаем цвет фигуры (по свойсту color) */
            let figure = this.getFigure(positions[i].figure, positions[i].color+"Figure");
            cell.innerHTML = figure;
        }
    },

    /**
     * Метод генерирует тег i в виде строки, с подставленным именем фигуры и
     * классы для цветом фигуры
     *
     * @param {string} name название фигуры - rook, knight, bishop, queen или king
     * @param {string} colorClass цвет фигуры - whiteFigure или blackFigure
     * @returns {string} html - разметка
     */
    getFigure(name, colorClass) {
        // возвращаем html разметку (в виде строки)
        return `<i class="fas fa-chess-${name} ${colorClass}"></i>`;
    },

    /**
     * Метод, который вставляем пешки на игровую доску
     *
     */
    insertPawns() {
        // получаем все теги td 2ой (снизу) строчки
        let whitePawnsRow = document.querySelectorAll('tr:nth-child(7) td');
        // проходимся по строчке
        for (let i = 0; i < whitePawnsRow.length; i++) {
            // вставляем в каждую ячейку - пешку белого цвета
            whitePawnsRow[i].innerHTML = this.getFigure('pawn', 'whiteFigure');
        }

        // получаем все теги td 7ой (снизу) строчки
        let blackPawnsRow = document.querySelectorAll('tr:nth-child(2) td');
        for (let i = 0; i < blackPawnsRow.length; i++) {
            // вставляем в каждую ячейку - пешку черного цвета
            blackPawnsRow[i].innerHTML = this.getFigure('pawn', 'blackFigure');
        }
    }
};

/* запуск создания шах. доски,
сразу как страница будет открыта */
app.run();
