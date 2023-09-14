import { UserBusiness } from "../../src/business/UserBusiness"
import { DeleteUserInputDTO } from "../../src/dtos/user/deleteUser.dto"
import { BadRequestError } from "../../src/errors/BadRequestError"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("Testando deleteUser", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock())

  test("deve retornar a mensagem token iválido",
    async () => {
      // try {
      //   const input: DeleteUserInputDTO = {
      //     userId: "id-falso",
      //     token: "xxxxxxxxxx"
      //   }
      //   await userBusiness.deleteUser(input)
      // } catch (error) {
      //   if (error instanceof BadRequestError) {
      //     expect(error.message).toEqual("token inválido")
      //   }
      // }
      async () => {
        try {
          const input: DeleteUserInputDTO = {
            userId: "id-falso",
            token: "xxxxxxxxxx"
          }
          await userBusiness.deleteUser(input)
        } catch (error) {
          if (error instanceof BadRequestError) {
            expect(error.message).toEqual("token inválido")
          }
        }
    })

  test("deve retornar a mensagem token iválido",
    async () => {
      try {
        const input: DeleteUserInputDTO = {
          userId: "id-mock-fulano",
          token: "xxxxxxxxxx"
        }
        await userBusiness.deleteUser(input)
      } catch (error) {
        if (error instanceof BadRequestError) {
          expect(error.message).toEqual("token inválido")
        }
      }
    })

  test("deve retornar a mensagem somente admins podem acessar",
    async () => {
      try {
        const input: DeleteUserInputDTO = {
          userId: "id-mock-fulano",
          token: "token-mock-fulano"
        }
        await userBusiness.deleteUser(input)
      } catch (error) {
        if (error instanceof BadRequestError) {
          expect(error.message).toEqual("somente admins podem acessar")
        }
      }
    })

  test("deve retornar a mensagem 'id' não encontrado.",
    async () => {
      try {
        const input: DeleteUserInputDTO = {
          userId: "id-nao-cadastrado",
          token: "token-mock-astrodev"
        }
        await userBusiness.deleteUser(input)
      } catch (error) {
        if (error instanceof BadRequestError) {
          expect(error.message).toEqual("'id' não encontrado.")
        }
      }
    })

  test("deve retornar a mensagem usuário deletado com sucesso.",
    async () => {
      const input: DeleteUserInputDTO = {
        userId: "id-mock-fulano",
        token: "token-mock-astrodev"
      }
      const result = await userBusiness.deleteUser(input)
      expect(result.message).toEqual("usuário deletado com sucesso.")
    }
  )

})