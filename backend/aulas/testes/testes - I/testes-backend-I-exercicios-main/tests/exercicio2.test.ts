import { convertDate } from '../src/exercicio2'

// deve receber uma data no formato AAAA/MM/DD 
// dever retornar uma data no formato DD/MM/AA
describe("exercicio 2", () => {

  test("recebendo uma valor invalido retorna null", () => {
    expect(convertDate("29/09/2023")).toBeNull()
    expect(convertDate("Ozemela")).toBeNull()
    expect(convertDate(2024 as any)).toBeNull()
  })

  test("recebendo a data no formato correto deve retornar ela convertida", () => {
    const dateFormat = /^\d{2}\/\d{2}\/\d{4}$/
    // teste no formato dd/mm/aaaa conforme regex
    expect(convertDate("2023/08/29")).toMatch(dateFormat)
    // teste comparando envio e retorno
    expect(convertDate("2023/08/29")).toEqual("29/08/2023")
  });
}) 