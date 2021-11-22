/**
 ГЕНЕРАТОР СКОБОК
 Рита по поручению Тимофея наводит порядок в правильных скобочных последовательностях (ПСП), состоящих только из круглых скобок ().
 Для этого ей надо сгенерировать все ПСП длины 2n в алфавитном порядке —– алфавит состоит из ( и ) и открывающая скобка идёт раньше закрывающей.
 Помогите Рите —– напишите программу, которая по заданному n выведет все ПСП в нужном порядке.
 Рассмотрим второй пример. Надо вывести ПСП из четырёх символов. Таких всего две:
 (())
 ()()
 (()) идёт раньше ()(), так как первый символ у них одинаковый, а на второй позиции у первой ПСП стоит (, который идёт раньше ).

 Формат ввода
 На вход функция принимает n — целое число от 0 до 10.

 Формат вывода
 Функция должна напечатать все возможные скобочные последовательности заданной длины в алфавитном (лексикографическом) порядке.

 Example:
 Ввод:
 3

 Вывод:
 ((()))
 (()())
 (())()
 ()(())
 ()()()
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
    generationBracketSequence(result);
})

function generationBracketSequence(elements) {
    const bracketCount = +elements[0]

    gen(0, 0, bracketCount * 2, []);

}

function gen(diffBetweenBrackets, index, count, bracketsList) {
    if (diffBetweenBrackets <= count - index - 2) {
        bracketsList[index] = '(';
        gen(diffBetweenBrackets + 1, index + 1, count, bracketsList);
    }

    if (diffBetweenBrackets > 0) {
        bracketsList[index] = ')';
        gen(diffBetweenBrackets - 1, index + 1, count, bracketsList);
    }

    if (index === count) {
        if (diffBetweenBrackets === 0) {
            console.log(bracketsList.join(''));
        }
    }
}

