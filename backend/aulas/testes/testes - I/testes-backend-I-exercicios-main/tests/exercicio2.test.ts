import { convertDate } from '../src/exercicio2'

// deve receber uma data no formato AAAA/MM/DD 
// dever retornar uma data no formato DD/MM/AA
describe("exercicio 2", () => {

  test("recebendo uma valor invalido retorna null", () => {
    expect(convertDate("29/09/2023")).toBeNull() // ja convertida
    expect(convertDate("2023/02/30")).toBeNull() // data invalida
    expect(convertDate("Ozemela")).toBeNull() // string normal
    expect(convertDate(2024 as any)).toBeNull() // number
    expect(convertDate("2023/02/30")).not.toEqual("30/02/2023") // dia
    expect(convertDate("2023/13/30")).not.toEqual("30/13/2023") // mes
    expect(convertDate("0000/10/30")).not.toEqual("30/10/0000") // ano
    expect(convertDate(null as any)).toBeNull() // null
    expect(convertDate(undefined as any)).toBeNull() // undefined
    expect(convertDate(true as any)).toBeNull() // boolean
    expect(convertDate([] as any)).toBeNull() // array
    expect(convertDate({} as any)).toBeNull() // objeto
  })
  test("recebendo a data no formato correto deve retornar ela convertida", () => {
    const dateFormat = /^\d{2}\/\d{2}\/\d{4}$/
    // teste no formato dd/mm/aaaa conforme regex
    expect(convertDate("2023/08/29")).toMatch(dateFormat)
    // teste comparando envio e retorno
    expect(convertDate("2023/08/29")).toEqual("29/08/2023")


  });
}) 