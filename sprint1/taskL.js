/**
 ЛИШНЯЯ БУКВА
 Васе очень нравятся задачи про строки, поэтому он придумал свою.
 Есть 2 строки s и t, состоящие только из строчных букв.
 Строка t получена перемешиванием букв строки s и добавлением 1 буквы в случайную позицию.
 Нужно найти добавленную букву.

 Формат ввода
 На вход подаются строки s и t, разделённые переносом строки.
 Длины строк не превосходят 1000 символов.
 Строки не бывают пустыми.

 Формат вывода
 Выведите лишнюю букву.

 Example:
 Ввод:
 abcd
 abcde

 Вывод:
 e
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
    console.log(findWordsDiff(result));
})

function findWordsDiff(elements) {
    const word1 = elements[0].split('').sort();
    const word2 = elements[1].split('').sort();

    for (let i = 0; i < word2.length; i++) {
        if (word1[i] !== word2[i]) {
            return word2[i];
        }
    }

    return 'Not found'
}
