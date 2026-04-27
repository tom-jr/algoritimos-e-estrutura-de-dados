# Double linked list 
Ou lista duplamente encadeada é um tipo de lista onde cada node tem referência ao seu antecessor e também ao seu sucessor.

## Node
forma do por:
- Data: dados/value do node.
- next: referência ao node sucessor.
- next: referência ao node antecessor.

## Vantagens
- **Flexibilidade na navegação:** podemos navegar em ambas as direções, facilitando operações como inserção e remoção de elementos em qualquer posição da lista.
- **Eficiência em operações:** não é necessário movimentar elementos durante inserção e remoção, apenas reorganizar as referências.


null newNode null
prev node next

1 - prev newNode null
2 - newNode node next
3 - prev newNode node

res --> prev - newNode - node - next



4 el
1,2,3,4

1,4 igual el?  se 4 for return 4-1 = 3. Index 3

unde head next


### inverter listar

null-'A'-'B',  'A'-'B'-C',   'B'-'C'-null

null-'C'-'B', 'C'-'B'-'A', 'B'-'A'-null