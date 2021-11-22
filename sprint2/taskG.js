/**
 СТЕК-MaxEffective

 Реализуйте класс StackMaxEffective, поддерживающий операцию определения максимума среди элементов в стеке.
 Сложность операции должна быть O(1). Для пустого стека операция должна возвращать None.
 При этом push(x) и pop() также должны выполняться за константное время.

 Формат ввода
 В первой строке записано одно число — количество команд, оно не превосходит 100000.
 Далее идут команды по одной в строке. Команды могут быть следующих видов:

 push(x) — добавить число x в стек;
 pop() — удалить число с вершины стека;
 get_max() — напечатать максимальное число в стеке;
 Если стек пуст, при вызове команды get_max нужно напечатать «None», для команды pop — «error».

 Формат вывода
 Для каждой команды get_max() напечатайте результат её выполнения.
 Если стек пустой, для команды get_max() напечатайте «None».
 Если происходит удаление из пустого стека — напечатайте «error».

 Example:
 10
 pop
 pop
 push 4
 push -5
 push 7
 pop
 pop
 get_max
 pop
 get_max

 Вывод:
 error
 error
 4
 None
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
    getStackMaxEffective(result);
})

function getStackMaxEffective(elements) {
    const stack = new StackMaxEffective();

    for (let i = 1; i < elements.length; i++) {
        const command = elements[i].split(' ');
        switch (command[0]) {
            case 'push':
                stack.push(+command[1]);
                break;
            case 'pop':
                stack.pop();
                break;
            case 'get_max':
                stack.getMax();
                break;
            default:
                return;
        }
    }
}

class StackMaxEffective {
    constructor() {
        this.items = [];
        this.maxElement = null;
    }

    push(value) {
        if (!this.items.length) {
            this.maxElement = value;
            this.items.push(value);
            return
        }

        if (value > this.maxElement) {
            this.items.push(2 * value - this.maxElement);
            this.maxElement = value;
            return;
        }
        this.items.push(value);
    }

    pop() {
        if (!this.items.length) {
            console.log('error');
            return;
        }

        let t = this.items[this.items.length - 1];
        this.items.pop();

        if (t > this.maxElement) {
            this.maxElement = 2 * this.maxElement - t;
        }
    }

    getMax() {
        if (!this.items.length) {
            console.log('None');
            return;
        }

        console.log(this.maxElement);
    }
}

