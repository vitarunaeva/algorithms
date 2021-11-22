/**
 РАБОТА ИЗ ДОМА
 Вася реализовал функцию, которая переводит целое число из десятичной системы в двоичную.
 Но, кажется, она получилась не очень оптимальной.

 Попробуйте написать более эффективную программу.
 Не используйте встроенные средства языка по переводу чисел в бинарное представление.

 Формат ввода
 На вход подаётся целое число в диапазоне от 0 до 10000.

 Формат вывода
 Выведите двоичное представление этого числа.

 Example:
 Ввод:
 5

 Вывод:
 101
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
    console.log(createBinaryNumber(result));
})

function createBinaryNumber(elements) {
    let number = +elements[0];
    let result = [];

    while(number >= 1) {
        result.push(Math.floor(number % 2));
        number = number / 2;
    }

    return result.reverse().join('');
}
