/**
 ПУЗЫРЕК
 Чтобы выбрать самый лучший алгоритм для решения задачи, Гоша продолжил изучать разные сортировки. На очереди сортировка пузырьком — https://ru.wikipedia.org/wiki/Сортировка_пузырьком

 Её алгоритм следующий (сортируем по неубыванию):

 На каждой итерации проходим по массиву, поочередно сравнивая пары соседних элементов. Если элемент на позиции i больше элемента на позиции i + 1, меняем их местами. После первой итерации самый большой элемент всплывёт в конце массива.
 Проходим по массиву, выполняя указанные действия до тех пор, пока на очередной итерации не окажется, что обмены больше не нужны, то есть массив уже отсортирован.
 После не более чем n – 1 итераций выполнение алгоритма заканчивается, так как на каждой итерации хотя бы один элемент оказывается на правильной позиции.

 Помогите Гоше написать код алгоритма.
 Формат ввода
 В первой строке на вход подаётся натуральное число n — длина массива, 2 ≤ n ≤ 1000.
 Во второй строке через пробел записано n целых чисел.
 Каждое из чисел по модулю не превосходит 1000.

 Обратите внимание, что считывать нужно только 2 строки: значение n и входной массив.

 Формат вывода
 После каждого прохода по массиву, на котором какие-то элементы меняются местами, выводите его промежуточное состояние.
 Таким образом, если сортировка завершена за k меняющих массив итераций, то надо вывести k строк по n чисел в каждой — элементы массива после каждой из итераций.
 Если массив был изначально отсортирован, то просто выведите его.

 Example:
 Ввод:
 5
 4 3 9 2 1

 Вывод:
 3 4 2 1 9
 3 2 1 4 9
 2 1 3 4 9
 1 2 3 4 9
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
    bubbleSort(result);
})

function bubbleSort(elements) {
    const arrLength = +elements[0];
    const arr = elements[1].split(' ').map(item => +item);
    let countChanges = 0;

    for (let i = 0, endI = arrLength - 1; i < endI; i++) {
        let wasChanged = false;

        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                wasChanged = true;
                countChanges++;
            }
        }

        if (!wasChanged) {
            if (countChanges === 0) {
                console.log(arr.join(' '));
            }
            return;
        }

        console.log(arr.join(' '));
    }
}
