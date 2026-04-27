import { DoublyLinkedList } from "./002-implementation-doubly-linked-list.js";

const dLinkedList = new DoublyLinkedList();

dLinkedList.add('A');
// dLinkedList.add('B');
// dLinkedList.add('C');
// dLinkedList.add('D');
// dLinkedList.add('E');
// dLinkedList.add('F');
// dLinkedList.add('G');
// dLinkedList.add('H');

printList(dLinkedList);

//test here
testeRemoveLast(dLinkedList)

printList(dLinkedList);

//printList(dLinkedList, true)

function printList(list, reverse = false) {
    console.log(reverse ? '\ndesc:' : '\nasc:');
    list.toString(reverse);

    if(list.size() <= 0) return;
    console.log('\nhead: ', list.getHead().getData());
    console.log('tail: ', list.getTail().getData());
    console.log('size:', list.size());
}


function testeReversed(list) {
    console.log('\n reversed');
    list.reverse()
}

function testeRemoveByData(list) {
    console.log('\nremoveByData: D');
    list.removeByData('D');
}

function testeRemoveAt(list) {
    console.log('\nremoveAt: 3');
    list.removeAt(3);
}

function testeAddAt(list) {
    console.log('\naddAt:');
    console.log(`addAt(2, 'X')`);
    console.log(`addAt(-1, '0')`);
    console.log(`addAt(111, '1')`);


    list.addAt(2, 'X');
    list.addAt(-1, '0');
    list.addAt(111, '1');
    printList(list);
}

function testeIndexOf(list) {
    const res = list.indexOf('E');
    console.log('index: ', res);

}

function testeRemoveFirst(list) {
    console.log('\nremoveFirst:');
    list.shift();
    if(!list.getHead()) return
    console.log(list.getHead().getPrev())
}

function testeRemoveLast(list) {
    console.log('\nremoveLast:');
    list.pop();
    if(!list.getHead()) return;
    console.log(list.getTail().getNext())
}
