/**
 ДВОИЧНАЯ СИСТЕМА
 Тимофей спросил у Гоши, умеет ли тот работать с числами в двоичной системе счисления.
 Он ответил, что проходил это на одной из первых лекций по информатике.
 Тимофей предложил Гоше решить задачку. Два числа записаны в двоичной системе счисления.
 Нужно вывести их сумму, также в двоичной системе.
 Встроенную в язык программирования возможность сложения двоичных чисел применять нельзя.

 Решение должно работать за O(N), где N –— количество разрядов максимального числа на входе.

 Формат ввода
 Два числа в двоичной системе счисления, каждое на отдельной строке.
 Длина каждого числа не превосходит 10 000 символов.

 Формат вывода
 Одно число в двоичной системе счисления.

 Example:
 Ввод:
 1010
 1011

 Вывод:
 10101
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
    console.log(sumBinaryNumbers(result));
})

function sumBinaryNumbers(elements) {
    let numberA = elements[0];
    let numberB = elements[1];
    let result = '';
    let carry = 0;

    while (numberA || numberB || carry) {
        let sum = +numberA.slice(-1) + +numberB.slice(-1) + carry;
        if (sum > 1) {
            result = sum % 2 + result;
            carry = 1;
        } else {
            result = sum + result;
            carry = 0;
        }

        numberA = numberA.slice(0, -1);
        numberB = numberB.slice(0, -1);
    }

    return result.toString();
}

