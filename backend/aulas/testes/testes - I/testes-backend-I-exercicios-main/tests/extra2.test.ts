import { challenge2} from "../src/extra2"

describe("testando o desafio 2",()=>{
  test("deve retornar {error: true}",()=>{
    expect(challenge2("10" as any,0)).toEqual({error: true})
    expect(challenge2(10,null as any)).toEqual({error: true})
    expect(challenge2(0,0)).toEqual({error: true})
  })
  
  test("deve retornar um objeto contendo {division: 5, rest: 0}",()=>{
    expect(challenge2(10,2)).toEqual({division: 5, rest: 0})
  })
})