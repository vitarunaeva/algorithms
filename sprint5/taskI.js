/**
 РАЗНЫЕ ДЕРЕВЬЯ ПОИСКА
 Ребятам стало интересно, сколько может быть различных деревьев поиска, содержащих в своих узлах все уникальные числа от 1 до n. Помогите им найти ответ на этот вопрос.

 Формат ввода
 В единственной строке задано число n. Оно не превосходит 20.

 Формат вывода
 Нужно вывести число, равное количеству различных деревьев поиска, в узлах которых могут быть размещены числа от 1 до n включительно.

 Example:
 Ввод:
 2

 Вывод:
 2
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
    console.log(checkTree(result));
})

function checkTree(elements) {
    const number = +elements[0];

    if (number >= 2) {
        return ((2 * ((2 * number) - 1)) / (number + 1)) * checkTree([number - 1]);
    }

    return 1;
}


