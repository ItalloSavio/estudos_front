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
5. Por que uma variável da função externa continua existindo depois que essa função termina, se ela devolveu uma função interna que usa essa variável?
A função interna guarda uma referência ao ambiente onde foi criada. O JavaScript só descarta da memória o que nada mais referencia, então a variável continua viva enquanto a função interna existir.

--- This, bind, call
1. (O desafio do método extraído): Se eu tenho const falar = pessoa.falar; e depois executo falar() solto no código, qual será o valor do this dentro dessa função? Por que isso acontece?
---  A função falar existe e vai rodar sem dar erro de referência, porque acabou de ser criada com const falar. O que vai acontecer é: como você chamou falar() solto (sem pessoa. antes), o this dentro dela vai apontar para o escopo global (window) ou será undefined (em strict mode). Se ela tentar ler this.nome, o resultado será undefined.

2. (A diferença entre Arrow Function e Function tradicional): Se você trocar uma function() {} tradicional por uma arrow function () => {} dentro de um objeto, o que acontece com o this? O método bind() funciona em uma arrow function?
--- Arrow function não possuem um this próprio. Elas herdam o this do lugar onde foram escritas (Escopo léxico). Por não terem um this próprio para ser alterado, o call, o apply e bind são completamente ignorados por elas.

3. (Diferença prática entre call, apply e bind): 1. Além do momento em que a função é executada (call vs bind), qual é a diferença técnica na forma como passamos argumentos entre call e apply?
--- call é executado imediatamente na linha que é chamado e bind é executado apenas quando é passado sua execução. call e apply são semelhantes, ambos executam a função imediatamente na mesma linha. A única diferença é a forma como os argumentos são passados:
call: Passa argumentos separados por vírgula: funcao.call(obj, arg1, arg2)
apply: Passa os argumentos dentro de um unico array: funcao.apply(obj,[arg1, arg2])