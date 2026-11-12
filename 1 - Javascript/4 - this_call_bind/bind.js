// Evitar perda de contexto em eventos e callbacks.
const botao = {
    texto: "Enviar Formulário",
    clicar() {
        console.log(`Botão ativado: ${this.texto}`)
    }
}
setTimeout(botao.clicar, 1000) //Vira undefined.

const clicarTravado = botao.clicar.bind(botao);
setTimeout(clicarTravado, 1000);
botao.clicar()

//Por que o primeiro setTimeout da undefined?
/**
 * Imagine que o setTimeout é um carteiro. Quando você escreve botao.clicar (sem os parênteses ()), você não está executando a função; você está apenas pegando o código puro da função de dentro do objeto e entregando na mão do carteiro
 * Um segundo depois, o carteiro executa essa função sozinha no meio da rua (no escopo global), longe do objeto botao. Como não há nenhum objeto antes do ponto na hora da execução, o this vira o objeto global (window). E como window.texto não existe, o resultado é undefined.
 * Em resumo, 1 segundo depois ele tenta pegar a função global window, mas não existe window no codigo, logo da undefined.
 */