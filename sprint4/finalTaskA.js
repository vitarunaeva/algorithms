/**
ПОИСКОВАЯ СИСТЕМА
 Тимофей пишет свою поисковую систему.

 Имеется n документов, каждый из которых представляет собой текст из слов.
 По этим документам требуется построить поисковый индекс.
 На вход системе будут подаваться запросы. Запрос —– некоторый набор слов.
 По запросу надо вывести 5 самых релевантных документов.

 Релевантность документа оценивается следующим образом: для каждого уникального слова из запроса берётся число его вхождений в документ, полученные числа для всех слов из запроса суммируются.
 Итоговая сумма и является релевантностью документа. Чем больше сумма, тем больше документ подходит под запрос.

 Сортировка документов на выдаче производится по убыванию релевантности.
 Если релевантности документов совпадают —– то по возрастанию их порядковых номеров в базе (то есть во входных данных).

 Формат ввода
 В первой строке дано натуральное число n —– количество документов в базе (1 ≤ n ≤ 104).

 Далее в n строках даны документы по одному в строке. Каждый документ состоит из нескольких слов, слова отделяются друг от друга одним пробелом и состоят из маленьких латинских букв.
 Длина одного текста не превосходит 1000 символов. Текст не бывает пустым.

 В следующей строке дано число запросов —– натуральное число m (1 ≤ m ≤ 104).
 В следующих m строках даны запросы по одному в строке. Каждый запрос состоит из одного или нескольких слов.
 Запрос не бывает пустым. Слова отделяются друг от друга одним пробелом и состоят из маленьких латинских букв.
 Число символов в запросе не превосходит 100.

 Формат вывода
 Для каждого запроса выведите на одной строке номера пяти самых релевантных документов.
 Если нашлось менее пяти документов, то выведите столько, сколько нашлось.
 Документы с релевантностью 0 выдавать не нужно.

 Example:
 Ввод:
 3
 i love coffee
 coffee with milk and sugar
 free tea for everyone
 3
 i like black coffee without milk
 everyone loves new year
 mary likes black coffee without milk

 Вывод:
 1 2
 3
 2 1
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
    console.log(searchSystem(result));
})

function searchSystem(elements) {
    const docCount = +elements[0];
    const documents = elements.slice(1, docCount + 1);
    const reqCount = +elements[docCount + 1];
    const requests = elements.slice(docCount + 2);

    const searchList = getDocsList(documents);
    const searchMap = new Map();

    searchList.forEach((item, index) => {
        for (const [key] of item) {
            if (searchMap.has(key)) {
                const collection = searchMap.get(key);
                collection.push(index);
                searchMap.set(key, collection);
            } else {
                searchMap.set(key, [index])
            }
        }
    });
    const requestList = requests.map(item => {
        return item.split(' ').reduce((prev, curr) => {
            prev[curr] = null;
            return prev;
        }, {})
    });

    let answer = new Array(reqCount);

    requestList.forEach((req, reqIndex) => {

        Object.keys(req).forEach(reqWord => {
            if (searchMap.has(reqWord)) {

                searchMap.get(reqWord).forEach(index => {
                    const answerReqIndex = answer[reqIndex];
                    if (answerReqIndex) {
                        if (answerReqIndex.hasOwnProperty(index)) {
                            answerReqIndex[index] += searchList[index].get(reqWord);
                        } else {
                            answerReqIndex[index] = searchList[index].get(reqWord);
                        }
                    } else {
                        const arr = {};
                        arr[index] = searchList[index].get(reqWord);
                        answer[reqIndex] = arr;
                    }
                });
            }
        });
    });

    const result = answer.map(item => Object.keys(item).map(key => [item[key], +key]).sort(comparator).slice(0, 5));
    return result.map(item => item.map(element => element[1] + 1).join(' ')).join('\n');
}

function getDocsList(docs) {
    let result = [];

    docs.forEach(item => {
        let dict = new Map();

        item.split(' ').forEach(word => {
            if (dict.has(word)) {
                dict.set(word, dict.get(word) + 1);
            } else {
                dict.set(word, 1);
            }
        });

        result.push(dict);
    })

    return result;
}

function comparator(a, b) {
    const [valA, indexA] = a;
    const [valB, indexB] = b;

    if (valA === valB) {
        return indexA - indexB;
    }

    return valB - valA;
}

/*
 -- ПРИНЦИП РАБОТЫ --

Для того, чтобы построить поисковый индекс:
- создается хеш таблица из слов и индексов документов, где встречаются слова (searchMap);
- создается еще одна хеш таблица для каждого документа с набором слов и их появлению в документе (answer);
- ищется релевантность запросов: каждое уникальное слово из запроса суммируется и опеределяться бОльшая сумма;
- сортируется по убыванию (comparator()) и выводится бОльшее значение.

 -- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
Для каждого запроса выводятся  <5 самых релевантных документов. Результат выводится в порядке убывания.
В случае равенства релевантности документов, выводятся в порядке возврастания порядковых номеров в базе.

 -- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Так как используется хэш-таблица, то доступ к данным происходт за О(1).
Поиск необходимых данных зависит от количества уникальных слов в индексе (М), количества уникальных слов в запросах (L), количества повторений слов в документах (K).
Таким образом, временная сложность составляет О(M*L*K).

 -- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
Зависит от суммарного количества уникальных слов в документах (M) и количества повторений каждого слова в документах (L).
Таким образом, пространственная сложность состовляет O(M * L)
 */
