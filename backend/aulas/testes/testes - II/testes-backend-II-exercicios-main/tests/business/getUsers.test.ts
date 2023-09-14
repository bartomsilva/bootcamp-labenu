import { UserBusiness } from "../../src/business/UserBusiness"
import { GetUsersSchema } from "../../src/dtos/user/getUsers.dto"
import { USER_ROLES } from "../../src/models/User"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"
import { BadRequestError } from "../../src/errors/BadRequestError"

describe("Testando getUsers", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock()
  )

  test("deve retornar uma lista de users", async () => {
    const input = GetUsersSchema.parse({
      token: "token-mock-astrodev"
    })

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

  test("deve retornar um usuário", async () => {
    const input = GetUsersSchema.parse({
      q: "dev",
      token: "token-mock-astrodev"
    })

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
  
  test("deve retornar a mensagem somente admins podem acessar", async () => {
    try {
      const input = GetUsersSchema.parse({
        token: "token-mock-fulano"
      })

      const output = await userBusiness.getUsers(input)

    } catch (error) {
      console.log(error)
      if (error instanceof BadRequestError) {
        expect(error.message).toEqual("somente admins podem acessar")
      }
    }
  })

  test("deve retornar a mensagem token inválido", async () => {
    try {
      const input = GetUsersSchema.parse({
        token: "token-falso"
      })

      const output = await userBusiness.getUsers(input)

    } catch (error) {
      console.log(error)
      if (error instanceof BadRequestError) {
        expect(error.message).toEqual("token inválido")
      }
    }
  })


})