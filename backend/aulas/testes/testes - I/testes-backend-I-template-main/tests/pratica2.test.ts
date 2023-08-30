import { pratica2 } from '../src/pratica2'

describe("prática 2", () => {  // suite

  test("passando uma string: espera mull", () => {
    const result = pratica2("10" as any)
    expect(result).toBeNull()
  })

  test("passando um número decimal: espera mull", () => {
    const result = pratica2(10.1)
    expect(result).toBeNull()
  })

  test("passando um número inteiro par: espera true", () => {
    const result = pratica2(10)
    expect(result).toBeTruthy()
  })

  test("passando um número inteiro imprar: espera false", () => {
    const result = pratica2(1)
    expect(result).toBeFalsy()
  })

})