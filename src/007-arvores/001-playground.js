import { Node, GenericThree } from './001-arvore-generica-implementation.js';

/**
 * Aparentemente uma Generic three consegue executar o método children para um position/node de outra GenericThree 
 */

const myTree = new GenericThree();
console.log('size: ', myTree.size());


const root = myTree.addElement("Livro Azul");
console.log('size: ', myTree.size());


const introNode = myTree.addElement("Introdução", root);
const cap1Node = myTree.addElement("Capítulo I", root);
const cap2Node = myTree.addElement("Capítulo II", root);

console.log('size: ', myTree.size());


myTree.addElement("Pra quem é este livro?", introNode);
myTree.addElement("Agradecimentos", introNode);

myTree.addElement("Conceitos", cap1Node);
myTree.addElement("Aplicações", cap1Node);

const cap2MethodsNode = myTree.addElement("Métodos", cap2Node);
myTree.addElement("Problema Terreno", cap2Node);
myTree.addElement("Problema carros", cap2Node);

myTree.addElement("Método recursivo", cap2MethodsNode);
myTree.addElement("Método imperativo", cap2MethodsNode);
console.log('size: ', myTree.size());

printThreeDFS(root, myTree);

printTreeBFS(myTree);

// print elements of a tree
console.log("#####\n\n\tElements of the tree:");

for (const el of myTree.elements()) {
    console.log(el);
}

// print positions of a tree
console.log("#####\n\n\tPositions of the tree:");

for (const pos of myTree.positions()) {
    console.log(pos.element());
}

console.log("#####\n\n\tTest find, if is external, if is root and get parent elements:");

findTeste(myTree, ["Livro Azul", "Introdução", "Capítulo I", "Capítulo II", "Pra quem é este livro?", "Agradecimentos", "Not exist", "bla bla"]);


console.log('#####\n\n\tTest replace element:');
myTree.replace(introNode, "Introdução - Nova versão");
console.log('replacing Introdução to Introdução - Nova versão');

printThreeDFS(root, myTree);


console.log('#####\n\n\tTest remove subtree:');
console.log('size before: ', myTree.size());

myTree.remove(cap1Node);
console.log('removing Capítulo I and its children');
console.log('size after: ', myTree.size());
printThreeDFS(root, myTree);





function findTeste(three, elements) {
    for (const el of elements) {
        const found = three.find(el);
        console.log(`\nElement: ${el}, Found: ${!!found}`);
        if (found) {
            console.log(`Is external: ${three.isExternal(found)}`);
            console.log(`Is root: ${three.isRoot(found)}`);
            console.log(`Parent: ${three.parent(found)?.element()}`);
        }

    }
}

function printTreeBFS(myTree) {
    if (myTree.isEmpty()) {
        console.log(`\n\n\tTree is empty`);
        return;
    }
    console.log(`\n\n\tTree structure in BFS:`);
    const queue = [];
    queue.push(myTree.root());

    while (queue.length) {
        const position = queue.shift();
        console.log(position.element());
        queue.push(...position._getChildren());
    }
}

function printThreeDFS(root, three) {
    console.log(`\n\n\tTree structure in DFS:`);
    printThreeRecursive(root, three);
}
function printThreeRecursive(node, three, depth = 0) {
    console.log(`${depth > 0 ? "\t".repeat(depth) : ""}${node.element()}`);

    for (const item of three.children(node)) {
        printThreeRecursive(item, three, depth + 1);
    }
}