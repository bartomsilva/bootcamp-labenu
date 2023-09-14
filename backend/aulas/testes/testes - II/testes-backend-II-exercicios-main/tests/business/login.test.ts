import { UserBusiness } from "../../src/business/UserBusiness"
import { LoginSchema } from "../../src/dtos/user/login.dto"
import { BadRequestError } from "../../src/errors/BadRequestError"
import { NotFoundError } from "../../src/errors/NotFoundError"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("Testando login", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock()
  )

  test("deve gerar um token ao logar", async () => {
    const input = LoginSchema.parse({
      email: "fulano@email.com",
      password: "fulano123"
    })

    const output = await userBusiness.login(input)

    expect(output).toEqual({
      message: "Login realizado com sucesso",
      token: "token-mock-fulano"
    })
  })

  test("deve gerar um token ao logar", async () => {
    const input = LoginSchema.parse({
      email: "astrodev@email.com",
      password: "astrodev99"
    })

    const output = await userBusiness.login(input)

    expect(output).toEqual({
      message: "Login realizado com sucesso",
      token: "token-mock-astrodev"
    })
  })

  test("deve retornar a mensagem email não encontrado ao tentar logar", async () => {
    expect.assertions(1)
    try {
      const input = LoginSchema.parse({
        email: "ivanlid@email.com",
        password: "fulano123"
      })
      const output = await userBusiness.login(input)

    } catch (error) {
      if (error instanceof NotFoundError) {
        expect(error.message).toEqual("'email' não encontrado")
      }
    }
  })

  test("deve retornar a mensagem 'email' ou 'password' incorretos ao tentar logar",
    async () => {
      expect.assertions(1)
      try {
        const input = LoginSchema.parse({
          email: "fulano@email.com",
          password: "fulano12"
        })
        const output = await userBusiness.login(input)

      } catch (error) {
        console.log(error)
        if (error instanceof BadRequestError) {
          expect(error.message).toEqual("'email' ou 'password' incorretos")
        }
      }
    })


})