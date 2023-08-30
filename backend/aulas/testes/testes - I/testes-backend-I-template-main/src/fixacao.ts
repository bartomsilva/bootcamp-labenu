// esta função recebe uma string e retorna um array 
// contendo cada letra da string ou null caso não vennha uma string

export function convertStringToArray(word:string):(Array<string>|null){

  // caso não receba uma string retorna null
  if (typeof word != "string") return null
  
  // retorna o array contendo cada letra da string
  return word.split('')  

}