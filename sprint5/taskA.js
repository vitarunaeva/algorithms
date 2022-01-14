/**
 Лампочки
 Гоша повесил на стену гирлянду в виде бинарного дерева, в узлах которого находятся лампочки. У каждой лампочки есть своя яркость. Уровень яркости лампочки соответствует числу, расположенному в узле дерева.
 Помогите Гоше найти самую яркую лампочку в гирлянде, то есть такую, у которой яркость наибольшая.
 */


// Comment it before submitting
 class CNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


function solution(root) {
     let maxValue = root.value;

     if (root.left) {
         maxValue = Math.max(maxValue, solution(root.left));
     }

     if (root.right) {
         maxValue = Math.max(maxValue, solution(root.right));
     }
     return maxValue;
}


function test() {
    var node1 = new CNode(1);
    var node2 = new CNode(-5);
    var node3 = new CNode(3);
    node3.left = node1;
    node3.right = node2;
    var node4 = new CNode(2);
    node4.left = node3;
    console.assert(solution(node4) === 3);
}

//
