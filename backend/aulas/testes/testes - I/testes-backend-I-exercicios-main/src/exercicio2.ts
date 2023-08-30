/*
crie uma função que recebe uma data no formato "aaaa/mm/dd" 
e retorna outra string no formato "dd/mm/aaaa".
Exemplo: a entrada "2022/09/26" gera a saída "26/09/2022"
Crie pelo menos um teste que valida sua implementação.
*/
export function convertDate(date: string):string|null {
 
  // regex para verificação da data de entrada
  const dateFormat = /^\d{4}\/\d{2}\/\d{2}$/

  // testa se veio de fato uma string
  if (typeof date != "string") return null
  
  // testa se a data veio no formato correto
  if (!dateFormat.test(date)) return null

  // pegar os dados data
  const year = date.substring(0, 4)
  const month = date.substring(5, 7)
  const day = date.substring(8, 10)

  // retorna a data no formato dd/mm/ano
  return  day+"/"+month+"/"+year
}
