/*
Vamos criar alguns arrays, e refletir a respeito.
Crie um array com 3 itens do tipo String
Crie um array com 3 itens do tipo Number
Crie um array com uma String, um número e um booleano;
Crie um array com apenas um valor. Um número.
Crie um array sem nenhum valor dentro.
*/

// const primeiroArray=["dev","estudar","muito"]
// const segundoArray=[26,09,2022]
// const terceiroArray=["Bart",55,true]
// const quartoArray=[2023]
// const quintoArray=[]

/*
Vamos tentar acessar índices específicos dos arrays da última prática.
Cheque o length do primeiro array. O que acontece se tentarmos 
acessar o índice 3 deste array?
Verifique se o terceiro array inclui cada um dos itens;
No quarto array, imprima o valor do único item. 
Observe qual o seu índice, e imprima seu tamanho.
*/

// console.log(primeiroArray.length)
// // acessar o índice 3 vai dar erro
// console.log(typeof terceiroArray[0])
// console.log(typeof terceiroArray[1])
// console.log(typeof terceiroArray[2])
// console.log("inclui bart?",terceiroArray.includes("Bart"))
// console.log("inclui 55", terceiroArray.includes(55))
// console.log("inclui true",terceiroArray.includes(true))


// console.log(quartoArray[0])

/*
Crie uma cópia do primeiro array, utilizando a atribuição com sinal de igual.
Faça push() de uma nova string no array copiado
Imprima os dois arrays. Há diferença?
Como podemos ajustar?
Com o array copiado corretamente, remova os itens dos índices 2 e 3 do array copiado.

*/
// const copiaPrimeiroArray = primeiroArray
// copiaPrimeiroArray.push("negativo")
// console.log("origem:",primeiroArray)
// console.log("cópida",copiaPrimeiroArray)
// primeiroArray.pop() // apagando o ultimo elemento


//const ccopiaPrimeiroArray = [...primeiroArray]
// const ccopiaPrimeiroArray = primeiroArray.slice()
// ccopiaPrimeiroArray.push("positivo")
// console.log("primeiro Array:",primeiroArray)
// console.log("cópida do Pri. Array",ccopiaPrimeiroArray)
// ccopiaPrimeiroArray.splice(2,2)
// console.log("cópia após apagar",ccopiaPrimeiroArray)

// finalmente

/*
Crie um novo array. Ele deve possuir apenas números, 
e estes números não devem seguir nenhuma ordem específica.
Por enquanto, não vamos imprimir o array.

Depois disso, crie uma cópia deste array utilizando o método slice().

Remova o último item do primeiro array, e em seguida, adicione o número 6.
Depois,remova o número que está no índice 2 do segundo array.
Por fim, imprima os dois arrays.
*/

const newArray = [0,1,3,5,7,9]
const copiaArray = newArray.slice()  // copia stat end-1

newArray.pop()
newArray.push(6)
copiaArray.splice(2,1) // apaga inicio x num-item

console.log(newArray)
console.log(copiaArray)





