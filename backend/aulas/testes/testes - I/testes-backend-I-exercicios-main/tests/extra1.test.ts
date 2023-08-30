import { valueToWord } from "../src/extra1"

describe("testando desafio 1",()=>{
  test("enviando uma string espera receber parâmetro inválido",()=>{
    expect(valueToWord("10" as any)).toEqual("parâmetro inválido")
    expect(valueToWord("ozemela" as any)).toEqual("parâmetro inválido")
  })

  test("espero receber o valor por extenso",()=>{
    expect(valueToWord(1)).toEqual("um")
    expect(valueToWord(10)).toEqual("dez")
    expect(valueToWord(5)).toEqual("cinco")
  })
})