import { Request, Response } from "express"
import { SingUpSchema } from "../dtos/singup.dto"
import { UserBusiness } from "../business/UserBusiness"

export class UserController{
  
  constructor( private userBusiness: UserBusiness ){}

  singUp = async (req:Request, res:Response):Promise<void> =>{
    try {

      const input = SingUpSchema.parse({
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      })     
      
      await this.userBusiness.SingUp(input)

      res.sendStatus(201)   

    } catch (error) {
      res.send(error)      
    }
  }

}