/**
 ПОЛИНОМИАЛЬНЫЙ ХЕШ
 Алле очень понравился алгоритм вычисления полиномиального хеша.
 Помогите ей написать функцию, вычисляющую хеш строки s.
 В данной задаче необходимо использовать в качестве значений отдельных символов их коды в таблице ASCII.

 Формат ввода
 В первой строке дано число a (1 ≤ a ≤ 1000) –— основание, по которому считается хеш.

 Во второй строке дано число m (1 ≤ m ≤ 109) –— модуль.

 В третьей строке дана строка s (0 ≤ |s| ≤ 106), состоящая из больших и маленьких латинских букв.

 Формат вывода
 Выведите целое неотрицательное число –— хеш заданной строки.

 Example:
 Ввод:
 123
 100003
 a

 Вывод:
 97
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
    console.log(polynomialHash(result));
})

function polynomialHash(elements) {
    const a = +elements[0];
    const m = +elements[1];
    const str = elements[2];

    let hash = 0;

    for (let charIndex = 0; charIndex < str.length; charIndex++) {
        const charCode = str.charCodeAt(charIndex);
        hash = (hash * a + charCode) % m;
    }

    return hash;

}

