namespace NodeExercise{
    export class Tree<T> {
        parent: Tree<T>;
        children: Tree<T>[];
        value: T;
        depthIndicator: String;

        constructor(_value?: T) {
            this.parent = null;
            this.children = [];
            this.value = _value || null;
            this.depthIndicator = "";
        }

        createNode(_value:T) {
            return new Tree<T>(_value);
        }

        appendChild(_obj: Tree<T>) {
            this.children.push(_obj);
            _obj.parent = this;
            _obj.depthIndicator = this.depthIndicator + "*";
        }

        removeChild(_obj: Tree<T>) {
            let index:number = -1;
            index = this.children.indexOf(_obj);
            if(index > -1)
                this.children.splice(index,1);
        }

        printTree() {
            if(this.value != null) {
                console.log(this.depthIndicator + this.value.toString());
            }
            for(let i:number = 0; i < this.children.length; i++) {
                this.children[i].printTree();
            }
        }
    }
}