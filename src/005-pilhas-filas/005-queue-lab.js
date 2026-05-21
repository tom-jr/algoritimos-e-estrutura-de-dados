import { Queue } from "./005-queue-implementation.js";

const queue = new Queue(5);

console.log('queue add 1,3,4,5,6');

queue.add(1);
queue.add(2);
queue.add(3);
queue.add(4);
queue.add(5);

console.log('queue.isFull(): ',queue.isFull()); // true
console.log('queue.peek(): ',queue.peek()); // 1
console.log('queue.isFull(): ',queue.isFull()); // true
console.log('queue try add 6');

queue.add(6); // Não será adicionado, pois a fila está cheia
console.log('queue.peek(): ',queue.peek()); // 1

console.log('queue.remove(): ',queue.remove()); // 1
console.log('queue.remove(): ',queue.remove()); // 2
console.log('queue.remove(): ',queue.remove()); // 3
console.log('queue.remove(): ',queue.remove()); // 4
console.log('queue.remove(): ',queue.remove()); // 5
console.log('queue.remove(): ',queue.remove()); // undefined (fila vazia)
console.log('queue.isEmpty(): ',queue.isEmpty()); // true
