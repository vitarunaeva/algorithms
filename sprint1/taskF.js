/**
 ПАЛИНДРОМ
 Помогите Васе понять, будет ли фраза палиндромом. Учитываются только буквы и цифры, заглавные и строчные буквы считаются одинаковыми.

 Решение должно работать за O(N), где N — длина строки на входе.

 Формат ввода
 В единственной строке записана фраза или слово. Буквы могут быть только латинские.
 Длина текста не превосходит 20000 символов.

 Фраза может состоять из строчных и прописных латинских букв, цифр, знаков препинания.

 Формат вывода
 Выведите «True», если фраза является палиндромом, и «False», если не является.

 Example:
 Ввод:
 A man, a plan, a canal: Panama

 Вывод:
 True
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
    console.log(checkPalindrome(result));
})

function checkPalindrome(elements) {
    const string = elements[0].toLowerCase().replace(/[^a-z0-9\s]/gi, '').split(' ').join('');
    const newString = string.split('').reverse().join('');

    return string === newString ? 'True' : 'False';
}
