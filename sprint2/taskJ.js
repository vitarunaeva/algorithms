/**
 СПИСОЧНАЯ ОЧЕРЕДЬ
 Любимый вариант очереди Тимофея — очередь, написанная с использованием связного списка.
 Помогите ему с реализацией. Очередь должна поддерживать выполнение трёх команд:

 get() — вывести элемент, находящийся в голове очереди, и удалить его.
 Если очередь пуста, то вывести «error».
 put(x) — добавить число x в очередь
 size() — вывести текущий размер очереди
 Формат ввода
 В первой строке записано количество команд n — целое число, не превосходящее 1000.
 В каждой из следующих n строк записаны команды по одной строке.

 Формат вывода
 Выведите ответ на каждый запрос по одному в строке.

 Example:
 Ввод:
 10
 put -34
 put -23
 get
 size
 get
 size
 get
 get
 put 80
 size

 Вывод:
 -34
 1
 -23
 0
 error
 error
 1
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
    changeQueue(result);
})

function changeQueue(elements) {
    const stack = new ListQueue();

    for (let i = 1; i < elements.length; i++) {
        const command = elements[i].split(' ');
        switch (command[0]) {
            case 'put':
                stack.put(+command[1]);
                break;
            case 'get':
                stack.get();
                break;
            case 'size':
                stack.size();
                break;
            default:
                return;
        }
    }
}

class ListQueue {
    constructor() {
        this.items = [];
        this.head = 0;
        this.tail = 0;
        this.itemsSize = 0;
    }

    isEmpty() {
        return this.itemsSize === 0;
    }

    put(value) {
        this.items[this.tail] = value;
        this.tail = this.tail + 1;
        this.itemsSize += 1;
    }

    get() {
        if (this.isEmpty()) {
            console.log('error');
            return;
        }

        const x = this.items[this.head];
        this.items[this.head] = 'None';
        this.head = this.head + 1;
        this.itemsSize -= 1;
        console.log(x);
    }

    size() {
        console.log(this.itemsSize);
    }
}
