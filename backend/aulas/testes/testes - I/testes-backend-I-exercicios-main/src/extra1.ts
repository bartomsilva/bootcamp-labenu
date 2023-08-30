/*
Crie uma função que recebe um número
entre 1 a 10 e retorna seu valor em extenso.
 Por exemplo, se o input for 1 é retornado a string “um”.
  Caso o input não seja válido, 
  o retorno deve ser um aviso de erro “parâmetro inválido”.
*/
const values:string[] =
  ["", "um", "dois", "três", "quatro", "cinco",
    "seis", "sete","oito","nove","dez"]

export function valueToWord(number: number): string {
  let result = "parâmetro inválido"

  if (typeof number == "number" && number >=1 && number<= 10) {
    result = values[number]
  } 
  return result
}
