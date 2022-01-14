/**
 СБАЛАНСИРОВАННОЕ ДЕРЕВО
 Гоше очень понравилось слушать рассказ Тимофея про деревья. Особенно часть про сбалансированные деревья.
 Он решил написать функцию, которая определяет, сбалансировано ли дерево.
 Дерево считается сбалансированным, если левое и правое поддеревья каждой вершины отличаются по высоте не больше, чем на единицу.
 */


 class CNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function solution(root) {
    if (!root) {
        return true;
    }

    const left = getHeight(root.left);
    const right =  getHeight(root.right);
    if (Math.abs(left - right) < 2 && solution(root.left) && solution(root.right)) {
        return true;
    }

    return false;
}

function getHeight(root) {
     if (!root) {
         return 0;
     }

     return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
}

function test() {
    var node1 = new CNode(1);
    var node2 = new CNode(-5);
    var node3 = new CNode(3);
    node3.left = node1;
    node3.right = node2;
    var node4 = new CNode(10);
    var node5 = new CNode(2);
    node5.left = node3;
    node5.right = node4;
    console.assert(solution(node5));
}

// test();
