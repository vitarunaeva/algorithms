/**
 КОМБИНАЦИИ
 На клавиатуре старых мобильных телефонов каждой цифре соответствовало несколько букв. Примерно так:

 2:'abc',
 3:'def',
 4:'ghi',
 5:'jkl',
 6:'mno',
 7:'pqrs',
 8:'tuv',
 9:'wxyz'

 Вам известно в каком порядке были нажаты кнопки телефона, без учета повторов.
 Напечатайте все комбинации букв, которые можно набрать такой последовательностью нажатий.

 Формат ввода
 На вход подается строка, состоящая из цифр 2-9 включительно.
 Длина строки не превосходит 10 символов.

 Формат вывода
 Выведите все возможные комбинации букв через пробел.

 Example:
 Ввод:
 23

 Вывод:
 ad ae af bd be bf cd ce cf
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
    console.log(generationBracketSequence(result));
})

function generationBracketSequence(elements) {
    const numbers = elements[0].split('');
    const keys = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    }

    let arr = [];
    numbers.forEach(item => arr.push(keys[item]));

    return getAllCombinations(arr).join(' ');


}

function getAllCombinations(arr) {
    if (arr.length === 0) {
        return [];
    } else if (arr.length === 1) {
        return arr[0];
    } else {
        let result = [];
        const allCombinations = getAllCombinations(arr.slice(1));
        for (let i = 0; i < arr[0].length; i++) {
            for (let item in allCombinations) {
                result.push(arr[0][i] + allCombinations[item]);
            }
        }

        return result;
    }
}
