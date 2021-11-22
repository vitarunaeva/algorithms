/**
 ПОДСТРОКИ
 На вход подается строка. Нужно определить длину наибольшей подстроки, которая не содержит повторяющиеся символы.

 Формат ввода
 Одна строка, состоящая из строчных латинских букв. Длина строки не превосходит 10 000.

 Формат вывода
 Выведите натуральное число —– ответ на задачу.

 Example:
 Ввод:
 abcabcbb

 Вывод:
 3
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
    console.log(checkSubstring(result));
})

function checkSubstring(elements) {
    const str = elements[0].split('');

    let acc = [];
    let max = 0;

    str.forEach((item, index) => {
        let j = index;

        while (acc.indexOf(str[j]) === -1 && j < str.length) {
            acc.push(str[j]);
            j++;
        }

        if (max < acc.length) {
            max = acc.length;
        }

        acc = [];
    })

    return max;
}

