import express, { Request, Response } from 'express'
import cors from 'cors'
import { accounts } from './database'
import { ACCOUNT_TYPE } from './types'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong!")
})


/*
  ## getAllAccounts
*/
app.get("/accounts", (req: Request, res: Response) => {
    try {
        res.send(accounts)
    } catch (error) {
        handlerError(res, error)
    }
})

/*
  ## get account by ID
*/
app.get("/accounts/:id", (req: Request, res: Response) => {
    try {
        const id = req.params.id

        // o id deve iniciar com a letra 'a'
        if (id[0] !== "a") {
            res.statusCode = 400
            throw new Error("'id' inválido. Deve iniciar com a letra 'a'.")
        }

        // localizando a conta
        const result = accounts.find((account) => account.id === id)

        if (result == undefined) {
            res.statusCode = 404
            throw new Error("Conta não encontrada. Verifique a 'id'.")
        }

        res.status(200).send(result)

    } catch (error) {
        handlerError(res, error)
    }

})

/*
  ## delete account by ID
*/
app.delete("/accounts/:id", (req: Request, res: Response) => {
    try {
        const id = req.params.id

        // o id deve iniciar com a letra 'a'
        if (id[0] !== "a") {
            res.statusCode = 400
            throw new Error("'id' inválido. Deve iniciar com a letra 'a'.")
        }

        // localizando a conta 
        const accountIndex = accounts.findIndex((account) => account.id === id)

        if (accountIndex < 0) {
            res.statusCode = 404
            throw new Error("Conta não encontrada. Verifique a 'id'.")
        }

        // excutando exclusão da conta
        accounts.splice(accountIndex, 1)

        res.status(200).send("Conta deletada com sucesso.")

    } catch (error) {
        handlerError(res, error)
    }
})

/*
  ## edit account by ID
*/
app.put("/accounts/:id", (req: Request, res: Response) => {
    try {
        const id = req.params.id

        const newId = req.body.id as string
        const newOwnerName = req.body.ownerName as string
        const newBalance = req.body.balance as number
        const newType = req.body.type as ACCOUNT_TYPE

        // o id deve iniciar com a letra 'a'
        if (id[0] !== "a") {
            res.statusCode = 400
            throw new Error("'id' inválido. Deve iniciar com a letra 'a'.")
        }

        // o novo id deve iniciar com a letra 'a'
        if (newId !== undefined) {
            if (newId[0] !== "a") {
                res.statusCode = 400
                throw new Error("'newId' inválido. Deve iniciar com a letra 'a'.")
            }
        }

        // o ownerName dever ter no mínimo 2 caracteres
        if (newOwnerName !== undefined) {
            if (typeof newOwnerName !== "string" || newOwnerName.length < 2) {
                res.statusCode = 400
                throw new Error("'newOwnerName' inválido. Deve ser tipo string e no mínimo ter dois caracteres.")
            }
        }

        // o balance dever ser um valor numérico positivo
        if (newBalance !== undefined) {
            if (typeof newBalance !== "number" || newBalance < 0) {
                res.statusCode = 400
                throw new Error("'newBalance' inválido. Deve ter valor igual a zero ou maior.")
            }
        }

        // o tipo da conta deve obedecer os tipos previamente determinados
        if (newType !== undefined) {
            if (Object.values(ACCOUNT_TYPE).findIndex((account) => account == newType) < 0) {
                res.statusCode = 404
                throw new Error("'newType' inválido.")
            }
        }

        // localizando a conta 
        const account = accounts.find((account) => account.id === id)

        if (account == undefined) {
            res.statusCode = 404
            throw new Error("Conta não encontrada. Verifique a 'id'.")
        }
        
        // atualizando dos dados 
        account.id = newId || account.id
        account.ownerName = newOwnerName || account.ownerName
        account.type = newType || account.type
        account.balance = newBalance>=0? newBalance : account.balance

        console.log(newBalance)

        res.status(200).send("Atualização realizada com sucesso.")

    } catch (error) {
        handlerError(res, error)
    }

})

const handlerError = (res: Response, error: unknown) => {
    if (res.statusCode === 200) {
        res.status(500)
    }
    if (error instanceof Error) {
        res.send(error.message)
    } else {
        res.send("Erro inesperado.")
    }
}