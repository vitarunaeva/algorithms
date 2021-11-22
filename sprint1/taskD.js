/**
 ХАОТИЧНОСТЬ ПОГОДЫ
 Метеорологическая служба вашего города решила исследовать погоду новым способом.
 Под температурой воздуха в конкретный день будем понимать максимальную температуру в этот день.
 Назовём хаотичностью погоды за n дней количество дней, в которые температура строго больше, чем в день до (если такой существует) и в день после текущего (если такой существует).
 Например, если за 5 дней максимальная температура воздуха составляла [1, 2, 5, 4, 8] градусов, то хаотичность за этот период равна 2: в 3-й и 5-й дни выполнялись описанные условия.
 Определите по ежедневным показаниям температуры хаотичность погоды за этот период.

 Заметим, что если число показаний n=1, то единственный день будет хаотичным.

 Формат ввода
 В первой строке дано число n –— длина периода измерений в днях, 1 ≤ n≤ 105.
 Во второй строке даны n целых чисел –— значения температуры в каждый из n дней.
 Значения температуры не превосходят 273 по модулю.

 Формат вывода
 Выведите единственное число — хаотичность за данный период.

 Example:
 Ввод:
 7
 -1 -10 -8 0 2 0 5

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
    console.log(getMaxValuesCount(result));
})

function getMaxValuesCount(elements) {
    const numberLength = +elements[0];

    if (numberLength === 1) {
        return 1;
    }

    const numbers = elements[1].split(' ').map((el) => +el);

    const result = [];

    if (numbers[0] > numbers[1]) {
        result.push(numbers[0]);
    }

    if (numbers[numberLength - 1] > numbers[numberLength - 2]) {
        result.push(numbers[numberLength - 1]);
    }

    for (let i = 1; i < numberLength - 1; i++) {
        const currNumber = numbers[i];
        if (currNumber > numbers[i - 1] && currNumber > numbers[i + 1]) {
            result.push(currNumber);
        }
    }

    return result.length.toString();
}
