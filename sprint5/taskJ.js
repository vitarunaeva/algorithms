/**
 ДОБАВЬ УЗЕЛ
 Дано BST. Надо вставить узел с заданным ключом. Ключи в дереве могут повторяться.
 На вход функции подаётся корень корректного бинарного дерева поиска и ключ, который надо вставить в дерево.
 Осуществите вставку этого ключа. Если ключ уже есть в дереве, то его дубликаты уходят в правого сына.
 Таким образом вид дерева после вставки определяется однозначно.
 Функция должна вернуть корень дерева после вставки вершины.
 Ваше решение должно работать за O(h), где h –— высота дерева.

 Формат ввода
 Ключи дерева – натуральные числа, не превосходящие 10^9. Число вершин в дереве не превосходит 10^5.
 */

 class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function insert(node, key) {
     if (key < node.value) {
         if (!node.left) {
             node.left = new Node(key);
         } else {
             insert(node.left, key);
         }
     } else {
         if (!node.right) {
             node.right = new Node(key);
         } else {
             insert(node.right, key);
         }
     }
     return node;
}

function test() {
    var node1 = new Node(7, null, null);
    var node2 = new Node(8, node1, null);
    var node3 = new Node(7, null, node2);
    var newHead = insert(node3, 6);
    console.assert(newHead === node3);
    console.assert(newHead.left.value === 6);
}

// test();

