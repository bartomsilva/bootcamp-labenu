/*
Crie uma função que recebe um objeto e retorna uma lista somente 
com suas chaves. Por exemplo, se o argumento for { id: 1, nome: “astrodev” }
deverá ser retornado [ "id", "nome" ].
*/
export function extractKeys( object:{}):(string[]|null){

  // se o dado recebido não for um objeto 
  if (typeof object != "object" ) return null
  // receber um array retorna null
  // o typeof entende que um array é um tipo object ( sacou? )
  if (Array.isArray(object)) return null
  
  return Object.keys(object)
}
