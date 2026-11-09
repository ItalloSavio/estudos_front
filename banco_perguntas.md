##  Banco de perguntas para entrevistas ou dúvidas recorrentes.
Esse espaço é destinado para documentar perguntas, dúvidas e pensamento crítico para determinar criterios e decisões em códigos.

#### 1 - Web -> HTTP, CORS, Git, Stack Trace


#### 2 - Javascript
-- Hoinstig: Acontece quando as declarações de variável e função são colocadas na memória durante a fase de compilação, mas permanecem exatamente onde foram digitadas.
- Só é elevado a declaração de uma variavel e não sua inicialização
1. Para que serve o hoisting em variaveis e funções?
    R. Em variáveis, permite que eu use uma função antes de declara-la no código. 
2. Qual o objetivo de fazer uma variavel retornar undefined?
    R. Nenhum. É um efeito colateral: o var é iniciado como undefined quando é registrado.
3. Em qual caso executamos a função antes da sua criação?
    R. Para organizar o arquivo: o fluxo principal fica no topo, e as funções auxiliares no final. Para quem ler ver primeiro o que o código faz e depois os detalhes.
-- Perguntas gerais de javascript
1. Como eu faço para uma função ser declarada e executada, sem precisar passar ela como execução?
    R. Com uma IIFE(Immediately Invoked Function Expression): Envolvendo a função em parênteses e chamando em seguida:
    ```ts
    (function () {
        console.log("executou");
    })();
    ```

--- Increment
1. Diferença de ++increment e increment++?

--- Closures
1. Como funcionam closures?
2. Para que serve closures?
3. Como utilizar closures?
4. Fazer o link de closures com call stack.
