/**
 СТЕК-MAX
 Нужно реализовать класс StackMax, который поддерживает операцию определения максимума среди всех элементов в стеке.
 Класс должен поддерживать операции push(x), где x – целое число, pop() и get_max().

 Формат ввода
 В первой строке записано одно число n — количество команд, которое не превосходит 10000.
 В следующих n строках идут команды. Команды могут быть следующих видов:

 push(x) — добавить число x в стек;
 pop() — удалить число с вершины стека;
 get_max() — напечатать максимальное число в стеке;
 Если стек пуст, при вызове команды get_max() нужно напечатать «None», для команды pop() — «error».

 Формат вывода
 Для каждой команды get_max() напечатайте результат её выполнения.
 Если стек пустой, для команды get_max() напечатайте «None».
 Если происходит удаление из пустого стека — напечатайте «error».

 Example:
 Ввод:
 8
 get_max
 push 7
 pop
 push -2
 push -1
 pop
 get_max
 get_max

 Вывод:
 None
 -2
 -2
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
    getStackMax(result);
})

function getStackMax(elements) {
    const stack = new StackMax();

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

class StackMax {
    constructor() {
        this.items = [];
    }

    push(value) {
        this.items.push(value);
    }

    pop() {
        if (!this.items.length) {
            console.log('error');
            return;
        }
        this.items.pop();
    }

    getMax() {
        if (!this.items.length) {
            console.log('None');
            return;
        }

        console.log(Math.max(...this.items));
    }
}
