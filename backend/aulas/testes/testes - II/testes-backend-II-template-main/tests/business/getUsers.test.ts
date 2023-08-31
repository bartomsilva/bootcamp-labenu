
import { UserBusiness } from "../../src/business/UserBusiness";
import { GetUsersInputDTO } from "../../src/dtos/user/getUsers.dto";
import { BadRequestError } from "../../src/errors/BadRequestError";
import { USER_ROLES } from "../../src/models/User";
import { HashManagerMock } from "../mocks/HashManagerMock";
import { IdGeneratorMock } from "../mocks/IdGeneratorMock";
import { TokenManagerMock } from "../mocks/TokenManagerMock";
import { UserDatabaseMock } from "../mocks/UserDatabaseMock";

const userBusiness = new UserBusiness(
  new UserDatabaseMock(),
  new IdGeneratorMock(),
  new TokenManagerMock(),
  new HashManagerMock()
)

describe("teste get", () => {
  test("sucesso", async () => {
    const input: GetUsersInputDTO = {
      q: "",
      token: "token-mock-astrodev"
    }
    const output = await userBusiness.getUsers(input)
    expect(output).toHaveLength(2)
    expect(output).toContainEqual({
      id: "id-mock-astrodev",
      name: "Astrodev",
      email: "astrodev@email.com",
      createdAt: expect.any(String),
      role: USER_ROLES.ADMIN
    })
  })

  test("sucesso buscando um nome qualquer", async () => {
    const input: GetUsersInputDTO = {
      q: "Astrodev",
      token: "token-mock-astrodev"
    }
    const output = await userBusiness.getUsers(input)
    expect(output).toHaveLength(1)
    expect(output).toContainEqual({
      id: "id-mock-astrodev",
      name: "Astrodev",
      email: "astrodev@email.com",
      createdAt: expect.any(String),
      role: USER_ROLES.ADMIN
    })
  })

  test("casos de fracasso acesso negado", async () => {
    try {
      const input: GetUsersInputDTO = {
        q: "",
        token: "token-mock-fulano"
      }
      const output = await userBusiness.getUsers(input)      
    } catch (error) {
      if (error instanceof BadRequestError){
        expect(error.message).toBe("somente admins podem acessar")
      }      
    }
  })

  test("casos de fracasso token inválido", async () => {
    try {
      const input: GetUsersInputDTO = {
        q: "",
        token: "token-mock"
      }
      const output = await userBusiness.getUsers(input)      
    } catch (error) {
      if (error instanceof BadRequestError){
        expect(error.message).toBe("token inválido")
      }      
    }
  })
  
  
})