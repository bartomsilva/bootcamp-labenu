
ex1()
//ex2()

// EXERCICIO DOS PETS
function ex1(){
    const nomeDosPets=[]
    const numPet = Number(prompt("Quantos Pets você tem?"))
    let nomeDoPet=""
    // digitou 1 ou mais
    if ( numPet == 0 || typeof numPet =="object") {
        console.log("Que pena! Você pode adotar um pet!")  
    } else {
        for ( let num = 1 ; num <= numPet; num++) {
            while(true) {  // fica aqui até digitar os nomes dos pets
                nomeDoPet = prompt(`Digite o nome do pet ${num}: `)
                if ( typeof nomeDoPet !="object" && nomeDoPet.length>0 ) {
                    break
                } else {
                    console.log("você não digitou o nome do PET")
                }
            }
            nomeDosPets.push(nomeDoPet) 
        }
        console.log("----- Nome dos Pets Registrados ----")
        for ( let nome of nomeDosPets) {
            console.log(`Nome do Pet ${nome}`)            
        }
    } 
}

// EXERCICIO DO MAIOR E MENOR VALOR NO ARRAY
function ex2() {
    const numeros = [ 66, 74, 531, 988, 1, 0 , 32, 56, 91, 14, 677, 777, 15, 11, 4 ]  
    let numeroMenor=numeros[0]
    let numeroMaior=numeros[0]
    for ( let numero of numeros ) {
        if ( numeroMenor > numero ) numeroMenor = numero 
        if ( numeroMaior < numero ) numeroMaior = numero
    }
    console.log(`o menor número é ${numeroMenor}`)
    console.log(`o número maior é ${numeroMaior}`)
}

