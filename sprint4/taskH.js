/**
 СТРАННОЕ СРАВНЕНИЕ
 Жители Алгосского архипелага придумали новый способ сравнения строк.
 Две строки считаются равными, если символы одной из них можно заменить на символы другой так, что первая строка станет точной копией второй строки.
 При этом необходимо соблюдение двух условий:

 Порядок вхождения символов должен быть сохранён.
 Одинаковым символам первой строки должны соответствовать одинаковые символы второй строки.
 Разным символам —– разные.
 Например, если строка s = «abacaba», то ей будет равна строка t = «xhxixhx», так как все вхождения «a» заменены на «x», «b» –— на «h», а «c» –— на «i».
 Если же первая строка s=«abc», а вторая t=«aaa», то строки уже не будут равны, так как разные буквы первой строки соответствуют одинаковым буквам второй.

 Формат ввода
 В первой строке записана строка s, во второй –— строка t. Длины обеих строк не превосходят 106.
 Обе строки содержат хотя бы по одному символу и состоят только из маленьких латинских букв.

 Строки могут быть разной длины.

 Формат вывода
 Выведите «YES», если строки равны (согласно вышеописанным правилам), и «NO» в ином случае.

 Example:
 Ввод:
 mxyskaoghi
 qodfrgmslc

 Вывод:
 YES
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
    console.log(compareString(result));
})

function compareString(elements) {
    const str1 = elements[0];
    const str2 = elements[1];

    const hashCode1 = hashString(str1);
    const hashCode2 = hashString(str2);

    return Object.values(hashCode1).join('') === Object.values(hashCode2).join('') ? 'YES' : 'NO';
}

function hashString(str) {
    let hashTable = {};
    [...str].forEach(item => {
        if (!hashTable[item]) {
            hashTable[item] = 0;
        }
        hashTable[item] += 1;
    });

    return hashTable;
}
