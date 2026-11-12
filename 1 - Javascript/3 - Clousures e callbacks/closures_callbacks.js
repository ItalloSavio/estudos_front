// S6. Closures: cria counter() e once(fn).

//Counter: Retorna uma função que, a cada chamada, devolve o próximo número (1, 2, 3...). Cada contador criado com counter() tem sua própria contagem

function counter() {
   let proximo = 1;
   return function countFunction () {
      let count = proximo++;
      return count
   }
}
let c1 = counter()
let c2 = counter()

console.log(c1());
console.log(c1());
console.log(c2());
console.log(c1());
console.log(c2());

/**
 * Como fica a saida desse codigo c1,c2?
 * 1, 2, 1, 3, 2.
 * Por que isso acontece, por qual motivo c2 não reseta ou acompanha c1?
 * Isso ocorre por conta do call stack,
 * Onde nasce c2?
 * nasce no let c2 = counter()
 * Por que c2 continua existindo após a chamada terminar?
 * Acontece assim: Quando counter() termina, o execution context sai da fila -> Normalmente, as variáveis de c2 seriam descartadas nesse momento
 * -> Mas counter() devolveu countFuncion, que ficou guardada em c2, e o código dela usa proximo.
 * 
 * dia 10/11: 
 * Explicar por que acontece esse movimento em C2. 
 * Acontece por conta do execution context, o js isola cada nova execução da chamada de função.
 * Explicar melhor como funcionam closures:
 * Closures são funções aninhadas contendo uma função mais externa e outra interna, na interna, é capturado o escopo lexico da externa, pegando variaveis ou parametros da externa. Tem uma grande serventia em POO, para encapsular ou ocultar variaveis.
 * Fazer e explicar o exemplo de once, debounce(fn, ms) do zero.
 */

// S7. Closures na prática: escreve debounce(fn, ms) do zero.
//once(fn): retorna uma função que executa fn so na primeira chamada. Nas seguintes, não executa de novo e devolve o resultado da primeira.
function once(fn) {
   let executou = false;
   let resultado;

   return function() {
      if (!executou) {
         resultado = fn()
         executou = true;
      }
      return resultado;
   }
}

const sortear = once(() => Math.random().toFixed(3))
console.log(sortear())
console.log(sortear())


function once2(fn) {
   let start = false;
   let result;
   return function() {
      if(!start){
         result = fn;
         start = true;
         console.log("Feito!")
      }
      return result;
   }
}
const teste = once2(() => "Agora foi feito!")
console.log(teste())