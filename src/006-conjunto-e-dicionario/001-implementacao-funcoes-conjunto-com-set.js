// add, remove, union, intersection, difference

//ADD
const A = new Set([1, 2, 3, 4, 5, 6]);
const B = new Set([5, 6, 7, 8, 9, 10]);

console.log('A: ', A);
console.log('B: ', B);
console.log('###\n');

// REMOVE
A.delete(1);
B.delete(10);

console.log('A: ', A);
console.log('B: ', B);
console.log('###\n');

//CONTAINS
console.log('A has 7 ? ',A.has(7));
console.log('B has 1 ? ',A.has(1));
console.log('###\n');


// UNION
const C = new Set([...A,...B]);
console.log('A UNION B', C);
console.log('###\n');

//INTERSECTION
const D = [...A].filter(i => B.has(i));
console.log('A INTERSECTION B',D);
console.log('###\n');


//DIFFERENCE
const E = [...A].filter(i => !B.has(i));
console.log('A DIFFERENCE B',E);
console.log('###\n');