/**
 БЛИЖАЙШИЙ НОЛЬ
 Улица, на которой хочет жить Тимофей, имеет длину n, то есть состоит из n одинаковых идущих подряд участков.
 На каждом участке либо уже построен дом, либо участок пустой.
 Тимофей ищет место для строительства своего дома. Он очень общителен и не хочет жить далеко от других людей, живущих на этой улице.

 Чтобы оптимально выбрать место для строительства, Тимофей хочет для каждого участка знать расстояние до ближайшего пустого участка.
 (Для пустого участка эта величина будет равна нулю –— расстояние до самого себя).

 Ваша задача –— помочь Тимофею посчитать искомые расстояния.
 Для этого у вас есть карта улицы. Дома в городе Тимофея нумеровались в том порядке, в котором строились, поэтому их номера на карте никак не упорядочены.
 Пустые участки обозначены нулями.

 Формат ввода
 В первой строке дана длина улицы —– n (1 ≤ n ≤ 106).
 В следующей строке записаны n целых неотрицательных чисел — номера домов и обозначения пустых участков на карте (нули).
 Гарантируется, что в последовательности есть хотя бы один ноль. Номера домов (положительные числа) уникальны и не превосходят 109.

 Формат вывода
 Для каждого из участков выведите расстояние до ближайшего нуля. Числа выводите в одну строку, разделяя их пробелами.

 Example:
 Ввод:
 5
 0 1 4 9 0

 Вывод:
 0 1 2 1 0

 Сложность алгоритма: O(n)
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
    console.log(findNearestZero(result));
})

function findNearestZero(elements) {
    let numbersLength = +elements[0];
    let numbers = elements[1].split(' ');

    for (let numberIndex = 0; numberIndex < numbersLength; numberIndex++) {
        if (numbers[numberIndex] != '0') {
            numbers[numberIndex] = numbersLength;
        }

        if (numberIndex > 0) {
            if (numbers[numberIndex] == '0') {
                numbers[numberIndex] = '0';
            } else {
                numbers[numberIndex] = +numbers[numberIndex - 1] + 1;
            }
        }
    }

    for (let numberIndex = numbersLength - 2; numberIndex >= 0; numberIndex--) {
        if (numbers[numberIndex] == '0') {
            numbers[numberIndex] = '0';
        } else {
            numbers[numberIndex] = Math.min(+numbers[numberIndex + 1] + 1, numbers[numberIndex])
        }

    }

    return numbers.join(' ');
}


