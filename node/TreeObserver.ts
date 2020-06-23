namespace NodeExercise {
    export class TreeObserver<T> {
        alert(_message: string, _parent: Node<T>, _child: Node<T>): void {
            console.log(_message);
        }
    }
}