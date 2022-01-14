/**
ID успешной посылки 61707568


-- ПРИНЦИП РАБОТЫ --
Так как дерево бинарно, то, если значение узла больше ключа, то узел с ключом рекурсивно ищется в левой стороне, иначе в правой.
 Когда узел нашелся:
 В случае, если узел последний и не имеет потомков, то он удаляется.
 Если узел содержит только одного потомка, то узел удаляется, а потомок ставится вместо значения корневого узла.
 Если узел содержит оба потомка, то берется максимальное правое значение левого потомка или минимальное левое правого.
 Рекурсивно удаляется найденный узел.
 Возвращается дерево с удаленным элементом.
 В случае, если дерево пустое, то возвращается текущий узел.


-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
 Тест проходит успешно.
 Находится вершина по заданному ключу и удаляется из дерева. При этом дерево остается бинарным деревом поиска.
 В случае, если ключа нет, то дерево не меняется.

-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
 Так как дерево бинарное, то проход по нему составляет О(h), где h - высота дерева.
 Поиск максимального элемента в поддереве соотвествует его высоте.

-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
Так как используются только ссылки на узлы дерева, то выделяемая память составляет О(1).
 Так как эта функция вызывается рекурсивно, то на хранение стека тратится О(h), где h - высота дерева.
*/

//
//  class Node {
//     constructor(value, left = null, right = null) {
//         this.value = value;
//         this.left = left;
//         this.right = right;
//     }
// }

function remove(node, key) {
   if (!node) {
       return node;
   }

   if (node.value > key) {
       node.left = remove(node.left, key);
   } else if (node.value < key) {
       node.right = remove(node.right, key);
   } else if (node.value === key) {

       if (!node.left && !node.right) {
           return null;
       } else if (!node.left && node.right) {
           return node.right;
       } else if (node.left && !node.right) {
           return node.left;
       } else {
           const rightHandLeftMinNode = getLeftMin(node.right);
           node.value = rightHandLeftMinNode.value;
           node.right = remove(node.right, rightHandLeftMinNode.value);
       }
   }

   return node;
}

 function getLeftMin(root) {
    let currentNode = root;
    while (currentNode && currentNode.left) {
        currentNode = currentNode.left;
    }

    return currentNode;
 }

function test() {
    var node1 = new Node(2, null, null);
    var node2 = new Node(3, node1, null);
    var node3 = new Node(1, null, node2);
    var node4 = new Node(6, null, null);
    var node5 = new Node(8, node4, null);
    var node6 = new Node(10, node5, null);
    var node7 = new Node(5, node3, node6);
    var newHead = remove(node7, 10);
    console.assert(newHead.value === 5);
    console.assert(newHead.right === node5);
    console.assert(newHead.right.value === 8);
}

// test();
