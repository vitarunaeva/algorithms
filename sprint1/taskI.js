/**
 СТЕПЕНЬ ЧЕТЫРЕХ
 Вася на уроке математики изучил степени. Теперь он хочет написать программу, которая определяет,
 будет ли положительное целое число степенью четвёрки.

 Подсказка: степенью четвёрки будут все числа вида 4n, где n – целое неотрицательное число.

 Формат ввода
 На вход подаётся целое число в диапазоне от 1 до 10000.

 Формат вывода
 Выведите «True», если число является степенью четырёх, «False» –— в обратном случае.

 Example:
 Ввод:
 15

 Вывод:
 False
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
    console.log(checkDegreeNumber(result));
})

function checkDegreeNumber(elements) {
    let number = +elements[0];
    const degree = 4;

    if (number === 0) {
        return 'False';
    }

    while(number % degree === 0) {
        number = number / degree;
    }

    return number === 1 ? 'True' : 'False';
}
