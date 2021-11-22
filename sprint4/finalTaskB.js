/**
 ХЕШ-ТАБЛИЦА
 Тимофей, как хороший руководитель, хранит информацию о зарплатах своих сотрудников в базе данных и постоянно её обновляет. Он поручил вам написать реализацию хеш-таблицы, чтобы хранить в ней базу данных с зарплатами сотрудников.

 Хеш-таблица должна поддерживать следующие операции:

 put key value —– добавление пары ключ-значение. Если заданный ключ уже есть в таблице, то соответствующее ему значение обновляется.
 get key –— получение значения по ключу. Если ключа нет в таблице, то вывести «None». Иначе вывести найденное значение.
 delete key –— удаление ключа из таблицы. Если такого ключа нет, то вывести «None», иначе вывести хранимое по данному ключу значение и удалить ключ.
 В таблице хранятся уникальные ключи.

 Требования к реализации:

 Нельзя использовать имеющиеся в языках программирования реализации хеш-таблиц (std::unordered_map в С++, dict в Python, HashMap в Java, и т. д.)
 Число хранимых в таблице ключей не превосходит 105.
 Разрешать коллизии следует с помощью метода цепочек или с помощью открытой адресации.
 Все операции должны выполняться за O(1) в среднем.
 Поддерживать рехеширование и масштабирование хеш-таблицы не требуется.
 Ключи и значения, id сотрудников и их зарплата, —– целые числа. Поддерживать произвольные хешируемые типы не требуется.
 Формат ввода
 В первой строке задано общее число запросов к таблице n (1≤ n≤ 106).

 В следующих n строках записаны запросы, которые бывают трех видов –— get, put, delete —– как описано в условии.

 Все ключи и значения –— целые неотрицательные числа, не превосходящие 109.

 Формат вывода
 На каждый запрос вида get и delete выведите ответ на него в отдельной строке.

 Example:
 Ввод:
 10
 get 1
 put 1 10
 put 2 4
 get 1
 get 2
 delete 2
 get 2
 put 1 5
 get 1
 delete 2

 Вывод:
 None
 10
 4
 4
 None
 5
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
    console.log(getSortedNames(result));
})

function getSortedNames(elements) {
    const personsCount = +elements[0];
    const persons = elements.splice(1, personsCount).map(item => new Persons(...item.split(' ')));

    quickSort(persons, 0, personsCount - 1);

    return persons.map(person => person.name).join('\n');
}

function quickSort(arr, left, right) {
    if (left >= right) {
        return;
    }

    let start = left;
    let end = right;
    const pivot = arr[((right + left) >> 1)];

    while (start < end) {
        while (checkLeftPointer(arr[start], pivot)) {
            start++;
        }

        while (checkRightPointer(arr[end], pivot)) {
            end--;
        }

        swap(arr, start, end);

        if (start === end) {
            start++;
            end--;

            quickSort(arr, left, start - 1);
            quickSort(arr, start, right);
        }
    }
}

function swap(items, left, right) {
    const leftItems = items[left];
    items[left] = items[right];
    items[right] = leftItems;
}

function checkLeftPointer(leftPointer, pivot) {
    if (leftPointer.solved === pivot.solved) {
        if (leftPointer.errors === pivot.errors) {
            return leftPointer.name < pivot.name;
        }

        return leftPointer.errors < pivot.errors;
    }

    return leftPointer.solved > pivot.solved;
}

function checkRightPointer(rightPointer, pivot) {

    if (rightPointer.solved === pivot.solved) {
        if (rightPointer.errors === pivot.errors) {
            return rightPointer.name > pivot.name;
        }

        return rightPointer.errors > pivot.errors;
    }
    return rightPointer.solved < pivot.solved
}


class Persons {
    constructor(name = '', solved = null, errors = null) {
        this.name = name;
        this.solved = +solved;
        this.errors = +errors;
    }
}

/*
 -- ПРИНЦИП РАБОТЫ --
При решении задачи использовался метод цепочек для разрешения коллизий.
Создается хеш-таблица на основе связного списка. Класс HashTable, имеет методы для работы с ключами:
- добавление - вычисляется значение хеш-функции от добавляемого объекта, по ее значению получается индекс корзины,
ищется ссылка на голову списка ключей и всталяется элемент в начало связного списока.
- удаление/поиск - вычисляется значение хеш-функции, по найденному значению получается индекс корзины,
находится ссылка на голову списка ключей, выполняется поиск ключа в связном списке и удаляется (если это метод удаления).

Для поиска номера корзины использовалась эффективная формула из теории Яндекс Практикума:
bucket(h)=(h ⋅ s mod2^32)≫(32−p)

 -- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
Хеш-таблица выводит результат при запросах get и delete. В случае, если заданного ключа в хеш-таблице не оказалось, то выводится None.

 -- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Так как используется связный список для поиска элемента, поэтому доступ к элементу происходит за О(n).
Операции вставки/удаления так же происходят за O(n).
данная оценка корректна для случая с колизиями. В среднем и лучшем случае все операции с таблицей (вставки, удаления) выполняются за константное время

 -- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
Пространственная сложность зависит от количества ключей и в худшем случае составляет O(n)
 */
