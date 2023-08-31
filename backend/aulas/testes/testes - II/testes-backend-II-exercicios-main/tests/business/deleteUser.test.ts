import { UserBusiness } from "../../src/business/UserBusiness"
import { DeleteUserInputDTO } from "../../src/dtos/user/deleteUser.dto"
import { BadRequestError } from "../../src/errors/BadRequestError"
import { USER_ROLES } from "../../src/models/User"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("Testando deleteUser", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock()
  )

  test("deve retornar a mensagem token iválido", async ()=>{
    try {
      const input: DeleteUserInputDTO= {
        userId: "id-falso",
        token: "xxxxxxxxxx"
      }
      await userBusiness.deleteUser(input)
    } catch (error) {
      if ( error instanceof BadRequestError) {
        expect(error.message).toEqual("token inválido")
      }
    }
  })


})