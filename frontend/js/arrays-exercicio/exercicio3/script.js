/*
# Exercício 3

Agora, vamos manipular os arrays, adicionando ou removendo informações.
 Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`,
  e faça o que se pede abaixo nas cópias dos arrays originais;

- Adicione um item `number` ao início do primeiro array. Utilize `console.log()` 
para exibir o original e a cópia;

- Remova o último item do segundo array. Utilize `console.log()` 
para exibir o original e a cópia;

- Remova o segundo item do terceiro array. Utilize `console.log()`
 para exibir o original e a cópia;
*/

const firstOriginal = [99,1,2,3,4,5,6]
const secondOriginal = ["bola","mesa","cadeira","sofá"]
const thirdOriginal = [1,"bola",true,3,"cadeira",false]

const firstCopy = firstOriginal.slice()
const secondCopy = secondOriginal.slice()
const thirdCopy = thirdOriginal.slice()

firstCopy.unshift(100)
console.log("firstOriginal",firstOriginal)
console.log("firstCopy",firstCopy)

secondCopy.pop()
console.log("secondOriginal",secondOriginal)
console.log("secondCopy",secondCopy)

thirdCopy.splice(1,1)
console.log("thirdOriginal",thirdOriginal)
console.log("thirdCopy",thirdCopy)

