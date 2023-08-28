/*
# Exercício 3


a)Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).

b) Em seguida, fora das funções, receba do usuário dois números e armazene em variáveis.

c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.

d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.


*/

const somar=(valor1,valor2)=> {
    return valor1+valor2
}

const subtrair=(valor1,valor2)=>{
    return valor1-valor2
}
const dividir=(valor1,valor2)=>{
    return valor1/valor2
}
multiplicar=(valor1,valor2)=>{
    return valor1*valor2
}

// declarando e inicializando variáveis 
let valor1=valor2=0
let vSoma=vSub=vDiv=vMult=0

//rebebendo valores
valor1=prompt("Digite o Primeiro Número")
valor2=prompt("Digite o Segundo Número")

// convertendo de string para number
valor1=Number(valor1)
valor2=Number(valor2)

vSoma=somar(valor1,valor2)
vSub=subtrair(valor1,valor2)
vDiv=dividir(valor1,valor2)
vMult=multiplicar(valor1,valor2)

console.log(`o resultado da soma entre ${valor1} e ${valor2} é ${vSoma}`)
console.log(`o resultado da subtração entre ${valor1} e ${valor2} é ${vSub}`)
console.log(`o resultado da divisão entre ${valor1} e ${valor2} é ${vDiv}`)
console.log(`o resultado da multiplicação entre ${valor1} e ${valor2} é ${vMult}`)



