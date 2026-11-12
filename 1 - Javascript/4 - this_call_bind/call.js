//Tenho dois objetos e quero usar a função de um dentro do outro sem duplicar o código:
const user= {
    nome: 'Lucas',
    saudar(cargo) {
        console.log(`Olá! Sou ${this.nome} e meu cargo é ${cargo} `)
    }
}

const admin = { nome: "Mariana" };
const admin2 = { nome: "Pedro"}
user.saudar.call(admin, "Administradora", "Sueca")
user.saudar.call(admin2, "Admin", "Ponte Preta")
user.saudar("Frentista")