/*
Aproveite a função anterior, mas agora a edite para somente retornar os números pares 
entre o primeiro e o segundo números
recebidos, exclusivos. Por exemplo, o input 4 e 12 retorna [ 6, 8, 10 ]
*/
export function challenge6(numberOne: number, numberTwo: number):number[]|null {
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
    for( let x=numberOne+1; x <= numberTwo-1; x++){
      if (ispar(x)){
        result.push(x)
      }
    }
  } else { 
    //ordem decrecente
    for( let x=numberOne-1; x >= numberTwo+1; x--){
      if (ispar(x)){
        result.push(x)
      }
    }
  }
  return result
}

// verifica se o número é par
function ispar( number: number){
  return ( number%2 === 0)
}
