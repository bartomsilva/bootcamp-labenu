import { UserBusiness } from "../../src/business/UserBusiness"
import { GetUsersSchema } from "../../src/dtos/user/getUsers.dto"
import { USER_ROLES } from "../../src/models/User"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"
import { BadRequestError } from "../../src/errors/BadRequestError"
import { GetUsersByIdSchema } from "../../src/dtos/user/getUserById.dto"

describe("Testando getUsersbyId", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock()
  )
  test("deve retornar um usuário igual o modelo", async () => {
    const input = GetUsersByIdSchema.parse({
      id: "id-mock-fulano",
      token: "token-mock-astrodev"
    })

    const output = await userBusiness.getUsersById(input)

    expect(output).toEqual({
      id: "id-mock-fulano",
      name: "Fulano",
      email: "fulano@email.com",
      createdAt: expect.any(String),
      role: USER_ROLES.NORMAL
    })
  })

  test("deve retornar a mensagem token inválido", async () => {
    try {
      const input = GetUsersByIdSchema.parse({
        id: "id-mock-fulano",
        token: "token-falso"
      })

      const output = await userBusiness.getUsersById(input)

    } catch (error) {
      if (error instanceof BadRequestError) {
        expect(error.message).toEqual("token inválido")
      }
    }
  })

  test("deve retornar a mensagem id não encontrado",
    async () => {
      try {
        const input = GetUsersByIdSchema.parse({
          id: "id-falso",
          token: "token-mock-fulano"
        })

        const output = await userBusiness.getUsersById(input)

      } catch (error) {
        if (error instanceof BadRequestError) {
          expect(error.message).toEqual("id não encontrado")
        }
      }
    })

})
