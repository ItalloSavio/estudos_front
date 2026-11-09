Call stack: Pilha de funções que estão sendo executadas agora.

Stack trace: Uma "foto" do call stack no momento do erro.

Como funciona call stack: Quando uma função é chamada chamada, ela entra no topo da pulha. Quando termina, sai. A última a entrar é a primeira a sair. Recursão infinita enche a pilha e gera: Maximum call stack size exceeded.

Execution context: É o ambiente em que um trecho de código roda: guarda as variáveis e funções daquele escopo, a ligação com o escopo de fora e o valor de this.

Tipos: existe um contexto global, criado uma vez, e um novo contexto de função a cada chamada.

Duas fases: na criação, as declarações são registradas, e é aqui que acontece o hoisting da sessão passada. Na execução, o código roda linha a linha e os valores são atribuídos.

Ligação entre os dois: o que a call stack empilha são execution contexts.

Exemplo:
```ts

function primeira() {
    console.log("1");
    segunda();
    console.log("3");
}

function segunda() {
    console.log("2");
}

primeira();
```` -- Executa: 1, 2, 3

Ordem da pilha durante a execução: 
1. Global (O que tiver fora da função ou escopo de bloco)
2. Global e primeira (Executa a função primeira)
3. Global, primeira e segunda(Executa a segunda função)
4. Global e primeira (Continua o resto da função)
5. Global (Executa o global novamente)

Saída: 1, 2, 3.
Acontece porque primeira só continua quando segunda sai da pilha.


Frente: O que é a call stack e qual a diferença para o stack trace?
Verso: Pilha das funções em execução; a última a entrar é a primeira a sair. O stack trace é uma foto dela no momento do erro.

Frente: Por que o stack trace de a → b → c com erro em c mostra c, b, a?
Verso: No erro, as três ainda estão na pilha, com c no topo. O trace lista do topo para a base.

Frente: O que é um execution context e quais são suas fases?
Verso: Ambiente onde o código roda, com variáveis, escopo de fora e this. Na criação, registra as declarações (hoisting); na execução, roda linha a linha.

Leitura: MDN, página “JavaScript execution model”, parte sobre a pilha e os execution contexts.