/**
БОЛЬШОЕ ЧИСЛО
 Вечером ребята решили поиграть в игру «Большое число».
 Даны числа. Нужно определить, какое самое большое число можно из них составить.

 Формат ввода
 В первой строке записано n — количество чисел. Оно не превосходит 100.
 Во второй строке через пробел записаны n неотрицательных чисел, каждое из которых не превосходит 1000.

 Формат вывода
 Нужно вывести самое большое число, которое можно составить из данных чисел.

 Example:
 Ввод:
 3
 15 56 2

 Вывод:
 56215
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
    console.log(getBigNumber(result));
})

function getBigNumber(elements) {
    const numbersLength = +elements[0];
    const numbers = elements[1].split(' ');


    for (let i = 0; i < numbersLength; i++) {
        let itemToInsert = numbers[i];
        let j = i;
        while (j > 0 && comparator(itemToInsert, numbers[j - 1])) {
            numbers[j] = numbers[j - 1];
            j--;
        }

        numbers[j] = itemToInsert;
    }

    return numbers.join('');
}

function comparator(current, prev) {
    const currLength = current.length;
    const prevLength = prev.length;

    const length = currLength === prevLength ? currLength : currLength + prevLength;
    for (let i = 0; i < length; i++) {
        const currTmp = i < currLength ? current[i] : prev[i - currLength];
        const prevTmp = i < prevLength ? prev[i] : current[i - prevLength];
        if (currTmp !== prevTmp) {
            return currTmp > prevTmp;
        }
    }
    return 0;
}

