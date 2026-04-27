class Node {
    #data;
    #next;
    #prev;

    constructor(data) {
        this.#data = data;
        this.#next = null;
        this.#prev = null;
    }

    getNext() {
        return this.#next;
    }

    getPrev() {
        return this.#prev;
    }

    hasNext() {
        return !!this.getNext();
    }

    setNext(node) {
        this.#next = node;
    }
    setPrev(node) {
        this.#prev = node;
    }
    getData() {
        return this.#data;
    }
}

export class DoublyLinkedList {
    #head;
    #tail;
    #size;

    constructor() {
        this.#head = undefined;
        this.#tail = undefined;
        this.#size = 0;
    }

    getHead() { return this.#head; }

    getTail() { return this.#tail; }

    toString(reverse = false) {
        if (!this.getHead()) return;
        let currentNode = reverse ? this.getTail() : this.getHead();
        let count = 0;
        if (!currentNode) {
            console.log('List is empty');
            return;
        }
        while (currentNode) {
            console.log(`(${count}) => ${currentNode.getData()}`);
            currentNode = reverse ? currentNode.getPrev() : currentNode.getNext();
            count++;
        }
    }

    sizeIncrement() {
        this.#size ++;
    }

    sizeDecrement() {
        this.#size --;
    }

    size() { return this.#size; }

    clear() {
        this.#tail = undefined;
        this.#head = undefined;
        this.#size = 0;
    }

    // add an element
    add(data) {
        const node = new Node(data);
        if (!this.getHead()) {
            this.#head = node;
        } else {
            let tail = this.getTail();
            tail.setNext(node);
            node.setPrev(tail);
        }
        this.#tail = node;
        this.sizeIncrement();
    }

    // add at start
    unshift(data) {
        if (!this.getHead()) {
            this.add(data);
        } else {
            const node = new Node(data);
            this.getHead().setPrev(node);
            node.setNext(this.getHead());
            this.#head = node;
            this.sizeIncrement();
        }

    }

    //get data element by index
    get(idx) {
        if (idx < 0 || idx >= this.size()) {
            throw new Error('Index out of bounds');
        }
        else return this.getNodeBy(idx).getData();
    }

    // get node by
    getNodeBy(idx) {
        if (!this.getHead()) return;
        const isLeftHalf = idx < Math.floor(this.#size / 2);
        let currentNode = isLeftHalf ? this.getHead() : this.getTail();
        let currentIdx = isLeftHalf ? 0 : this.#size - 1;

        while (currentIdx !== idx) {
            currentNode = isLeftHalf ? currentNode.getNext() : currentNode.getPrev();
            currentIdx = isLeftHalf ? currentIdx + 1 : currentIdx - 1;
        }
        return currentNode;
    }

    // insert at index
    addAt(idx, data) {
        if (idx <= 0) {
            this.unshift(data);
            return;
        }

        if (idx >= this.size()) {
            this.add(data);
            return;
        }

        const newNode = new Node(data);
        const node = this.getNodeBy(idx);
        newNode.setPrev(node.getPrev());
        node.getPrev().setNext(newNode);
        node.setPrev(newNode);
        newNode.setNext(node);
        this.sizeIncrement();

    }

    //indexOf
    indexOf(data) {
        if (this.#size == 0) {
            return -1;
        }
        let i = 0;
        let j = this.#size - 1;

        let minorNode = this.getHead();
        let maxNode = this.getTail();

        while (j >= 0 || i < this.#size) {
            if (minorNode.getData() == data) {
                return i;
            }
            if (maxNode.getData() == data) {
                return j;
            }

            minorNode = minorNode.getNext() ? minorNode.getNext() : undefined;
            maxNode = maxNode.getPrev() ? maxNode.getPrev() : undefined;
            i++;
            j--;
        }
        return -1;
    }

    // removeFirs
    shift() {
        if (!this.getHead()) {
            return undefined;
        }
        const head = this.getHead();
        this.#head = head.getNext() ? head.getNext() : undefined;
        if (this.getHead()) {
            this.getHead().setPrev(undefined);
        }
        this.sizeDecrement();
        return head.getData();
    }

    //remove last
    pop() {
        if (!this.getTail()) return undefined;

        if(!this.getTail().getPrev()) {
            this.clear();
            return;
        }

        this.#tail = this.#tail.getPrev() ? this.#tail.getPrev() : undefined;
        if (this.getTail()) {
            this.getTail().setNext(undefined);
        }
        this.sizeDecrement();
    }

    // remove at index
    removeAt(idx) {
        const node = this.getNodeBy(idx);

        if (!node) return undefined;

        const prev = node.getPrev();
        const next = node.getNext();

        if (!prev) {
            return this.shift();
        }

        if (!next) {
            return this.pop()
        }

        next.setPrev(prev);
        prev.setNext(next);

        this.sizeDecrement();
    }

    //removeByData
    removeByData(data) {
        const idx = this.indexOf(data);

        if (idx < 0) return undefined;

        return this.removeAt(idx);
    }

    // invert list
    reverse() {
        if (!this.getHead()) return;
        const tail = this.getTail();

        let current = tail;

        while (current) {
            if (!current.getPrev()) {
                this.#tail = current;
            }
            const next = current.getPrev();
            const prev = current.getNext();

            current.setPrev(prev ? prev : undefined);
            current.setNext(next);

            current = current.getNext();
        }
        this.#head = tail;
    }

    //    A,B,C,D,E, F

}