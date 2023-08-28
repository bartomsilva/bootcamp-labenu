// 4 arrays de números ( contendo 6 numeros )
const resultado1 = [2, 4, 6, 8, 10, 50]
const resultado2 = [1, 3, 5, 7, 33, 45]
const resultado3 = [0, 8, 10, 22, 48, 49]
const resultado4 = [9, 11, 13, 15, 50, 55]

let linha=""    
let arrayInterno=[]

// array de arrays ( contendo 4 arrays )
const megaSena = [resultado1, resultado2, resultado3, resultado4]

for (let cExt=0; cExt < megaSena.length; cExt++){
  
   linha = `Sorteio ${Number(cExt+1)}: `
                  
   // trabalhando com o arry interno  
   arrayInterno= megaSena[cExt]   

   for(let cInt=0; cInt < arrayInterno.length; cInt++){

      linha = linha + `<${arrayInterno[cInt]}> `
       
  }  
  console.log( linha )
} 






