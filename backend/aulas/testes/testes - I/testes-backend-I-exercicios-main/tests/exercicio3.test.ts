import { getUsers, UserList } from "../src/exercicio3"
import { mockFindUsers} from "../tests/mocks/mockFindUsers"

describe("exercício 3", () => {

  test("se encontrar Astrodev na lista deve retornar true", () => {
    expect(mockFindUsers(getUsers(),"Astrodev")).toBeTruthy();
  })

  test("se não encontrar o nome na lista deve retornar false", () => {
    expect(mockFindUsers(getUsers(),"Bart")).toBeFalsy();
    expect(mockFindUsers(getUsers(),"Priscila")).toBeFalsy();
  })
}) 