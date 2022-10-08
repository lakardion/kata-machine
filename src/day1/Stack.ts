type Node<T> = {
    next?: Node<T>;
    value: T;
};
export default class Stack<T> {
    public length: number;

    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        this.length++;
        if (!this.head) {
            this.head = { value: item };
            return;
        }
        const prevHead = this.head;
        this.head = { value: item, next: prevHead };
    }
    pop(): T | undefined {
        if (!this.head) return undefined;
        this.length--;
        const prevHeadValue = this.head.value;
        this.head = this.head.next;
        return prevHeadValue;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
