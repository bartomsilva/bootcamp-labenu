import { Request, Response } from "express"
import { User } from "../models/User"
import { UserBussiness } from "../business/userBusiness"
import { handlerError } from "../error/handlerError"
import { CreateUserOutputDTO, CreateUserSchema } from "../dtos/createUser.dto"
import { UpdateUserInputDTO, UpdateUserOutputDTO } from "../dtos/editUser.dto"

// código anterior dos DTOs aqui <<< (CreateUserInputDTO e CreateUserOutputDTO)

export class UserController {
  constructor(private userBusiness: UserBussiness) { }

  //============= GET USERS
  public getUsers = async (req: Request, res: Response): Promise<void> => {

    try {
      const q = req.query.q as string
      const response: User[] = await this.userBusiness.getUsers(q)
      res.status(200).send({ data: response })

    } catch (error) {
      handlerError(res, error)
    }
  }

  //=============== CREATE USER
  public createUser = async (req: Request, res: Response): Promise<void> => {
    try {

      const input = {
          id: req.body.id,
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
      }
        
      const response: CreateUserOutputDTO = await this.userBusiness.createUser(input)

      res.status(201).send(response)
    } catch (error) {
      handlerError(res, error)
    }
  }

  //=============== DELETE USER
  public deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {

      const idDelete = req.params.id
      await this.userBusiness.deleteUser(idDelete)

      res.status(200).send({ message: "usuário deletado com sucesso" })

    } catch (error) {
      handlerError(res, error)
    }
  }

  //=============== UPDATE USER
  public updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const  idEdit = req.params.id

      const input: UpdateUserInputDTO = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
       }

      const response: UpdateUserOutputDTO = await this.userBusiness.updateUser(input,idEdit)

      res.status(200).send(response)
    } catch (error) {
      handlerError(res,error)

    }
  }

}