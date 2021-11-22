/**
 САМОЕ ДЛИННОЕ СЛОВО
 Чтобы подготовиться к семинару, Гоше надо прочитать статью по эффективному менеджменту.
 Так как Гоша хочет спланировать день заранее, ему необходимо оценить сложность статьи.

 Он придумал такой метод оценки: берётся случайное предложение из текста и в нём ищется самое длинное слово.
 Его длина и будет условной сложностью статьи.

 Помогите Гоше справиться с этой задачей.

 Формат ввода
 В первой строке дана длина текста L (1 ≤ L ≤ 105).

 В следующей строке записан текст, состоящий из строчных латинских букв и пробелов.
 Слово —– последовательность букв, не разделённых пробелами. Пробелы могут стоять в самом начале строки и в самом её конце.
 Текст заканчивается переносом строки, этот символ не включается в число остальных L символов.

 Формат вывода
 В первой строке выведите самое длинное слово. Во второй строке выведите его длину.
 Если подходящих слов несколько, выведите то, которое встречается раньше.

 Example:
 Ввод:
 19
 i love segment tree

 Вывод:
 segment
 7
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
    console.log(findLongestSubstring(result));
})

function findLongestSubstring(elements) {
    const strings = elements[1].split(' ');

    const result = strings.reduce((previousValue, currentValue) => {
        if (!previousValue) {
            return currentValue;
        }

        if (previousValue.length === currentValue.length) {
            return previousValue;
        }
        if (previousValue.length < currentValue.length) {
            return currentValue;
        }

        return previousValue;
    }, []);

    return result + '\n' + result.length;
}
