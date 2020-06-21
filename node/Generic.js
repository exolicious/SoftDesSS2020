"use strict";
var NodeExercise;
(function (NodeExercise) {
    class Tree {
        constructor(_value) {
            this.parent = null;
            this.children = [];
            this.value = _value || null;
            this.depthIndicator = "";
        }
        createNode(_value) {
            return new Tree(_value);
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
        printTree() {
            if (this.value != null) {
                console.log(this.depthIndicator + this.value.toString());
            }
            for (let i = 0; i < this.children.length; i++) {
                this.children[i].printTree();
            }
        }
    }
    NodeExercise.Tree = Tree;
})(NodeExercise || (NodeExercise = {}));
//# sourceMappingURL=Generic.js.map