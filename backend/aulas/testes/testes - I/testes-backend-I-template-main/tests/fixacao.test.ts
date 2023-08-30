import { convertStringToArray } from "../src/fixacao"

describe("fixação", ()=>{

  
  test("enviando algo diferente de string, espera null" , ()=> {
      expect(convertStringToArray(undefined as any)).toBeNull()
      expect(convertStringToArray(10 as any)).toBeNull()
  })

  test("enviando a string dev, espera receber um array contendo ['d','e','v']", ()=> {
    expect(convertStringToArray("dev")).toEqual(["d","e","v"])
  })
})

