import { invertString } from "../src/extra3";

describe("testando desafio 3",()=>{
  test("espera receber um null enviando algo diferente de string",()=>{
    expect(invertString(10 as any)).toBeNull()
    expect(invertString(true as any)).toBeNull()
    expect(invertString(false as any)).toBeNull()
    expect(invertString(null as any)).toBeNull()
    expect(invertString(undefined as any)).toBeNull()
  })

  test("espera receber a string invertida",()=>{
    expect(invertString("UEMOLOTRAB")).toEqual("BARTOLOMEU")
    expect(invertString("BART")).toEqual("TRAB")
    expect(invertString("ALEMEZO")).toEqual("OZEMELA")
  })
})