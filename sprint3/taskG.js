/**
 ГАРДЕРОБ
 Рита решила оставить у себя одежду только трёх цветов: розового, жёлтого и малинового.
 После того как вещи других расцветок были убраны, Рита захотела отсортировать свой новый гардероб по цветам.
 Сначала должны идти вещи розового цвета, потом —– жёлтого, и в конце —– малинового.
 Помогите Рите справиться с этой задачей.
 Примечание: попробуйте решить задачу за один проход по массиву!

 Формат ввода
 В первой строке задано количество предметов в гардеробе: n –— оно не превосходит 1000000. Во второй строке даётся массив, в котором указан цвет для каждого предмета. Розовый цвет обозначен 0, жёлтый —– 1, малиновый –— 2.

 Формат вывода
 Нужно вывести в строку через пробел цвета предметов в правильном порядке.

 Example:
 Ввод:
 7
 0 2 1 2 0 0 1

 Вывод:
 0 0 0 1 1 2 2
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
    console.log(countingSort(result));
})

function countingSort(elements) {
    if (elements[0] === '0') {
        return '';
    }

    const arrLength = +elements[0];
    const arr = elements[1].split(' ').map(item => +item);

    let countedValues = [];
    for (let i = 0; i <= arrLength; i++) {
        countedValues[i] = 0;
    }

    arr.forEach(value => {
        countedValues[value] += 1;
    });

    const result = [];
    for (let value = 0; value <= arrLength; value++) {
        while (countedValues[value] > 0) {
            result.push(value);
            countedValues[value]--;
        }
    }


    return result.join(' ');
}
