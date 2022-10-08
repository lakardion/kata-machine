type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;

    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        this.length++;
        const newTail = { value: item };
        if (!this.head) {
            this.head = newTail;
            return;
        }
        if (!this.tail) {
            this.tail = newTail;
            this.head.next = this.tail;
            return;
        }
        const prevTail = this.tail;
        prevTail.next = newTail;
        this.tail = newTail;
    }
    deque(): T | undefined {
        if (!this.head) return undefined;
        const value = this.head.value;
        this.head = this.head.next;
        this.length--;
        return value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
