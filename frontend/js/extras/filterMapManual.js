/* 
const numbers = [2, 3, 4, 5, 6, 8, 9, 0]

/* filter e Map manual - By Bart
   mas ainda bem que temos o MAP e o filter
   recebe dois parametros: array e função callback     
*/ 
function filterMap(arr, fCb) {
    const newArray = [] // novo array a ser retornado
    for (const index in arr) {
        /* 
        percorre o Array e utiliza a função callback para 
        preparar o retorno, se o retorno é booleano adiciona no novo array o valor
        contido no elemento se é diferente de booleano adiciona no novo array o resultado
        da expresão.        
        */
        const result = fCb(arr[index]) // retorno da função de callback

        if (result || (typeof result!="boolean" && result===0)) { // se obteve um resultado
            if (typeof result == "boolean") {  // sendo booleano armazena o conteúdo do elemento
                newArray.push(arr[index])
            } else {  // não sendo booleano armazena no resuldado da expressão
                newArray.push(result)
            }
        }
    }
    return newArray // retorna o novo array    
}

//exemplos de uso e comparativo com MAP e FILTER:

console.log("---- só os números pares-------------------")
console.log("Filter Js.....:",numbers.filter((a) => a % 2 == 0))
console.log("Filter Manual.:",filterMap(numbers, (a) => a % 2 == 0))


console.log("...........................................\n")

console.log("-- os números elevados a 2 ----------------")
console.log("Map Js.....:",numbers.map((a) => a ** 2))
console.log("Map Manual.:",filterMap(numbers, (a) => a ** 2))
console.log("...........................................\n")

// e com OBJETOS FUNCIONA?
const colors = [
    {color: "Verde", ord: 1},
    {color: "Amarelo", ord:2},
    {color: "Azul", ord: 1},
    {color: "Branco", ord: 2 }]

    console.log("---- só cores de ord 1------------")
    let result = filterMap(colors, (a) => a.ord==1)
    console.log("filter manual com ojetos", result)
    console.log("...multiplicar ord por 2..........")
    result = filterMap( colors, cor => cor.ord*2)
    console.log("map manual com ojetos", result)












