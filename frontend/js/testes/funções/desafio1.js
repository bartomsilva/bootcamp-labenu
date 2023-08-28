/* 

Criar um programa que gere a partir de uma STRING, 
Um OBJETO, onde cada propriedade é a primeira letra de cada palavra,
e os seus valores é a quantidade de vezes que cada incial aparece na frase.

Ex: 

const frase= “Ozemela, turma top das galáxias”

Deve devolver o seguinte objeto: { o: 1, t: 2, d: 1, g: 1 }


*/

function wordForObj(str) {

    if (!str || typeof str !== "string" || !str.trim()) return null

    const obj = {}
    const arrayWords = str.split(" ")

    for (const word of arrayWords) {
        const firstLetter = word[0]
        obj[word[0]] ? obj[word[0]]++ : obj[word[0]] = 1
    }
    return obj


}

function wordForObj2(str) {

    if (!str || typeof str !== "string" || !str.trim()) return null

    const obj = {}
    const arrayWords = str.split(" ")

    return arrayWords.reduce((obj, word) => {
        // obj[word[0]] ? obj[word[0]]++ : obj[word[0]] = 1
        obj[word] ? obj[word]++ : obj[word] = 1
        return obj
    }, {})
    
}

console.log(wordForObj2("4520 3345 5525 6668 6666  6666 8888 8888"))
console.log(wordForObj2("Ozemela, turma top das galáxias"))