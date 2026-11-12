const carrinho = { //Aqui faço o objeto carrinho
    itens: ["Teclado", "Mouse"], // Prop itens foi criada
    total: 250, // Prop total também foi criada
    resumo() { //Fiz a função que apresenta o que eu quero do objeto, utilizando this, eu aponto para o objeto  carrinho com as props.
        console.log(`Você tem ${this.itens.length} itens. Lista de itens: ${this.itens} Total: ${this.total}`)
    }
};

carrinho.resumo() //Aqui eu chamo a função resumo de dentro do carrinho.


//Correção de bloco de codigo. Exercicio 1
// Sintaxe de objeto e this. O código abaixo deve imprimir "Carro: Fusca", mas esta dando erro de sintaxe
// const veiculo = {
//   modelo: "Fusca",
//   function exibir() { //Erro foi que tem "function" no objeto e não precisa, só precisa passar o nome da função
//     console.log(`Carro: ${modelo}`); //Faltou o this também, a referencia ao objeto.
//   }
// };

//veiculo.exibir();

const veiculo = {
    modelo: "Fusca",
    exibir() {
        console.log(`Carro: ${this.modelo}`)
    }
}

veiculo.exibir()


/**
 * Exercicio 2: Uso incorreto do call
 * Quero usar a função apresentar da pessoa1 para exibir o nome da pessoa2, mas o codigo quebra com um TypeError
 */

const pessoa1 = {
    nome: "João",
    apresentar(saudacao) {
        console.log(`${saudacao}, eu sou ${this.nome}`)
    }
}

const pessoa2 = { nome: "Maria" };

// pessoa1.nome.call(pessoa2, "Oi") // TypeError: pessoa1.nome.call is not a function, acontece pelo exato motivo de que nome não é uma função
pessoa1.apresentar.call(pessoa2, "Oi") // Para corrigir é so colocar a função apresentar.


/**
 * Exercicio 3: Perda de contexto e bind
 * Quero que o método ligar seja executado após 1 segundo exibindo "TV ligada", mas ele está exibindo "undefined ligada"
 */
const aparelho = {
    nome: "TV",
    ligar() {
        console.log(`${this.nome} ligada`);
    }
}

setTimeout(aparelho.ligar, 1000); //Aqui está o erro, vai cair no estado global window, que não existe

const aparelhoLigado = aparelho.ligar.bind(aparelho) //A correção é essa. Queria que explicasse como foi feito aqui, vou tentar explicar e você corrige o que ta errado. Ele coloca a conts aparelhoLigado, declarada como aparelho (objeto). ligar(função). bind(ação) e colocar como parametro o objeto aparelho (Essa parte eu não entendi direito.)
/**
 * • (aparelho): Este parâmetro dentro dos parênteses responde à pergunta: "Dentro desse clone que estou criando, quem será o this?". Ao passar aparelho, você cola uma etiqueta no clone dizendo que o this dele será sempre o objeto aparelho.
• const aparelhoLigado: Guarda esse clone pronto para ser usado depois no setTimeout.

 */
// Para fazer isso: const geladeira = aparelho.ligar.bind(aparelho.name = "Geladeira") //Como eu faria isso? Da pra fazer com o bind? Preciso criar um novo objeto.
const objetoGeladeira = { nome: "Geladeira" }
const geladeira = aparelho.ligar.bind(objetoGeladeira);
setTimeout(aparelhoLigado, 1000)
setTimeout(geladeira, 1000)