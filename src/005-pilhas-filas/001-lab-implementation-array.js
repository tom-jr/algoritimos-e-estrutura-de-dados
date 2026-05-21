import { StackArr }  from "./001-array-implementation.js";

const stack01 = new StackArr();
testStackLIFO(stack01);



function testStackLIFO(stack01) {

    console.log("Stack vazia?", stack01.isEmpty()); // true

    // PUSH
    stack01.push(10);
    stack01.push(20);
    stack01.push(30);

    console.log("Quantidade:", stack01.count()); // 3
    console.log("Topo (peek):", stack01.peek()); // 30

    // POP (LIFO: último a entrar, primeiro a sair)
    console.log("Removido:", stack01.pop()); // 30
    console.log("Removido:", stack01.pop()); // 20

    console.log("Topo agora:", stack01.peek()); // 10
    console.log("Quantidade:", stack01.count()); // 1

    // PUSH novamente
    stack01.push(40);
    console.log("Topo:", stack01.peek()); // 40

    // Esvaziar
    console.log("Removido:", stack01.pop()); // 40
    console.log("Removido:", stack01.pop()); // 10

    console.log("Stack vazia?", stack01.isEmpty()); // true

    // Teste de underflow (opcional)
    console.log("Pop em stack vazia:", stack01.pop()); // null/undefined/erro esperado

    // Teste de overflow (se tiver limite)
    while (!stack01.isFull()) {
        stack01.push(1);
    }
    console.log("Stack cheia?", stack01.isFull()); // true
    console.log('count: ', stack01.count());
    
}

// Executar teste
