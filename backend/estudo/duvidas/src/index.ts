import express, {Request, Response} from "express"
import cors from "cors"

const PORT_SERVER:number = 3004

const server = express()
server.use(express.json())
server.use(cors())


server.get('/accounts/exclusive',(req:Request, res:Response)=>{
  
  res.send("**** conta exclusiva ***")

})

server.get('/accounts/students',(req:Request, res:Response)=>{
  
  res.send("**** conta student ***")

})

server.get('/accounts/:id',(req:Request, res:Response)=>{
  
  res.send("conta simples")
  
})







  

server.listen(PORT_SERVER, ()=>{console.log("server is on port:",PORT_SERVER)})