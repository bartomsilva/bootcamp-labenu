////////////////////
// prática guiada
// 
// recebe um array e devolve os valores multiplicados por 3
const mult3=(array) => {
    const newArray=[]
    for ( let valor of array ) {
        newArray.push(valor*3)        
    }
    return newArray
}

// recebe um array e rotorna só os números pares
const numPares=(array) => {
    const newArray=[]
    for ( let valor of array ) {
        if (valor%2===0) {
            newArray.push(valor)             
        }
    }
    return newArray
}

// função que recebe um array e uma função callback 
// como parametros, executa a função de callback, 
// armazena os valores retornados pela função de callback 
// em uma variável e faz a impressão no console
function execFunc(array, fcallBack){
    const result=fcallBack(array) 
    console.log(`${result}`)
}

// array de números aleatórios
const myArray=[1,2,3,7,8,33,44]

// chamando a função principal 
// passando como argumentos:
//  a) o array
//  b) a função de callback
console.log("Array base")
console.log(`${myArray}`)

console.log("multiplicados por 3 ")
execFunc(myArray,mult3)

console.log("apenas os números pares")
execFunc(myArray,numPares)



////////////////////////////
///// UTILIZANDO AGORA O MAP
////////////////////////////
// recebe um array e retorna multiplicado por 3
const mapMult3=(array) => {
    // quando aplicamos o .map ao array aqui ele passa
    // parametros para função de callback nesse coso
    // estou usando um arrow function e usando apenas
    // o primeiro parametro que é o elemento (valor)
    const newArray=array.map(element => element * 3)
    return newArray
}

////////////////////////////
// UTILIZANDO AGORA O FILTER
////////////////////////////
// recebe um array e rotorna só os números pares
const filterNumPares=(array) => {
    // igualmente ao MAP o filter também trabalha com
    // uma função de callback, e aqui também é uma arrow function
    // onde eu faço o teste do elemento para saber se ele é par.
    const newArray=array.filter(element => element%2===0)    
    return newArray
}
console.log("========================")
console.log(" utilizando MAP e FILTER")
console.log("========================")
console.log("Array base")
console.log(`${myArray}`)

console.log("multiplicados por 3 ")
execFunc(myArray,mapMult3)

console.log("apenas os números pares")
execFunc(myArray,filterNumPares)

