/*
Crie uma função que recebe um número no formato string e retorna o mesmo número,
porém no formato number.
Exemplo: a entrada "50" gera a saída 50
Crie pelo menos um teste que valida sua implementação.
*/

export function convertStringToNumber(numberString: string):(number|null){
  // retorno default
  let result=null   
  // caso venha alguma coisa
  if (typeof numberString == "string"){
    // tenta fazer o casting
    result = Number(numberString)  
    // testa pra ver se o casting deu certo
    // caso contrário devolve null
    if (isNaN(result)) {
      result = null
    }
  }
  return result
} 