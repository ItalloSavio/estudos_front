/**
 * Estudo de escopo e hoisting.
 * Fundamentos: 
 * 1. Escopo: Em javascript existem escopos que mudam a forma que o código se comporta, existem escopos de blocos, escopo global.
 * Ainda em escopos, a forma como o escopo de blocos funciona é: Em blocos o código só funciona dentro daquele bloco, separado por chaveamento. O global funciona fora e dentro do escopo de blocos.
 * 
 * Sobre variaveis temos: let, var e const: let e var são variaveis e const é uma constante.
 * let declara uma variavel de escopo de bloco, não pode ser redeclarado,
 * const não pode ser redeclarado, const não pode ser de escopo global dentro de escopo de bloco
 * var declara uma variavel, pode ser redeclarado
 */

var b = "Bloco tem acesso a variavel global"
var b = "valor alterado"
//Exemplo de código por bloco: Funções:
function exemplo() {
    let a = "Essa variavel so funciona nesse escopo de bloco"
    console.log(`Dentro do escopo: ${a}, fora do escopo de bloco: ${b}`);
}
exemplo()
//Se eu chamar a variavel a fora do escopo, o console vai reclamar que a variavel a não existe ("a is not defined").
console.log("Fora do escopo de bloco: ", a);

// Para que essa variavel a funcione fora do escopo, eu preciso colocar ela em escopo global, definindo ela fora do escopo de bloco:
//Aqui entra o hoisting: Primeiro de tudo, dentro das três opções de definir variaveis, ele só funciona com var, com let e const ele da erro ('Cannot access 'a' before initialization'), depois disso, definir hoisting é: O javascript consegue "sobe" a variavel, antes de executar qualquer outra coisa, porém em variaveis, ele retorna 'undefined', sendo mais usado para funções, pois posso executar uma função antes de cria-la, por exemplo
var a = "Essa variavel é global"

// Hoisting em funções: Sua execução pode ser feita antes da sua "criação", eu não me recordo para que isso serve, então já vai uma duvida: 
exemploHoisting();

function exemploHoisting() {
    console.log("Essa função foi executada antes da sua criação.")
}


// Escopo e hoisting: prevê a saída de 5 trechos antes de rodar.

function teste1() {
    let am = "am"
    console.log(am)
}
teste1() // Aqui vai mostrar o que defini na variavel: "am" 


teste2() // Aqui também vai mostrar o que defini no let: "am"
function teste2() {
    let am = "am";
    console.log(am);
}

let palavra = "mais uma palavra"
console.log(palavra); // Vai ser exibido a palavra

function palavrao() {
    const palavrao = palavra + "gingantescamente"
    console.log(palavrao)
}
palavrao(); // Vai aparecer a palavra: palavragingantescamente

