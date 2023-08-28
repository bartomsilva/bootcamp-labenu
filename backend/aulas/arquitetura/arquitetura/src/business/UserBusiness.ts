import { UserDBmodel } from "../models/Users";
import { SingUpInputDTO } from "../dtos/singup.dto";
import { UserDataBase } from "../database/UserDatabase";


export class UserBusiness{

  constructor( private userDataBase: UserDataBase ){}

  SingUp = async (input: SingUpInputDTO):Promise<void>=>{
 
    const newUser: UserDBmodel = {
      id: input.id,
      name: input.name,
      email: input.email,
      password: input.password,
      created_at: new Date().toISOString()
    }  


    // teste do email ( se já está sendo utilizado )
    const [resultDB] = await this.userDataBase.findByEmail(input.email)    
    if( resultDB ){
      throw new Error("email já cadastrado")
     }
    
     await this.userDataBase.insertUser(newUser)    

  }
}