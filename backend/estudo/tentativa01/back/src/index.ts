import express, {Request, Response} from "express"
import cors from "cors"

const PORT_SERVER:number = 3004

const server = express()
server.use(express.json())
server.use(cors())

server.get('/toktok',(req:Request, res:Response)=>{
  res.send("quem é?")
})

server.post('/test',(req:Request, res:Response)=>{
  const newName = req.body.name as string
  const newAge  = req.body.age  as number

  try {

      if(newName && typeof newName !="string"){
         res.statusCode = 400
         throw new Error("o nome precisa ser uma string")
      }
     
      if(newAge && typeof newAge != "number"){
         res.status(400)
         throw new Error("a idade precisa ser number")
      }
    
    console.log("name",typeof newName)
    console.log("age",typeof newAge)

    const result = {
      name: newName && "Jesus", 
      age: newAge || 33 
    }
    res.status(201).send(result)

  } catch (error:unknown) {

    // if (res.statusCode === 200) {
    //     res.status(500)
    // }

		// adicionamos um fluxo de validação do parâmetro 'error'
    if (error instanceof Error) {
        res.send(error.message)
    } else {
        res.send("Erro inesperado")
    }
}
  

})


server.listen(PORT_SERVER, ()=>{console.log("server is on port:",PORT_SERVER)})