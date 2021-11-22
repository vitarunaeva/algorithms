/**
  ЧЕТНЫЕ И НЕЧЕТНЫЕ ЧИСЛА
 Алла придумала такую онлайн-игру: игрок нажимает на кнопку, и на экране появляются три случайных числа. Если все три числа оказываются одной чётности, игрок выигрывает.

 Напишите программу, которая по трём числам определяет, выиграл игрок или нет.

 Формат ввода
 В первой строке записаны три случайных целых числа a, b и c. Числа не превосходят 109 по модулю.

 Формат вывода
 Выведите «WIN», если игрок выиграл, и «FAIL» в противном случае.

 Example:
 Ввод: 1 2 -3
 Вывод: FAIL
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
    console.log(checkParity(result));
})

function checkParity(elements) {
    const numbers = elements[0].split(' ').map((el) => +el);

    const isAllEven = numbers.every((item) => item % 2 === 0);
    const isAllOdd = numbers.every((item) => item % 2 !== 0);

    return isAllEven || isAllOdd ? 'WIN' : 'FAIL';
}
