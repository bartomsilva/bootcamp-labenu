/* 

Criar um programa que gere a partir de um ARRAY, 
Um OBJETO, onde cada propriedade é o número contido no array,
e os seus valores é a quantidade de vezes que cada número aparece no array.

Ex: 

const numeros= [2233, 1400, 9800,1111, 2120, 2233, 6543, 8900, 1111, 2233]

Deve devolver o seguinte objeto: 
        {
        '1111': 2,
        '1400': 1,
        '2120': 2,
        '2233': 3,
        '6543': 1,
        '8900': 1,
        '9800': 1
        }
*/
const numeros= [2233, 1400, 9800, 1111, 2120, 2120, 2233, 6543, 8900, 1111, 2233]

function wordForObj2(arr) {

    const obj = {}

    return arr.reduce((obj, num) => {
        // obj[word[0]] ? obj[word[0]]++ : obj[word[0]] = 1
        obj[num] ? obj[num]++ : obj[num] = 1
        return obj
    }, {})
    
}

console.log(wordForObj2(numeros))
