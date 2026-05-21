export class Queue {
    #queue;
    #count;
    #size;
    constructor(size = 100) {
        this.#count = 0;
        this.#size = size;
        this.#queue = [];
    }

    countIncrement() {
        this.#count++;
    }

    countDecrement() {
        this.#count--;
    }

    isEmpty() {
        return !this.#queue.length && this.#count == 0;
    }

    isFull() {
        return this.#count === this.#size;
    }

    add(data) {
        if (!this.isFull()) {
            this.#queue.push(data);
            this.countIncrement();
        }
    }

    remove() {
        if (!this.isEmpty()) {
            this.countDecrement();
            return this.#queue.shift();
        }
        return undefined;
    }

    peek() {
        if (!this.isEmpty()) {
            return this.#queue[0];
        }
        return undefined
    }
}