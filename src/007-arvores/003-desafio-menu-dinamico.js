
const records1 = [
    "31,Site de investimentos,,",
    "33,Notícias,,31",
    "47,Nacionais,/noticias-nacionais,33",
    "49,Internacionais,/noticias-internacionais,33",
    "53,Economia,,31",
    "57,Bolsa de valores,,53",
    "61,Ações,/acoes,57",
    "65,Fundos imobiliários,/fii,57",
    "72,Indicadores,/indicadores,53",
    "75,Blog,/blog,53"
]

const records2 = [
    "722,Sistema de contabilidade,,",
    "812,Início,/,722",
    "825,Clientes,,722",
    "831,Cadastro,/clients,825",
    "835,Relatórios,/clients/reports,825",
    "903,Financeiro,,722",
    "912,Resumo,/fin/summary,903",
    "928,Relatórios,/fin/reports,903"
]

class MenuItem {
    #text;
    #route;
    #key;
    #parent;
    #parentKeyRef;
    #children;


    constructor(key, text, route, parentKeyRef) {
        this.#key = key;
        this.#text = text;
        this.#route = route;
        this.#parentKeyRef = parentKeyRef ? parentKeyRef : null;
        this.#parent = null;
        this.#children = [];
    }

    getText() { return this.#text; }

    getRoute() { return this.#route; }

    getKey() { return this.#key; }

    getParent() { return this.#parent; }

    getParentKeyRef() { return this.#parentKeyRef; }

    isLeaf() { return !this.#children.length; }

    _getChildren() { return this.#children; }

    _addChild(menuItem) {
        this.#children.push(menuItem);
        menuItem._setParent(this);
    }

    _setParent(parent) { this.#parent = parent; }
}

class GenericTree {
    #root;
    #size;

    constructor() {
        this.#root = null;
        this.#size = 0;
    }

    add(menuItem) {
        if (!menuItem || !menuItem.getKey()) throw new Error('Item Inválido');


        if (this.isEmpty() && !menuItem.getParentKeyRef()) {
            this.#root = menuItem;
            this._sizeIncrement();
            return;
        }

        const parent = this.#findItemMenuByKey(this.#root, menuItem.getParentKeyRef());
        parent._addChild(menuItem);
        this._sizeIncrement();
    }

    isEmpty() {
        return !this.#root;
    }

    _sizeIncrement() { this.#size++ }


    #findItemMenuByKey(menuItem, key) {
        if (menuItem.getKey() == key) return menuItem;
        for (const child of menuItem._getChildren()) {
            const item = this.#findItemMenuByKey(child, key);
            if (item) return item;
        }
        return null;
    }

    toStringFormat() {
        this.#printRecursive(this.#root, "");
    }

    #printRecursive(menuItem, prefix) {
        console.log(`${prefix}${menuItem.getText()} (${menuItem.getRoute() ? menuItem.getRoute() : 'null'})`);
        for (const child of menuItem._getChildren()) {
            this.#printRecursive(child, prefix + "\t");
        }
    }
}

function generateTree(menuTree, records) {
    for (rec of records) {
        const obj = rec.split(',');
        const menuItem = new MenuItem(obj[0], obj[1], obj[2], obj[3]);
        menuTree.add(menuItem);
    }
}

// records1
const menuTree1 = new GenericTree();
generateTree(menuTree1, records1);
menuTree1.toStringFormat();
console.log("\n");
// records2
const menuTree2 = new GenericTree();
generateTree(menuTree2, records2);
menuTree2.toStringFormat();
