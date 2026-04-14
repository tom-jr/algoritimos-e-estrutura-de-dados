# Lista Encadeada (Linked List)

Ou lista encadeada, é um tipo de lista onde cada elemento (nó) aponta para seu sucessor na lista.

## Nó (Node)

Um nó é composto por duas informações principais:
- **data**: o dado que representa o valor do nó.
- **next**: referência ao próximo nó.

Cada nó da lista é alocado dinamicamente à medida que os dados são inseridos. Não são alocados de forma sequencial como os arrays.

### Vantagens
- Melhor utilização da memória.
- Não é necessário movimentar os elementos nas operações de inserção e remoção.

### Desvantagens
- Acesso indireto aos elementos.
- Necessidade de percorrer a lista para acessar um nó.

## Conceito da Implementação de uma Lista Encadeada

1. Criamos um objeto `Node` para armazenar `data` e `next`.
2. Criamos um objeto `LinkedList` para armazenar o **head** (primeiro nó da lista encadeada) e o `size`. Nele implementamos o método `add`, para adicionar novos nós na lista encadeada.
3. Esse método precisa encapsular o novo valor em um nó e atribuí-lo ao `head` caso não exista. Se já existir um `head`, ele deve percorrer entre os nós até chegar a um nó que não possua `next` e ser atribuído a esse `next`.
