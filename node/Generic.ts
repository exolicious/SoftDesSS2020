namespace NodeExercise {
    export class Tree<T> {
        observers: TreeObserver<T>[];
        nodes: Node<T>[];
        
        constructor() {
            this.observers = [];
            this.nodes = [];
        }

        public appendChild(_parent: Node<T>, _child: Node<T>): void {
            _parent.appendChild(_child);
            if(this.observers)
                this.notifyObservers("child has been appended!" + _parent.getValue(), _parent, _child);
        }

        public createNode(_value: T): Node<T>{
             let newNode: Node<T> = new Node<T>(_value);
             this.nodes.push(newNode);
             return newNode;
        }

        public registerObserver(_observer: TreeObserver<T>): void {
            this.observers.push(_observer);
        }

        public removeObserver(_observer: TreeObserver<T>): void {
            this.observers.splice(this.observers.indexOf(_observer), 1);
        }

        public notifyObservers(_message: string, _parent: Node<T>, _child: Node<T>): void {
            for (let observer of this.observers) {
                observer.alert(_message, _parent, _child);
            }
        }

    }
    export class Node<T> {
        parent: Node<T>;
        children: Node<T>[];
        value: T;
        depthIndicator: String;
        
        constructor(_value?: T) {
            this.parent = null;
            this.children = [];
            this.value = _value || null;
            this.depthIndicator = "";
        }

        public appendChild(_obj: Node<T>): void {
            this.children.push(_obj);
            _obj.parent = this;
            _obj.depthIndicator = this.depthIndicator + "*";
        }

        public removeChild(_obj: Node<T>): void{
            let index:number = -1;
            index = this.children.indexOf(_obj);
            if(index > -1)
                this.children.splice(index, 1);
        }

        public getValue(): T {
            return this.value;
        }

        public printTree(): void{
            if(this.value != null) {
                console.log(this.depthIndicator + this.value.toString());
            }
            for(let i:number = 0; i < this.children.length; i++) {
                this.children[i].printTree();
            }
        }
       
    }
}