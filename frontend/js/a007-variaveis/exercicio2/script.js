let a = 20
let b = 30
let auxiliar = null 

console.log(`valor de a = ${a}`)
console.log(`valor de b = ${b}`)
auxiliar = a  // recebe o valor de a
a = b // recebe o valor de b
b = auxiliar // e b recebe o valor que de auxiliar que antes era o valor de a
// assim temos agora:
console.log(`novo valor de a = ${a}`)
console.log(`novo valor de b = ${b}`)
