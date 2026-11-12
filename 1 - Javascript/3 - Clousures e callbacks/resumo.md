### Uma pequena nota sobre increment (++)
Increment: (++ (Adiciona um ao)) é um operador usado para retornar o valor antes ou depois do incremento, dependendo de onde o operador é colocado (++x ou x++).

Utilizando o operador depois do operando (x++): Incrementa e retorna o valor antes da incrementação. Ele sempre retorna o valor antes da incrementação, por exemplo, se x = 1 e y = x++, o retorno de x é x+1 e o retorno de y é 1, pois ele retorna o valor antes do incremento.

Utilizando o ++x: Incrementa e retorna o valor após a incrementação. Aqui ele mostra o valor após incremento, ou seja, x = 1 e y = ++x, ambos os valores vão ser 2, tanto x, quanto y, pois ele retorna o valor após o incremento.


### Closures
Definição: Clousure é a combinação de uma função com as referências ao estado que a circunda (Ambiente léxico). Um closure me dá acesso ao escopo de uma função externa a partir de uma função interna. Funções internas só estão disponiveis dentro do corpo das funções externas. Elas podem reutilizar variaveis declaradas na função pai.

-- Escopo Léxico: O escopo léxico é definido por sua localização dentro do código fonte (isto é aparentemente léxico) e funções aninhadas têm acesso às variáveis declaradas em seu escopo externo.

--- Closures na prática

Usar closures oferece uma série de benefícios que estão normalmente associados a programação orientada a objetos, em particular encapsulamento e ocultação de dados.