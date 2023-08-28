/*
# Exercício 2
Vamos recriar o exercício Nacionalidade da aula de condicionais I, 
utilizando switch-case. No arquivo `script.js` existe uma versão do código já escrita,
mas você pode colar o exercício que você fez na última prática!

-> Relembrando o enunciado.

Crie uma função que receba do usuário sua nacionalidade, utilize um prompt que

diga: "Escreva aqui sua nacionalidade" e guarde o valor da resposta em uma const nacionalidade.

Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:

- brasileira;
- argentina;
- uruguaia;
- chilena;
- colombiana;

Crie uma estrutura com o switch-case que verifique se a nacionalidade guardada na 
const nacionalidade, é igual a cada uma das nacionalidades acima, 
e caso seja, imprima a nacionalidade no console. 
O programa deve imprimir "nacionalidade não encontrada" caso o valor de nacionalidade não corresponda 
a nenhum dos valores.

a - Crie uma função
e - utilize um prompt que diga: "Escreva aqui sua nacionalidade"
i - const nacionalidade
o - imprima a nacionalidade no console
u - nacionalidade não encontrada" caso o valor de nacionalidade não corresponda a nenhum dos valores.
*/

const nacionalidade = prompt("digite aqui a nacionalidade") // aqui da erro caso cancelar

function checkNacionalidade(nacionalidade) { 
    // garantir que recebi uma string
    if (typeof nacionalidade != "string") {
        return
    }
    
    nacionalidade=nacionalidade.toLowerCase()

    switch(nacionalidade) {
    case "brasileira":
        console.log(nacionalidade)
        break
    case "argentina":
        console.log(nacionalidade)
        break
    case "uruguaia":
        console.log(nacionalidade)
        break
    case "chilena":
        console.log(nacionalidade)
        break
    case "colombiana":
        console.log(nacionalidade)
        break
    default:
        console.log("nacionalidade não encontrada")
    }
}
checkNacionalidade(nacionalidade)
