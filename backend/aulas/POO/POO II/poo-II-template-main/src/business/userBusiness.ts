import { UserDataBase } from "../database/userDataBase"
import { BadRequest } from "../error/BadRequest"
import { ConflictError } from "../error/ConflictError"
import { User } from "../models/User"
import { UserDB } from "../interfaces"
import { NotFound } from "../error/NotFound"
import { CreateUserInputDTO, CreateUserOutputDTO, CreateUserSchema } from "../dtos/createUser.dto"
import { UpdateUserInputDTO, UpdateUserOutputDTO, UpdateUserSchema } from "../dtos/editUser.dto"

//========================
export class UserBussiness {
  constructor(private userDataBase: UserDataBase) { }

  //============= GET USERS
  public getUsers = async (q: string): Promise<User[]> => {

    let response: User[] = await this.userDataBase.findUser(q)

    return response
  }

  //=============== CREATE USER
  public createUser = async (input: CreateUserInputDTO): Promise<CreateUserOutputDTO> => {

    CreateUserSchema.parse(input)

    const { id, name, email, password } = input

    const userDBExists: UserDB = await this.userDataBase.findId(id)

    if (userDBExists) {
      throw new ConflictError("'id' já existe")
    }

    const newUser = new User(
      id,
      name,
      email,
      password,
      new Date().toISOString()
    )

    const newUserDB: UserDB = {
      id: newUser.getId(),
      name: newUser.getName(),
      email: newUser.getEmail(),
      password: newUser.getPassword(),
      created_at: newUser.getCreatedAt()
    }

    this.userDataBase.inertUser(newUserDB)

    const output: CreateUserOutputDTO = {
      message: "usuário cadastrado com sucesso",
      user: {
        id: newUser.getId(),
        name: newUser.getName(),
        email: newUser.getEmail(),
        createdAt: newUser.getCreatedAt()
      }

    }

    return output
  }

  //=============== DELETE USER
  public deleteUser = async (idDelete: string) => {

    if (!idDelete || typeof idDelete != "string") {
      throw new BadRequest("'id' inválido ou não enviado")
    }

    const result = await this.userDataBase.findId(idDelete)

    if (!result) {
      throw new NotFound("'id' não encontrado")
    }

    await this.userDataBase.deleteUser(idDelete)

  }

  //============= UPDATE USER
  public updateUser = async (input: UpdateUserInputDTO, idEdit: string): Promise<UpdateUserOutputDTO> => {

    UpdateUserSchema.parse(input)

    const { id, name, email, password } = input

    const userDBExists: UserDB = await this.userDataBase.findId(idEdit)
    if (!userDBExists) {
      throw new NotFound("'id' não existe")
    }
    if (id) {
      const userIDNewExist: UserDB = await this.userDataBase.findId(id)
      if (userIDNewExist){
        throw new ConflictError("o novo 'id' já está sendo utilizado")
      }
    }

    const updateUser = new User(
      id || userDBExists.id,
      name || userDBExists.name,
      email || userDBExists.email,
      password || userDBExists.password,
      userDBExists.created_at
    )

    const updateUserDB: UserDB = {
      id: updateUser.getId(),
      name: updateUser.getName(),
      email: updateUser.getEmail(),
      password: updateUser.getPassword(),
      created_at: updateUser.getCreatedAt()
    }

    await this.userDataBase.updateUser(updateUserDB,idEdit)

    const output: UpdateUserOutputDTO = {
      message: "dados do usuário atualizados com sucesso",
      user: {
        id: updateUser.getId(),
        name: updateUser.getName(),
        email: updateUser.getEmail(),
        createdAt: updateUser.getCreatedAt()
      }
    }
    
    return output
  }
}

