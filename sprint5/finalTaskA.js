/*

ID успешной посылки 63816403


 -- ПРИНЦИП РАБОТЫ --
    В методе heapSort() создается результирующий массив; добавляются все элементы массива, сохраняя свойства кучи;
     извлекаются наиболее приоритенные элементы до тех пор, пока куча не пуста.
    heapAdd() - вставка элемента в первую свободную ячейку.
    swiftUp() - функция 'просеивания вверх'. Если дочерний элемент больше родительского, то то они меняются местами.
    Выполняется до тех пор, пока куча не станет упорядоченной.
    heapPopMax() - забирает самый приоритетный элемент из пирамиды. На место извлеченного элемента ставится последний
    элемент из кучи.
    shiftDown() - функция "просеивания вниз". Меняет местами вершины до тех пор, пока значение текущего узла меньше,
    чем значение его потомков или пока у текущего узла присутсвуют.
    Для определения приоритеного элемента используется сортировка lessPerson(), которая взята из предыдщего финального задания.


 -- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
Алгоритм выводит отсортированный список участников, с учетом всех полей.
В сортировке учитываются только строки, содержащие информацию по участникам, все лишние строки отсекаются.

 -- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Временная сложность создания бинарной кучи составляет О(n), упорядочивание - O(log N).
Таким образом, временная сложность составляет О(n log n).

 -- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
Создание бинарной кучи - О(1), так как выделяется память под массив из n элементов.
Вставка n элементов подряд в бинарную кучу O(log n)+O(log n)+...+O(log n) = O(n log n).
Извлечение n элементов O(n log n).
Таким образом, сложность пирамидальной сортировки составляет T = O(1)+O(n log n)+O(n log n) = O(n log n)
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
    const result = heapSort(persons);

    return result.map(person => person.name).join('\n');
}

function heapSort(arr) {
    const heap = [-1];
    let sortedArray = [];
    let index = 0;

    arr.forEach(item => {
        heapAdd(heap, item);
    });

    while(heap.length > 1) {
        sortedArray[index] = heapPopMax(heap);
        index++;
    }

    return sortedArray;
}


function heapAdd(heap, key) {
    const newIndex = heap.length;

    heap.push(key);
    siftUp(heap, newIndex);
}

function heapPopMax(heap) {
    const result = heap[1];
    heap[1] = heap[heap.length - 1];

    heap.pop();
    shiftDown(heap, 1);

    return result;
}

function siftUp(heap, idx) {
    if (idx === 1) {
        return idx;
    }

    const parentIndex = Math.floor(idx / 2);

    if(lessPerson(heap[parentIndex], heap[idx])) {
        [heap[parentIndex], heap[idx]] = [heap[idx], heap[parentIndex]];
        return siftUp(heap, parentIndex);
    }
    return idx;
}

function shiftDown(heap, idx) {
    const left = 2 * idx;
    const right = left + 1;
    const heapSize = heap.length - 1;

    if (heapSize < left) {
        return idx;
    }

    let indexLargest;

    if (right <= heapSize && lessPerson(heap[left], heap[right])) {
        indexLargest = right;
    } else {
        indexLargest = left;
    }

    if (lessPerson(heap[idx], heap[indexLargest])) {
        [heap[idx], heap[indexLargest]] = [heap[indexLargest], heap[idx]];
        return shiftDown(heap, indexLargest);
    }

    return idx;
}

class Persons {
    constructor(name = '', solved = null, errors = null) {
        this.name = name;
        this.solved = +solved;
        this.errors = +errors;
    }
}

function lessPerson(first, second) {
    if (first.solved === second.solved) {
        if (first.errors === second.errors) {
            return first.name > second.name;
        }

        return first.errors > second.errors;
    }
    return first.solved < second.solved
}

