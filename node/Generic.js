"use strict";
var NodeExercise;
(function (NodeExercise) {
    class Tree {
        constructor() {
            this.observers = [];
            this.nodes = [];
        }
        appendChild(_parent, _child) {
            _parent.appendChild(_child);
            if (this.observers)
                this.notifyObservers("child has been appended!" + _parent.getValue(), _parent, _child);
        }
        createNode(_value) {
            let newNode = new Node(_value);
            this.nodes.push(newNode);
            return newNode;
        }
        registerObserver(_observer) {
            this.observers.push(_observer);
        }
        removeObserver(_observer) {
            this.observers.splice(this.observers.indexOf(_observer), 1);
        }
        notifyObservers(_message, _parent, _child) {
            for (let observer of this.observers) {
                observer.alert(_message, _parent, _child);
            }
        }
    }
    NodeExercise.Tree = Tree;
    class Node {
        constructor(_value) {
            this.parent = null;
            this.children = [];
            this.value = _value || null;
            this.depthIndicator = "";
        }
        appendChild(_obj) {
            this.children.push(_obj);
            _obj.parent = this;
            _obj.depthIndicator = this.depthIndicator + "*";
        }
        removeChild(_obj) {
            let index = -1;
            index = this.children.indexOf(_obj);
            if (index > -1)
                this.children.splice(index, 1);
        }
        getValue() {
            return this.value;
        }
        printTree() {
            if (this.value != null) {
                console.log(this.depthIndicator + this.value.toString());
            }
            for (let i = 0; i < this.children.length; i++) {
                this.children[i].printTree();
            }
        }
    }
    NodeExercise.Node = Node;
})(NodeExercise || (NodeExercise = {}));
//# sourceMappingURL=Generic.js.map