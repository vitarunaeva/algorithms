/**
 ПОДПОСЛЕДОВАТЕЛЬСНОСТЬ
 Гоша любит играть в игру «Подпоследовательность»: даны 2 строки, и нужно понять, является ли первая из них подпоследовательностью второй.
 Когда строки достаточно длинные, очень трудно получить ответ на этот вопрос, просто посмотрев на них.
 Помогите Гоше написать функцию, которая решает эту задачу.

 Формат ввода
 В первой строке записана строка s.
 Во второй —- строка t.
 Обе строки состоят из маленьких латинских букв, длины строк не превосходят 150000.
 Строки могут быть пустыми.

 Формат вывода
 Выведите True, если s является подпоследовательностью t, иначе —– False.

 Example:
 Ввод:
 abc
 ahbgdcu

 Вывод:
 True
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
    const str1 = elements[0].split('');

    if (str1.length === 0) {
        return 'True';
    }

    const str2 = elements[1].split('');

    if (str1.length > str2.length) {
        return 'False';
    }

    let currPos = 0;

    for (let j = 0; j < str2.length; j++) {
        if (str1[currPos] === str2[j]) {
            currPos++;

            if (currPos === str1.length) {
                return 'True';
            }
        }
    }

    return 'False';
}

