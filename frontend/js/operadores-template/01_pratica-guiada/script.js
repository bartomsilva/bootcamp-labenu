//CODIGO AQUI
// questão do saldo

let saldo = 15
let depConta = 0

console.log("tenho ". saldo)

saldo += 22.40
console.log("tenho agora ", saldo)

saldo -= 12.34
console.log("saldo atualizado ", saldo)

saldo = saldo / 3
console.log("após dividir, ficou para cada um ",saldo)

saldo = (saldo * 3.42)
console.log("após aplicar tenho agora ",saldo)

depConta = ( saldo - (saldo % 3) ) / 3
console.log("depósito em cada conta ",depConta)
console.log("sobrou para o chiclete ",(saldo%3))


//////////////////////////////
console.log("procedência matemática")
console.log(2*2+2)
console.log(2*(2+2))


// operadores boleanos - guardar em uma variável

console.log("-----------------------")
const resu1 = 5===5
const resu2 = 5!==5
const resu3 = 5!=="5"
const resu4 = "5" =="cinco"
const resu5 = typeof 5 === typeof 20
const resu6 = typeof "5" === typeof "cinco"
const resu7 = 5=="5"

console.log(resu1)
console.log(resu2)
console.log(resu3)
console.log(resu4)
console.log(resu5)
console.log(resu6)
console.log(resu7)

console.log("-------------------")

// Menor e Maior (ou igual)
console.log("Menor e Maior (ou igual)")
const valorA = 10
const valorB = 20
let resultado
console.log("Prmeiro número ",valorA," Segundo número ",valorB)
resultado = ( (valorA >= valorB) && ( valorA <= valorB))
console.log("O primeiro número é igual ao segundo? ",resultado)

resultado = (valorA <= valorB)
console.log("O primeiro número é menor ou igual ao segundo? ",resultado)

resultado = (valorA > valorB)
console.log("O primeiro número é maior que segundo? ",resultado)

resultado = (valorA < valorB)
console.log("O primeiro número é menor que segundo? ",resultado)


