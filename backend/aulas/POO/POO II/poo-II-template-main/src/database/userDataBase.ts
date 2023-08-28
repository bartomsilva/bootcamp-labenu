import { promises } from "dns";
import { UserDB } from "../interfaces";
import { User } from "../models/User";
import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase {

  //============= FIND USER
  public findUser = async (q: string): Promise<User[]> => {

    let resultDB: UserDB[]
    if (q) {
      resultDB = await BaseDataBase.connection("users").where("name", "like", `%${q}%`)
    } else {
      resultDB = await BaseDataBase.connection("users")
    }
    const response = await this.convertDBtoUser(resultDB)
    return response
  }


  //============== INSERT USER
  public inertUser = async (newUser: UserDB): Promise<void> => {
    await BaseDataBase.connection("users").insert(newUser)
  }

  //=============== DELETE USER
  public deleteUser = async (id: string):Promise<void> => {
    await BaseDataBase.connection("users").del().where({ id })
  }

  //=============== UPDATE USER
  public updateUser = async (dataUser: UserDB, id: string):Promise<void> => {
    await BaseDataBase.connection("users").update(dataUser).where({id})
  }

  //=========== FIND ID
  public findId = async (id: string): Promise<UserDB> => {
    const [result]: UserDB[] = await BaseDataBase.connection("users").where({ id })
    return result
  }

  //=====================
  private convertDBtoUser = async (users: UserDB[]): Promise<User[]> => {
    const response: User[] = users.map((user) => new User(
      user.id,
      user.name,
      user.email,
      user.password,
      user.created_at
    ))
    return response
  }

}