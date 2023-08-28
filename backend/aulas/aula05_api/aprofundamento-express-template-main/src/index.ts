import express, { Request, Response } from 'express'
import cors from 'cors'
import { accounts } from './database'
import { TAccount } from './types'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong!")
})

app.get("/accounts", (req: Request, res: Response) => {
    res.send(accounts)
})

app.get("/accounts/:id", (req: Request, res: Response) => {
    const id = req.params.id
    const result: TAccount = accounts.find((account)=>account.id ===id)
    res.send(result?result:"id não encontrado")
})