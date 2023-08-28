const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

/*
# Exercício 2

Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:

- Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
- Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
- Verifique se um item está incluído no primeiro array e 
depois no terceiro array e imprima o resultado destas verificações no console.log(). 
A primeira impressão deve retornar um booleano true e a segunda deve retornar
 um booleano false. 
*/


const firstArray = [99,1,2,3,4,5,6]
const secondArray = ["bola","mesa","cadeira","sofá"]
const thirdArray = [1,"bola",true,3,"cadeira",false]

// tamanho dos arrays
console.log("num. itens de firstArray..=", firstArray.length)
console.log("num. itens de secondArray.=", secondArray.length)
console.log("num. itens de thirdArray..=", thirdArray.length)

// impressao dos arrays
console.log("primeiro ítem de firstArray=",firstArray[0])
console.log("segundo ítem de secondArray=",secondArray[1])
console.log("terceiro ítem de thirdArray=",thirdArray[2])

// verificação do conteúdo 
console.log("3 está incluído em firstArray?",firstArray.includes(3))
console.log("camisa está incluído em thirdArray?",thirdArray.includes("camisa"))

