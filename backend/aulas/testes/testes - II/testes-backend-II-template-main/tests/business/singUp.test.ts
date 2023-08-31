import { UserBusiness } from "../../src/business/UserBusiness";
import { SignupInputDTO } from "../../src/dtos/user/signup.dto";
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

describe("teste de singup", () => {
  test("deve retornar um token", async () => {
    const input: SignupInputDTO = {
      name: "Bart",
      email: "bart@gmail.com",
      password: "bart123@email.com"
    }
    const output = await userBusiness.signup(input)
    expect(output.token).toBeDefined()
    expect(output.message).toEqual("Cadastro realizado com sucesso")    
    expect(output.token).toEqual("token-mock")
  })
})
