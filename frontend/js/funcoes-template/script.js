function exerc1a(name){
    console.log(`Olá ${name}`)
}
exerc1a("Bart")
exerc1a("Luana")
exerc1a("Moisés")

const exerc1b=function(name){
    console.log(`Olá ${name}`)
}
exerc1b('Bart')
exerc1b('Luana')
exerc1b('Moises')

const exerc1c=(name)=>{
    console.log(`Olá ${name}`)
}
exerc1c('Bart')
exerc1c('Luana')
exerc1c('Moises')


function exerc2a(number){
    console.log(`o número ${number} é par? ${number%2===0}`)
    console.log(`Somando com 10 o resultado é ${number+10}`)
    console.log(`e multiplicando por ele mesmo é ${number*number}`)
}
exerc2a(10)

const exerc2b=function(number){
    console.log(`o númeiro ${number} é par? ${number%2===0}`)
    console.log(`Somando com 10 o resultado é ${number+10}`)
    console.log(`e multiplicando por ele mesmo é ${number*number}`)
}
exerc2b(11)

const exerc2c=(number)=>{
    console.log(`o númeiro ${number} é par? ${number%2===0}`)
    console.log(`Somando com 10 o resultado é ${number+10}`)
    console.log(`e multiplicando por ele mesmo é ${number*number}`)
}
exerc2c(10)

function checkLogin(login,password){
    const loginAramazenado="Bart"
    senhaAramazenada= "123"
    return (login===loginAramazenado && password===senhaAramazenada) 
}
console.log(`Resultado do Pedido de Login: ${checkLogin("Bart","123")}`)


// pra guardar na cabeça
const  oldAge=(name,birthY,curY)=>{
    const age = curY - birthY        
    return (`${name} é maior de idade? ${age>=18}`)
}
console.log(oldAge("Gui",2019,2022))
console.log(oldAge("Fran",2009,2022))
console.log(oldAge("Pedro",2013,2022))