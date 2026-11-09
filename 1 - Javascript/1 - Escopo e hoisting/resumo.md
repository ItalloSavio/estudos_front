Escopo define onde uma variável pode ser acessada.

- Global: declarada fora de funções e blocos; acessível em todo lugar.
- De função: declarada dentro de uma função; só existe dentro dela.
- De bloco: declarada com let ou const dentro de {} (if, for ou um bloco solto); só existe dentro dele.

- Cadeia de escopo: ao procurar uma variável, o JS começa no escopo atual e sobe para os de fora. O de dentro nunca vê variáveis internas de outro escopo.
- Sombreamento: uma variável de dentro com o mesmo nome esconde a de fora naquele escopo.

Declarações:
- let: escopo de bloco, não pode redeclarar no mesmo escopo, pode reatribuir, entra na TDZ
- var: escopo de função ou bloco, pode redeclarar no mesmo escopo, pode reatribuir, sofre hoisting (retorna undefined)
- const: escopo de bloco, não pode redeclarar, não pode reatribuir, entra na TDZ 
* const impede reatribuir a variável, mas o conteúdo de um objeto ou array pode mudar.

Atenção: var ignora blocos. Um var dentro de um if vaza para a função ou para o escopo global.

Hoisting: antes de executar um escopo, o JS registra todas as declarações dele. Nada se move no código.

- var: registrado e iniciado com undefined; o valor chega quando a execução passa pela linha.
- let/const: registrados, mas sem inicialização até a linha da declaração. Esse intervalo é a TDZ, e acessar a variável nele gera erro.

- Declaração de função: registrada já com o corpo, por isso pode ser chamada antes.
- Função em variável (var f = function(){} ou arrow): segue a regra da variável. Com var, chamar antes dá f is not a function; com let/const, dá erro de TDZ.