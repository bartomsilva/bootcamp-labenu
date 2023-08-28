


/*
C- R- U- D

Create - POST   - insert - ( o que e onde ? )
Read   - GET    - select - ( de onde e o que * all,.específico de onde tudo ou esp; )
Update - PUT    - update - ( onde e o que pra quem)
Delete - DELETE - delete - ( de onde e de quem)

WHERE 
*/

import { db } from "./database/knex";
import express, { Request, Response} from "express"
import cors from "cors"
import internal from "stream";

const app = express()
app.use(express.json())
app.use(cors())
app.listen(3003, ()=>{console.log("server on port 3003")})


app.get("/users",async (req:Request, res:Response)=>{
  try {
    const result = await db("users");
    res.send(result)
    
  } catch (error:unknown) {
    res.status(res.statusCode).send(error);       
  }
})

app.post("/users", async (req:Request, res:Response)=>{
  try {
    const { id, name, salary } = req.body

    // tramento 
    // fim do tratamento

    interface User {
      id: number
      name: string
      salary: number
    }

    const newUser:User ={
      "id": id,
      "name": name,
      "salary": salary
    }

    await db("users").insert(newUser)
    res.send("user resgistered successfully")
    

  } catch (error) {
    res.status(res.statusCode).send(error);       

  }

})




