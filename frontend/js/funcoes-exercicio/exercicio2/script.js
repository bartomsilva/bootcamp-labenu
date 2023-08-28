/*
# Exercício 2
Declare e chame as funções abaixo:

a) Uma função que receba 2 números como parâmetros, e, 
dentro da função, faça a soma das duas entradas e imprima 
o resultado. Invoque a função e imprima no console o resultado.

b) Uma função que recebe 2 números e imprime um booleano que 
informa se o primeiro número é **maior ou igual** ao segundo.

c) Uma função que receba um número e imprima se ele é par ou não

d) Uma função que recebe uma mensagem (`string`) como parâmetro 
e imprima o tamanho dessa mensagem, juntamente com uma versão dela 
contendo apenas letras maiúsculas.

d) Uma função que receba um valor de salário e retorne o valor com o desconto 10% referente ao INSS.
*/

function funcA(num1,num2){
    const resp  = `a soma entre ${num1} e ${num2} é ${num1+num2}`
    console.log(resp)
    return resp
}
console.log(`o resultado foi que: ${funcA(10,20)}`)

function funcB(num1,num2){
    console.log(`O primeiro número (${num1}) é maior ou igual ao segundo: (${num2}) ${num1>=num2}`)
}
funcB(5,2)

function funcC(number){
    console.log(`o número ${number} é um número par: ${number%2===0}`)  
}
funcC(8)

function funcD(mens){
    console.log(`a mensegem ${mens.toUpperCase()} tem ${mens.length} caracteres`)
}
funcD("do pequeno que se faz o grande")

function descInss(salario){
    return salario - ( salario * 10 / 100)
 }
console.log("Salario 1000",descInss(1000))