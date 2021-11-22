/**
 СУММА ЧЕТВЕРОК
 У Гоши есть любимое число S. Помогите ему найти все уникальные четвёрки чисел в массиве, которые в сумме дают заданное число S.

 Формат ввода
 В первой строке дано общее количество элементов массива n (0 ≤ n ≤ 1000).
 Во второй строке дано целое число S  .
 В третьей строке задан сам массив. Каждое число является целым и не превосходит по модулю 109.

 Формат вывода
 В первой строке выведите количество найденных четвёрок чисел.
 В последующих строках выведите найденные четвёрки. Числа внутри одной четверки должны быть упорядочены по возрастанию.
 Между собой четвёрки упорядочены лексикографически.

 Example:
 Ввод:
 8
 10
 2 3 2 4 1 10 3 0

 Вывод:
 3
 0 3 3 4
 1 2 3 4
 2 2 3 3
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
    sum(result);
})

function sum(elements) {
    const arrLength = +elements[0];
    const s = +elements[1];
    const arr = arrLength > 0 ? elements[2].split(' ').map(item => +item) : [];

    const result = fourSum(arr, s);

    console.log(result.length);
    result.forEach(item => {
        console.log(item.join(' '));
    })
}

function fourSum(nums, target) {
    nums.sort((x, y) => x - y);
    let res = [];

    for (let i = 0; i < nums.length - 3; i++) {
        if (!(i > 0 && nums[i - 1] === nums[i])) {
            for (let j = i + 1; j < nums.length - 2; j++) {
                if (!(j > i + 1 && nums[j - 1] === nums[j])) {
                    let l = j + 1;
                    let r = nums.length - 1;

                    while (l < r) {
                        const sum = nums[i] + nums[j] + nums[l] + nums[r];
                        if (sum === target) {
                            res.push([nums[i], nums[j], nums[l], nums[r]]);
                            l++;
                            r--;
                            while (l < r && nums[l] === nums[l - 1]) {
                                l++;
                            }
                            while (l < r && nums[r] === nums[r + 1]) {
                                r--;
                            }
                        } else if (sum < target) {
                            l++;
                        } else {
                            r--;
                        }
                    }
                }
            }
        }
    }

    return res;
}

