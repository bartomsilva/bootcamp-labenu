/* Crie uma função que recebe uma string e a retorna invertida.
 Por exemplo, se o argumento for “Hello world!” deverá ser retornado “!dlrow olleH”.
  >>>>> Tente não utilizar métodos nativos do JS.<<<<
*/
export function invertString(word:string):string|null{

  let result:string=""

  if (typeof word !== "string") return null

  // peguei o indice máximo da palavra
  const indMax = word.length-1
  // faço um for inversamente 
  for ( let x=indMax ; x >=0; x-- ){
    // concatendo a palavra inversamente
    result += word[x]    
  }
  return result
}

