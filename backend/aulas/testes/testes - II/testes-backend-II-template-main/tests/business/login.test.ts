import { UserBusiness } from "../../src/business/UserBusiness";
import { LoginInputDTO } from "../../src/dtos/user/login.dto";
import { BadRequestError } from "../../src/errors/BadRequestError";
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

describe("teste de login, caso de SUCESSO", () => {
  test("deve retornar um token", async () => {
    const input: LoginInputDTO = {
      email: "fulano@email.com",
      password: "fulano123"
    }
    const output = await userBusiness.login(input)
    expect(output.token).toBeDefined()
    expect(output.message).toEqual("Login realizado com sucesso")
    expect(output).toEqual({
      message: "Login realizado com sucesso",
      token: "token-mock-fulano"
    })
  })

  test("deve retornar um token", async () => {
    const input: LoginInputDTO = {
      email: "astrodev@email.com",
      password: "astrodev99"
    }
    const output = await userBusiness.login(input)
    expect(output.token).toBeDefined()
    expect(output.message).toEqual("Login realizado com sucesso")
    expect(output).toEqual({
      message: "Login realizado com sucesso",
      token: "token-mock-astrodev"
    })
  })
})

describe("teste de login, caso de FRACASSO", () => {

  test("não deve retornar um token, com email não cadastrado", async () => {
    try {
      const input: LoginInputDTO = {
        email: "fulano@emai.com", 
        password: "fulano123"
      }
      const output = await userBusiness.login(input)
    } catch (error) {
      if (error instanceof BadRequestError) {
        expect(error.message).toBe("'email' não encontrado")
      }
    }
  })

  test("não deve retornar um token, com senha inválida", async () => {
    try {
      const input: LoginInputDTO = {
        email: "fulano@email.com",
        password: "fulano12"
      }
      const output = await userBusiness.login(input)      
    } catch (error) {
      if (error instanceof BadRequestError) {
        expect(error.message).toBe("'email' ou 'password' incorretos")
      }
    }
  })
})



