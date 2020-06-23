"use strict";
var NodeExercise;
(function (NodeExercise) {
    let tree = new NodeExercise.Tree();
    let root = tree.createNode("root");
    var child1 = tree.createNode("child1");
    var child2 = tree.createNode("child2");
    let obs1 = new NodeExercise.TreeObserver();
    tree.registerObserver(obs1);
    tree.appendChild(root, child1);
    tree.appendChild(root, child2);
    var grand11 = tree.createNode("grand11");
    var grand12 = tree.createNode("grand12");
    var grand13 = tree.createNode("grand13");
    tree.appendChild(child1, grand11);
    tree.appendChild(child1, grand12);
    tree.appendChild(child1, grand13);
    var grand21 = tree.createNode("grand21");
    tree.appendChild(child2, grand21);
    child1.removeChild(grand12);
    root.printTree();
})(NodeExercise || (NodeExercise = {}));
//# sourceMappingURL=main.js.map