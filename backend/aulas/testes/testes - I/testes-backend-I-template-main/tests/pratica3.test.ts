
import {convertNumbersToObject} from "../src/pratica3"

describe("pratica 3", ()=>{

  test("Espera um null caso um dos parametros não seja number",()=>{
    expect(convertNumbersToObject(2,"a" as any)).toBeNull()
    expect(convertNumbersToObject("a" as any,10)).toBeNull()
  })

  test("Espera um objeto contendo sum=10 e multiplication=16" ,()=>{
    expect(convertNumbersToObject(2,8)).toEqual({sum:10, multiplication: 16})
  })

})