import { challenge5 } from "../src/extra5"

describe("teste do desafio 5",()=>{
  
  test("espera receber null enviado valores não numericos ou não inteiros",()=>{
    expect(challenge5("4" as any,3)).toBeNull()
    expect(challenge5(4.5 ,3)).toBeNull()
    expect(challenge5(4 , 3.3)).toBeNull()
  })

  test("espera receber array contendo lista de números",()=>{
    expect(challenge5(4,3)).toEqual([4,3])
    expect(challenge5(4,1)).toEqual([4,3,2,1])
    expect(challenge5(1,6)).toEqual([1,2,3,4,5,6])
  })
})