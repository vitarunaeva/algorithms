/**
 ВЫВЕДИ ДИАПАЗОН
 Напишите функцию, которая будет выводить по неубыванию все ключи от L до R включительно в заданном бинарном дереве поиска.
 Ключи в дереве могут повторяться. Решение должно иметь сложность O(h+k), где h –— глубина дерева, k — число элементов в ответе.
 В данной задаче если в узле содержится ключ x, то другие ключи, равные x, могут быть как в правом,
 так и в левом поддереве данного узла. (Дерево строил стажёр, так что ничего страшного).

 Формат ввода
 На вход функции подаётся корень дерева и искомый ключ. Число вершин в дереве не превосходит 10^5.
 Ключи – натуральные числа, не превосходящие 10^9.
 Гарантируется, что L ≤ R.
 В итоговом решении не надо определять свою структуру / свой класс, описывающий вершину дерева.
 */

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function printRange(root, left, right) {

    if (root) {
        if (root.value >= left) {
            printRange(root.left, left, right);
        }

        if (root.value >= left && root.value <= right) {
            console.log(root.value);
        }

        if (root.value <= right) {
            printRange(root.right, left, right);
        }

    }
}

function test() {
    var node1 = new Node(2, null, null);
    var node2 = new Node(1, null, node1);
    var node3 = new Node(8, null, null);
    var node4 = new Node(8, null, node3);
    var node5 = new Node(9, node4, null);
    var node6 = new Node(10, node5, null);
    var node7 = new Node(5, node2, node6);
    printRange(node7, 2, 8);
    // expected output: 2 5 8 8
}
