/* # Exercício 1
a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.
b) Declare uma função que imprima a tabuada do 6. Chame esta função.
c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 
*/

/*
function boasvindas(name){
    console.log(`Olá, ${name}!`)
}
boasvindas("Bart")

function tabuada(number){
    console.log(`${number} X 1 = ${number*1}`)
    console.log(`${number} X 2 = ${number*2}`)
    console.log(`${number} X 3 = ${number*3}`)
    console.log(`${number} X 4 = ${number*4}`)
    console.log(`${number} X 5 = ${number*5}`)
    console.log(`${number} X 6 = ${number*6}`)
    console.log(`${number} X 7 = ${number*7}`)
    console.log(`${number} X 8 = ${number*8}`)
    console.log(`${number} X 9 = ${number*9}`)
    console.log(`${number} X 10= ${number*10}`)
    }
}
tabuada(6)
*/

const boasvindas=(name)=>{
    console.log(`Olá, ${name}!`)
}
boasvindas("Bart")

const tabuada=(number)=>{  
    console.log(`Tabuada do ${number}:`)
    console.log(`   ${number} X 1 = ${number*1}`)
    console.log(`   ${number} X 2 = ${number*2}`)
    console.log(`   ${number} X 3 = ${number*3}`)
    console.log(`   ${number} X 4 = ${number*4}`)
    console.log(`   ${number} X 5 = ${number*5}`)
    console.log(`   ${number} X 6 = ${number*6}`)
    console.log(`   ${number} X 7 = ${number*7}`)
    console.log(`   ${number} X 8 = ${number*8}`)
    console.log(`   ${number} X 9 = ${number*9}`)
    console.log(`   ${number} X 10 = ${number*10}`)
}
tabuada(6)
tabuada(3)

