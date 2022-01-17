/*

ID успешной посылки 63816403


 -- ПРИНЦИП РАБОТЫ --
    Реализован класс HeapSort(), который объедияется методы, связанные с сортировкой.
    В методе sort() создается результирующий массив; добавляются все элементы массива, сохраняя свойства кучи;
     извлекаются наиболее приоритенные элементы до тех пор, пока куча не пуста.
    private add() - вставка элемента в первую свободную ячейку.
    private swiftUp() - функция 'просеивания вверх'. Если дочерний элемент больше родительского, то то они меняются местами.
    Выполняется до тех пор, пока куча не станет упорядоченной.
    private popMax() - забирает самый приоритетный элемент из пирамиды. На место извлеченного элемента ставится последний
    элемент из кучи.
    private shiftDown() - функция "просеивания вниз". Меняет местами вершины до тех пор, пока значение текущего узла меньше,
    чем значение его потомков или пока у текущего узла присутсвуют.
    Для определения приоритеного элемента используется сортировка lessPerson(), которая взята из предыдщего финального задания.


 -- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
Алгоритм выводит отсортированный список участников, с учетом всех полей.
В сортировке учитываются только строки, содержащие информацию по участникам, все лишние строки отсекаются.

 -- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Временная сложность создания бинарной кучи составляет О(n), упорядочивание - O(log N).
Таким образом, временная сложность составляет О(n log n).

 -- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
Создание бинарной кучи - О(n), так как выделяется память под массив из n элементов.
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
    console.log(getSortedNames(result));
})

function getSortedNames(elements) {
    const personsCount = +elements[0];
    const persons = elements.splice(1, personsCount).map(item => new Persons(...item.split(' ')));
    const heapSort = new HeapSort(persons);

    return heapSort.sort().map(person => person.name).join('\n');
}

class Persons {
    constructor(name = '', solved = 0, errors = 0) {
        this.name = name;
        this.solved = +solved;
        this.errors = +errors;
    }

    lessPerson(first, second) {
            if (first.solved === second.solved) {
                if (first.errors === second.errors) {
                    return first.name > second.name;
                }

                return first.errors > second.errors;
            }
            return first.solved < second.solved;
    }
}

class HeapSort {
    persons = new Persons();
    heap = [-1];

    constructor(data) {
        this.data = data;
    }

    sort() {
        let sortedArray = [];
        let index = 0;

        this.data.forEach(item => {
            this._add(item);
        });

        while(this.heap.length > 1) {
            sortedArray[index] = this._popMax();
            index++;
        }

        return sortedArray;
    }

    _add(key) {
        const newIndex = this.heap.length;

        this.heap.push(key);
        this._siftUp(newIndex);
    }

    _popMax() {
        const result = this.heap[1];
        this.heap[1] = this.heap[this.heap.length - 1];

        this.heap.pop();
        this._shiftDown(1);

        return result;
    }

    _siftUp(idx) {
        if (idx === 1) {
            return idx;
        }

        const parentIndex = Math.floor(idx / 2);

        if(this.persons.lessPerson(this.heap[parentIndex], this.heap[idx])) {
            [this.heap[parentIndex], this.heap[idx]] = [this.heap[idx], this.heap[parentIndex]];
            return this._siftUp(parentIndex);
        }
        return idx;
    }

    _shiftDown(idx) {
        const left = 2 * idx;
        const right = left + 1;
        const heapSize = this.heap.length - 1;

        if (heapSize < left) {
            return idx;
        }

        let indexLargest;

        if (right <= heapSize && this.persons.lessPerson(this.heap[left], this.heap[right])) {
            indexLargest = right;
        } else {
            indexLargest = left;
        }

        if (this.persons.lessPerson(this.heap[idx], this.heap[indexLargest])) {
            [this.heap[idx], this.heap[indexLargest]] = [this.heap[indexLargest], this.heap[idx]];
            return this._shiftDown(indexLargest);
        }

        return idx;
    }
}

