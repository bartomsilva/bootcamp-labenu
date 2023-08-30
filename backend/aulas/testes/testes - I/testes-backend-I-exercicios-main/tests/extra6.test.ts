import { challenge6 } from "../src/extra6"

describe("teste do desafio 6",()=>{
  
  test("espera receber null enviado valores não numericos ou não inteiros",()=>{
    expect(challenge6("4" as any,3)).toBeNull()
    expect(challenge6(4.5 ,3)).toBeNull()
    expect(challenge6(4 , 3.3)).toBeNull()
  })

  test("espera receber array contendo lista de números",()=>{
    expect(challenge6(4,1)).toEqual([2])
    expect(challenge6(1,4)).toEqual([2])
    expect(challenge6(1,6)).toEqual([2,4])
    expect(challenge6(1,20)).toEqual([2,4,6,8,10,12,14,16,18])
  })

  test("espera receber array vazio",()=>{
    expect(challenge6(4,3)).toEqual([])
    expect(challenge6(3,4)).toEqual([])
    expect(challenge6(2,4)).toEqual([])
    expect(challenge6(0,2)).toEqual([])
  })
})