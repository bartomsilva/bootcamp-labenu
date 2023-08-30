/*
Crie uma função que recebe dois números e retorna uma lista com os números 
entre o primeiro e o segundo números recebidos, inclusivos.
Por exemplo, o input 5 e 9 retorna [ 5, 6, 7, 8, 9 ]
*/
export function challenge5(numberOne: number, numberTwo: number):number[]|null {
  const result:number[]=[]
  // se não for number return null
  if (typeof numberOne != "number" || typeof numberTwo != "number") {
    return null
  }
  // se não for número inteiro retorna null
  if ( !Number.isInteger(numberOne) || !Number.isInteger(numberTwo)) {
    return null
  }
  // testa para definir a ordem
  if ( numberOne <= numberTwo){
    // ordem crecente
    for( let x=numberOne; x <= numberTwo; x++){
      result.push(x)
    }
  } else { 
    //ordem decrecente
    for( let x=numberOne; x >= numberTwo; x--){
      result.push(x)
    }
  }
  return result
}

