import { BinarySearchTreeSet } from "./002-BST-conjunto-implementation.js";

const bstSet = new BinarySearchTreeSet();

console.log("\nSize: ", bstSet.size());
console.log("\nIs empty ?: ", bstSet.isEmpty());



console.log('\nAdding 2 keys[52, 17, 11, 33, 55, 83, 14, 31,46, 23, 26]');
bstSet.addAll([52,17,11,14,33,31, 23,26,46, 67, 55,  83]);

console.log("\nSize: ", bstSet.size());
console.log("\nIs empty ?: ", bstSet.isEmpty());


console.log('\nGetting keys');
console.log('Keys: ', bstSet.keys());

console.log('\nChecking if keys are contained');
console.log('Contains 23?: ', bstSet.contains(23));
console.log('Contains 100?: ', bstSet.contains(100));

console.log('\nString representation:');
console.log(bstSet.toStringFormat());

console.log('\nSize before removal: ', bstSet.size());

console.log('\nRemoving keys');
console.log('Removed 52?: ', bstSet.remove(52));
console.log('\nSize after removal: ', bstSet.size());



console.log('\nString representation:');
console.log(bstSet.toStringFormat());

