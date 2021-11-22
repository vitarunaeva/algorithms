/**
 ПОКУПКА ДОМОВ
 Тимофей решил купить несколько домов на знаменитом среди разработчиков Алгосском архипелаге. Он нашёл n объявлений о продаже, где указана стоимость каждого дома в алгосских франках. А у Тимофея есть k франков. Помогите ему определить, какое наибольшее количество домов на Алгосах он сможет приобрести за эти деньги.

 Формат ввода
 В первой строке через пробел записаны натуральные числа n и k.
 n — количество домов, которые рассматривает Тимофей, оно не превосходит 1000;
 k — общий бюджет, не превосходит 10000;
 В следующей строке через пробел записано n стоимостей домов. Каждое из чисел не превосходит 10000. Все стоимости — натуральные числа.

 Формат вывода
 Выведите одно число —– наибольшее количество домов, которое может купить Тимофей.

 Example:
 Ввод:
 3 300
 999 999 999

 Вывод:
 0
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
    console.log(getHousesCount(result));
})

function getHousesCount(elements) {
    const budget = (elements[0].split(' '))[1];
    const prices = elements[1].split(' ').map(item => +item);

    const sortedPrices = sort(prices, budget);
    return binarySearch(sortedPrices, budget);
}

function sort(prices) {

    if (prices.length <= 1) {
        return prices;
    }

    const pivot = prices[0];

    let left = [];
    let right = [];

    for (let i = 1; i < prices.length; i++) {
        prices[i] < pivot ? left.push(prices[i]) : right.push(prices[i]);
    }

    return sort(left).concat(pivot, sort(right));
}

function binarySearch(arr, val) {
    let count = 0;
    let tmp = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i === 0 && arr[i] <= val) {
            tmp = arr[i];
            count++;
        }

        if (tmp + arr[i + 1] < val) {
            tmp += arr[i+1];
            count++;
        }

        if (tmp > val) {
            return;
        }
    }
    return count;
}
