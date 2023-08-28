import express, {Request, Response} from 'express'
import cors from 'cors'

import { users, products } from './database'

const server = express()
server.use(express.json())
server.use(cors())

server.listen(3003,()=>{console.log("Servidor on na porta 3003") })

server.get('/ping',(req:Request, res:Response)=>{
  res.send("Pong!")
})

// Get All Users
server.get('/users',(req:Request, res:Response)=>{
  res.status(200).send(users)
})

// Get All Products
server.get('/products',(req:Request, res:Response)=>{
  res.status(200).send(products)
})

/*


## Refatorar o GET /products
Caso seja recebido um termo de busca no query params name, a resposta da API será a lista filtrada baseada no nome dos produtos. Caso a query params chegue undefined, continua sendo devolvida a lista de todos os produtos.
- method HTTP (GET)
- path ("/product")
- query params
    - name
- response
    - status 200
    - array do resultado da busca ou todos os produtos

*/