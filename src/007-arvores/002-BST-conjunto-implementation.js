class Node {
    #key;
    #left;
    #right;
    #parent;

    constructor(key, parent) {
        this.#key = key;
        this.#parent = parent;
        this.#left = null;
        this.#right = null;
    }

    isSentinel() {
        return this.#key === null;
    }

    getKey() {
        return this.#key;
    }

    getLeft() {
        return this.#left;
    }

    getRight() {
        return this.#right;
    }

    setLeft(node) {
        this.#left = node;
    }

    setRight(node) {
        this.#right = node;
    }

    getParent() {
        return this.#parent;
    }

    _setParent(node) {
        this.#parent = node;
    }

    _setKey(key) {
        this.#key = key;
    }

    isRoot() {
        return this.#parent === null;
    }
}

export class BinarySearchTreeSet {

    #root;
    #size;

    constructor(keys = []) {
        this.#root = new Node(null, null);
        this.#size = 0;
        this.addAll(keys);
    }

    add(key) {
        if (!key) {
            throw new Error("Key cannot be null or undefined");
        }
        if (this.isEmpty()) {
            this.#root = new Node(key, null);
            this.#root.setLeft(new Node(null, this.#root));
            this.#root.setRight(new Node(null, this.#root));
            this.#size++;
            return;
        }

        let node = this.#findKeyLocation(this.#root, key);
        if (node.isSentinel()) {
            const newNode = new Node(key, node.getParent());
            newNode.setLeft(new Node(null, newNode));
            newNode.setRight(new Node(null, newNode));


            const parent = node.getParent();
            if (key < parent.getKey()) {
                parent.setLeft(newNode);
            } else {
                parent.setRight(newNode);
            }

            this.#size++;
        }

    }


    addAll(keys = []) {
        for (const key of keys) {
            this.add(key);
        }
    }


    contains(key) {
        return this.#findKeyLocation(this.#root, key).isSentinel() ? false : true;
    }


    difference(otherSet) {
        const res = []
        const k1 = this.keys();
        const k2 = otherSet.keys();

        let len = k1.length > k2.length ? k1.length : k2.length;


        let i = 0;
        let j = 0;
        while (i < len) {
            if (k1[i] != k2[j]) {
                res.push(k1[i])
            } else {
                j++;

            }
            i++;
        }

        while (j < k2.length) {
            res.push(k2[j])
            j++
        }

        return new BinarySearchTreeSet(res);


    }
    intersection(otherSet) {
        const res = []
        const k1 = this.keys();
        const k2 = otherSet.keys();

        let len = k1.length > k2.length ? k1.length : k2.length;


        let i = 0;
        let j = 0;
        while (i < len) {
            if (k1[i] == k2[j]) {
                res.push(k2[j])
                j++;
            }
            i++;
        }

        return new BinarySearchTreeSet(res);
    }

    isEmpty() { return this.#size === 0; }

    keys() {
        const keys = [];
        this.#collectKeys(this.#root, keys);
        return keys;

    }

    #collectKeys(node, keys) {
        if (node.isSentinel()) return;
        this.#collectKeys(node.getLeft(), keys);
        keys.push(node.getKey());
        this.#collectKeys(node.getRight(), keys);
    }

    remove(key) {
        if (!key) throw new Error("Key cannot be null or undefined");
        let nodeToRemove = this.#findKeyLocation(this.#root, key);
        if (nodeToRemove.isSentinel()) return false;

        if (!nodeToRemove.getLeft().isSentinel() && !nodeToRemove.getRight().isSentinel()) {
            const minRightNode = this.#findMinNode(nodeToRemove.getRight());
            nodeToRemove._setKey(minRightNode.getKey());
            nodeToRemove = minRightNode;
        }

        const child = !nodeToRemove.getLeft().isSentinel() ? nodeToRemove.getLeft() : nodeToRemove.getRight();

        if (nodeToRemove.isRoot()) {
            this.#root = child;
        } else {
            const parent = nodeToRemove.getParent();
            child._setParent(parent);
            if (key < parent.getKey()) {
                parent.setLeft(child);
            } else {
                parent.setRight(child);
            }
        }
        this.#size--;
        return true;
    }


    size() { return this.#size; }

    union(otherSet) {
        const keys = [...this.keys(), ...otherSet.keys()]
        return new BinarySearchTreeSet(keys);
    }

    #findKeyLocation(node, key) {
        while (!node.isSentinel()) {
            if (node.getKey() === key) {
                return node;
            } else if (key < node.getKey()) {
                node = node.getLeft();
            } else {
                node = node.getRight();
            }
        }
        return node;
    }

    #findMinNode(node) {
        return node.getLeft().isSentinel() ? node : this.#findMinNode(node.getLeft());
    }

    toStringFormat() {
        let sb = [];
        this.toStringFormatHelper(this.#root, 0, sb);
        return sb.join("");
    }

    toStringFormatHelper(node, depth, sb) {
        if (!node.isSentinel()) {
            this.toStringFormatHelper(node.getRight(), depth + 1, sb);
            let space = "\t".repeat(depth);
            let parent = (depth > 0) ? node.getParent().getKey().toString() : "";
            sb.push(`${space}(${node.getKey()})${parent}\n`);
            this.toStringFormatHelper(node.getLeft(), depth + 1, sb);
        }
    }
}
