/*
Escreva as operações lógicas abaixo em formato de código. Imprima no console se o valor da operação é verdadeira ou falsa:

a) 5 é maior que 20 e também é menor que 2;

b) 5 é igual a 5 ou é igual a “5”;

c) negação de (vinte é maior que cinquenta)

d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)
*/

console.log("a)", (5 > 20) && (5 < 2))
console.log("b)", (5 === 5) || (5 === "5"))
console.log("c)", !(20 > 50))
console.log("d)", !((20 > 50) || (50 > 60)))


// EXERCICIO 02

// atribuindo os boleanos as variáveis temos:
const a = true //'vou pra praia'
const b = true //'sou maior de idade'
const c = true //'posso tomar uma cervejinha'
const d = true //'quero passear de carro'

console.log("!b && d =",!b && d) 
console.log("(b && a ) && !d =",(b && a ) && !d) 
console.log("a || d =",a || d) 
console.log("c && !d =",c && !d)


