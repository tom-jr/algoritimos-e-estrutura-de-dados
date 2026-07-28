import { BinarySearchTreeSet } from "./002-BST-conjunto-implementation.js";

const bst1 = new BinarySearchTreeSet([1,2,3,4]);
const bst2 = new BinarySearchTreeSet([3,4,5,6]);

console.log(`\nBST 1: ${bst1.keys()}`);
console.log(`\nBST 2: ${bst2.keys()}`);

const bstUnion = bst1.union(bst2);

console.log(`\nUnion BST 1 & BST 2: ${bstUnion.keys()}`);

const bstIntersection = bst1.intersection(bst2);

console.log(`\nIntersection BST 1 & BST 2: ${bstIntersection.keys()}`);


const bstDiff = bst1.difference(bst2);

console.log(`\nDiff BST 1 & BST 2: ${bstDiff.keys()}`);


