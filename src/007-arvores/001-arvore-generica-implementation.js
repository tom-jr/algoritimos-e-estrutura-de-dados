export class Node {
    #children;
    #element;
    #parent;

    constructor(el, node = null) {
        this.#element = el;
        this.#parent = node;
        this.#children = [];
    }

    _addChild(node) {
        this.#children.push(node);
        node._setParent(this);
    }

    element() {
        return this.#element;
    }

    _getChildren() {
        return this.#children;
    }

    _getParent() {
        return this.#parent;
    }

    _isLeaf() {
        return !this.#children.length;
    }

    _removeChild(node) {
        this.#children = this.#children.filter(item => item.element() !== node.element());
        node._setParent(null);
    }

    _setElement(el) {
        this.#element = el;
    }

    _setParent(node) {
        this.#parent = node;
    }
}

export class GenericThree {
    #root;
    #size;

    constructor() {
        this.#root = null;
        this.#size = 0;
    }


    //valida se a position é um node e se não foi removido da three.
    #validate(position) {
        if (!(position instanceof Node)) {
            throw new Error("Invalid Position type");
        }

        // um node será considerado removido se ele tiver apontando para ele  mesmo como pai.
        if (position._getParent() === position) {
            throw new Error("Removed Node");
        }
        return position;
    }

    size() {
        return this.#size;
    }

    isEmpty() {
        return this.#size === 0;
    }

    incrementSize() {
        this.#size++;
    }

    addElement(el, nodePosition = null) {
        if (!this.isEmpty() && !nodePosition) {
            throw new Error("Parent position can't be null for a non-empty three")
        }

        const nodeParent = nodePosition ? this.#validate(nodePosition) : null;
        const newNode = new Node(el);

        if (nodeParent) {
            nodeParent._addChild(newNode)
        } else {
            this.#root = newNode;
        }
        this.incrementSize();
        return newNode;
    }

    //retornamos uma copia dos children para não expor os nodes.
    children(position) {
        const node = this.#validate(position);
        return [...node._getChildren()];
    }

    // retorna os elementos dos filhos de um node.
    elements() {
        const list = [];
        this.#collectElements(this.#root, list);
        return list;
    }

    #collectElements(node, list) {
        list.push(node.element());
        for (const item of node._getChildren()) {
            this.#collectElements(item, list);
        }
    }

    positions() {
        const list = [];
        this.#collectPositions(this.#root, list);
        return list;
    }

    #collectPositions(node, list) {
        list.push(node);
        for (const item of node._getChildren()) {
            this.#collectPositions(item, list);
        }
    }

    find(el) {
        if (!el) return null;
        return this.#findElement(this.#root, el);
    }

    #findElement(node, el) {
        if (!node) return null;
        if (node.element() === el) return node;

        for (const item of node._getChildren()) {
            const found = this.#findElement(item, el);
            if (found) return found;
        }
        return null;
    }

    isExternal(position) {
        const node = this.#validate(position);
        return node._isLeaf();
    }

    isRoot(position) {
        const node = this.#validate(position);
        return node === this.#root;
    }

    parent(position) {
        const node = this.#validate(position);
        return node._getParent();
    }

    replace(position, el) {
        const node = this.#validate(position);
        node._setElement(el);
    }

    remove(position) {
        const node = this.#validate(position);
        if (node === this.#root) {
            this.#root = null;
            this.#size = 0;
        } else {
            const parent = node._getParent();
            parent._removeChild(node);
        }
        this.#markAsRemoved(node);
        this.#sizeDecrement(this.#subtreeSize(node));
    }

    #sizeDecrement(decrement = 1) {
        this.#size -= decrement;
    }


    #markAsRemoved(node) {
        node._setParent(node);
        for (const child of node._getChildren()) {
            this.#markAsRemoved(child);
        }
    }

    #subtreeSize(node) {
        let size = 0;
        for (const child of node._getChildren()) {
            size += this.#subtreeSize(child);
        }
        return 1 + size;
    }

    root() {
        return this.#root;
    }
}