/*
Crie uma função que recebe dois números 
e retorna um objeto com duas propriedades, 
o valor da divisão entre o primeiro e o segundo 
e o resto de sua divisão. Caso um ou mais inputs 
não sejam válidos é retornado um objeto com propriedade “error” 
valendo true.
*/
export function challenge2(numberOne:number, numberTwo:number){
  let result = { error: true}
  
  if ( typeof numberOne != "number" || typeof numberTwo !="number"){
    return result
  }
  if (numberOne === 0 || numberTwo === 0) {
    return result
  }

  return  { division: (numberOne / numberTwo) ,
           rest: numberOne % numberTwo }
}