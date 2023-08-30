import { extractKeys } from "../src/extra4"

describe("teste do desafio 4",()=>{  
  test("deve retornar null enviando um dado diferente de um objeto",()=>{
    expect(extractKeys("oxete")).toBeNull()
    expect(extractKeys(10)).toBeNull()
    expect(extractKeys(true)).toBeNull()
    expect(extractKeys(["um"])).toBeNull()
  })

  test("deve retornar um array contendo só as chaves do objeto",()=>{
    //comparando se veio de fato um array
    expect(Array.isArray(extractKeys({id: "001"}))).toBeTruthy()
    //comparando o retorno eperado dentro do array
    expect(extractKeys({id: "001"})).toEqual(["id"])
  })
})
