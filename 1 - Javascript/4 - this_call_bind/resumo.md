-- Contextode execução de das funções.
### This: 
-- Def: Representa o contexto de execução atual de uma função. Para simplificar, this é uma referencai dinâmica que aponta para o objeto que está "chamando" ou executando a função naquele exato momento.
* Regra de ouro: O valor de this não é definido onde a função foi escrita, mas sim como e por quem ela foi invocada.
* Dentro de um objeto: Se uma função é chamada como método de um objeto (user.falar()), o this aponta para o próprio objeto (user)
* Chamada solta (Global): Se a função é chamada de forma independente (falar()), o this aponta para o objeto global (window no navegador) ou será undefined (se o código estiver em strict mod)
* Arrow Functions: Elas são uma exceção. Elas não criam um this próprio e apenas herdam o this do escopo pai onde foram escritas.

### Call (Function.prototype.call()):
--- Def: É utilizado para invocar uma função imediatamente, forçando manualmente qual objeto será o seu this.
* Funcionamento: Passo o objeto desejado como o primiero argumento e os parâmetros normais da função logo em seguida, separados por vírgula.
* Sintaxe: 
````ts
function funcao(){}
funcao.call(novoThis, arg1, arg2);

//Exemplo:
function apresentar(saudacao) {
    console.log(`${saudacao}, meu nome é ${this.nome}`)
}
const pessoa = {nome: "Carlos"};

//Executa imediatamente forçando o 'this' a ser o objeto 'pessoa'
apresentar.call(pessoa, "Olá"); //Saída: Olá, meu nome é Carlos.
````

### Bind (Function.prototype.bind()):
--- Def: Cria e retorna uma nova função com o valor do this permanentemente travado (vinculado) ao objeto que eu escolhi.

* A grande diferença: Enquanto o call executa a função na hora, o bind não executa nada. Ele apenas prepara uma cópia da função com o this amarrado para ser chamado no futuro.
* Sintaxe: 
````js
const pessoa = { nome: "Ana" };

function dizerNome() {
    console.log(this.nome);
}

// Cria uma nova função onde o 'this' sempre será 'pessoa'
const dizerNomeDaAna = dizerNome.bind(pessoa);

//Executa epans mais tarde
dizerNomeDaAna(); //Saída: "Ana"
````

### Comparação direta:
this - Aponta para o objeto dono da execução atual - Não é um método, é uma palavra chave.
call - Define o this e passa argumentos separados por vígulas - Executa imediatamente na mesma linha
bind - Cria uma cópia da função com o this fixado - Executa no futuro, quando não chamo a cópia.

Pergunta: Call modifica ou copia o objeto? 
Ele não faz nenhum dos dois automaticamente. O call apenas executa a função usando o objeto original como alvo.
Se a função apenas lê dados (como console.log(this.nome)), o objeto fica intacto, mas se a função alterar dados (como this.nome = "novo nome"), ela vai alterar o objeto original diretamente na memoria, pois this aponta para o objeto real e não uma cópia.

Resumo direto:

* this: Palavra-chave que aponta para o objeto que está executando a função naquele exato momento. O valor dele depende de como a função é chamada e não de onde foi escrita.
* call: invoca a função imediatamente, definindo manualmente qual objeto será o this e passando argumentos separados por vírgulas. Sintaxe: funcao.call(novoObjetoThis, arg1, arg2)
* apply: Funciona exatamente igual ao call, executando a função na hora. A única diferença é que os argumentos são passados dentro de um único array. Sintaxe: funcao.apply(novoObjetoThis, [arg1, arg2])
* bind: Não executa a função na hora. Ela retornar uma nova função com o this permanentemente travado no objeto escolhido, pronta para ser chamada no futuro. Sintaxe: const novaFuncao = funcao.bind(novoObjetoThis)
