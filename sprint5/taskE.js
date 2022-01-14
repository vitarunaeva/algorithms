/**
 ДЕРЕВО ПОИСКА
 Гоша понял, что такое дерево поиска, и захотел написать функцию, которая определяет, является ли заданное дерево деревом поиска.
 Значения в левом поддереве должны быть строго меньше, в правом —- строго больше значения в узле.
 Помогите Гоше с реализацией этого алгоритма.
 */


class CNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function solution(root) {
    let previous = null;
    let current = root;
    const stack = [];

    while (stack.length || current) {
        while (current) {
            stack.push(current);
            current = current.left;
        }

        let s = stack.pop();

        if (previous && s.value <= previous.value) {
            return false;
        }

        previous = s;
        current = s.right;

    }
    return true;
}

function test() {
    var node1 = new CNode(1, null, null);
    var node2 = new CNode(4, null, null);
    var node3 = new CNode(3, node1, node2);
    var node4 = new CNode(8, null, null);
    var node5 = new CNode(5, node3, node4);
    console.log(solution(node5));
    node4.value = 5;
    console.log(!solution(node5));
}

// test()
