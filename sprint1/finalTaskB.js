/**
 ЛОВКОСТЬ РУК
 Гоша и Тимофей нашли необычный тренажёр для скоростной печати и хотят освоить его.
 Тренажёр представляет собой поле из клавиш 4× 4, в котором на каждом раунде появляется конфигурация цифр и точек.
 На клавише написана либо точка, либо цифра от 1 до 9.
 В момент времени t игрок должен одновременно нажать на все клавиши, на которых написана цифра t.
 Гоша и Тимофей могут нажать в один момент времени на k клавиш каждый.
 Если в момент времени t были нажаты все нужные клавиши, то игроки получают 1 балл.

 Найдите число баллов, которое смогут заработать Гоша и Тимофей, если будут нажимать на клавиши вдвоём.
 Формат ввода
 В первой строке дано целое число k (1 ≤ k ≤ 5).

 В четырёх следующих строках задан вид тренажёра –— по 4 символа в каждой строке.
 Каждый символ —– либо точка, либо цифра от 1 до 9.
 Символы одной строки идут подряд и не разделены пробелами.

 Формат вывода
 Выведите единственное число –— максимальное количество баллов, которое смогут набрать Гоша и Тимофей.

 Example:
 Ввод:
 3
 1231
 2..2
 2..2
 2..2

 Вывод:
 2

 Сложность алгоритма: O(n)
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ''
});

const result = [];

rl.prompt();

rl.on('line', (line) => {
    result.push(line);
})

rl.on('close', () => {
    console.log(sprint1_taskB(result));
})

function sprint1_taskB(elements) {
    let k = +elements[0] * 2 //общее количество допустимых нажатий
    const matrix = elements.slice(1);
    const matrixElements = matrix.flatMap(element => element.split(''));
    let collectionCounter = {};
    let result = 0;

    matrixElements.forEach(element => {
        collectionCounter[element] = (collectionCounter[element] || 0) + 1;
    });

    Object.entries(collectionCounter).forEach(([key, value]) => {
        // проверяем, что key не символ (т.к. key должен совпадать с t) и не 0 (т.к. символ принадлежит [1; 9]
        if (key >= '1' && value <= k) {
            ++result;
        }
    })


    return result;
}


