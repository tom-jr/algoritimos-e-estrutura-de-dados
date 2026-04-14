class Node {
    #data;
    #next;
    constructor(data) {
        this.#data = data;
        this.#next = null;
    }
    getData() {
        return this.#data;
    }
    getNext() {
        return this.#next;
    }
    setNext(node) {
        this.#next = node;
    }

    hasNext() {
        return this.#next != null || this.#next != undefined;
    }
}

class LinkedList {
    #head;
    #size;
    constructor() {
        this.#head = null;
        this.#size = 0;
    }

    getHead() {
        return this.#head;
    }

    setHead(head) {
        this.#head = head;
    }

    get size() {
        return this.#size;
    }

    add(data) {
        const newNode = new Node(data);
        if (!this.getHead()) {
            this.setHead(newNode);
        } else {
            let current = this.getHead();

            while (current.hasNext()) {
                current = current.getNext();
            }
            current.setNext(newNode);
        }
        this.#size ++;
    }

    unshift(data) {
        if (this.getHead()) {
            const node = new Node(data);
            const headNode = this.getHead();
            this.setHead(node);
            this.getHead().setNext(headNode);
        } else {
            this.add(data);
        }
        this.#size ++;
    }

    insert(data, idx) {
        if (idx == 0) {
            this.unshift(data);
        }

        let node = this.get((idx - 1), true);
        if (node) {
            const aux = node.getNext();
            const newNode = new Node(data);
            node.setNext(newNode);
            newNode.setNext(aux);

        } else {
            this.add(data);
        }
    }

    get(idx, node = false) {
        if (!this.#size || idx > this.size || idx < 0) return undefined;
        let count = 0;
        let current = this.getHead();

        while (count != idx) {
            current = current.getNext();
            count++;
        }
        return node ? current : current.getData();
    }

    toString() {
        let current = this.getHead();
        let idx = 0;

        while (current) {
            console.log(`(${idx}) => ${current.getData()}`);
            current = current.getNext();
            idx++;
        }
    }

    indexOf(value) {
        let current = this.getHead();
        let idx = 0;
        while (current) {
            if (current.getData() === value) {
                return idx;
            }
            idx++;
            current = current.getNext();
        }
        return -1;
    }

    contains(value) {
        return this.indexOf(value) >= 0;
    }

    removeOf(idx) {
        if (idx == 0 && !this.isEmpty()) {
            const headData = this.get(idx);
            this.shift();
            return headData;
        }
        let current = this.get((idx - 1), true);

        if (current && current.hasNext()) {
            const nodeRemove = current.getNext();
            current.setNext(nodeRemove.getNext());
            nodeRemove.setNext(undefined);
            this.#size--;
            return nodeRemove.getData();
        }

        return undefined;
    }

    isEmpty() {
        let b = !this.#head
        return b;
    }

    shift() {
        const aux = this.#head;
        this.#head = aux.getNext();
        this.#size--;
    }

    remove(data) {
        const indexOf = this.indexOf(data);
        if (indexOf >= 0) {
            this.removeOf(indexOf);
            return true;
        }
        return false;
    }
}

// Use

const linkedList = new LinkedList();
linkedList.add(1);
linkedList.unshift(0);
linkedList.add(2);


linkedList.toString()

console.log('removed:', linkedList.remove(0));

linkedList.toString()

console.log('size:', linkedList.size);


