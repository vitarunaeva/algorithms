/**
 ЗНАЧЕНИЯ ФУНКЦИИ
 Вася делает тест по математике: вычисляет значение функций в различных точках. Стоит отличная погода, и друзья зовут Васю гулять. Но мальчик решил сначала закончить тест и только после этого идти к друзьям. К сожалению, Вася пока не умеет программировать. Зато вы умеете. Помогите Васе написать код функции, вычисляющей y = ax2 + bx + c. Напишите программу, которая будет по коэффициентам a, b, c и числу x выводить значение функции в точке x.

 Формат ввода
 На вход через пробел подаются числа a, x, b, c. В конце ввода находится перенос строки.

 Формат вывода
 Выведите одно число — значение функции в точке x.

 Example:
 Ввод: -8 -5 -2 7
 Вывод: -183
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
    console.log(quadraticEquation(result));
})

function quadraticEquation(elements) {
    const str = elements[0].split(' ').map((el) => +el);
    const a = str[0];
    const x = str[1];
    const b = str[2];
    const c = str[3];

    return a * x * x + b * x + c;
}
