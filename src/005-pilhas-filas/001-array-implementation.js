// Must to follow the LIFO structure
export class StackArr {
    #size;
    #top;
    #arr;

    constructor(size = 100) {
        this.#size = size;
        this.#top = -1;
        this.#arr = [];
    }

    incrementTop() {
        this.#top++;
    }

    decrementTop() {
        this.#top--;
    }

    isEmpty() {
        return this.#top < 0 || !this.#arr.length;
    }

    isFull() {
        return (this.#top + 1) == this.#size;
    }

    push(data) {
        if (this.isFull()) {
            throw new Error("Is already full");
        }
        this.#arr.push(data)
        this.incrementTop();
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Is already empty");
        }
        const res = this.peek();
        this.decrementTop();
        return this.#arr.pop();
    }

    peek() {
        if (this.isEmpty()) return undefined;
        return this.#arr[this.#top];
    }

    count() {
        return (this.#top + 1);
    }

    // [A,B,C,D,E,F]
}