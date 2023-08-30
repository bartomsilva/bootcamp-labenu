import { convertStringToNumber } from "../src/exercicio1"

describe("teste do exercicio 1", () => {

  test("enviando uma string não numerica deve retornar um null", () => {
    expect(convertStringToNumber("1x")).toBeNull()
    expect(convertStringToNumber("Ozemela")).toBeNull()
  })

  test("enviando uma string numerica deve retornar um number", () => {
    expect(typeof convertStringToNumber("2024")).toBe("number")
  })

  test("enviando um number deve retornar um null", () => {
    expect(convertStringToNumber(2024 as any)).toBeNull()
  })
})
