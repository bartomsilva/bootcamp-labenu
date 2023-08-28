import express, { Request, Response } from 'express'
import cors from 'cors'
import { db } from './database/knex'
import { z } from 'zod'
import { ZodError } from 'zod'
import { error } from 'console'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log(`Servidor rodando na porta ${3003}`)
})

type Bands = {
    id: string,
    name: string
}

app.get("/ping", async (req: Request, res: Response) => {
    try {
        res.status(200).send({ message: "Pong!" })

    } catch (error) {
        handleError(req, res, error)
    }
})

app.get("/bands", async (req: Request, res: Response) => {
    try {
        const result = await db.raw(`SELECT id, name FROM bands;`)
        res.status(200).send(result)
    } catch (error) {
        handleError(req, res, error)
    }
})

app.post("/bands", async (req: Request, res: Response) => {
    try {

        const createBandSchema = z.object({
            id: z.string({
                required_error: "'id' is required.",
                invalid_type_error: "'id' must be of string type.",
            }).min(1, "have at least one character"),
            name: z.string({
                required_error: "'name' is required.",
                invalid_type_error: "'name' must be of string type.",
            }).min(1, "have at least one character")
        }).transform(data => data as Bands)

        createBandSchema.parse(req.body);

        const newBand: Bands =
        {
            id: req.body.id,
            name: req.body.name
        }

        const [result] = await db.raw(`SELECT * FROM bands where id="${newBand.id}"` )
        if (result){
            res.status(400)
            throw new Error("'id' already exists.")
        }

        await db.raw(`INSERT INTO bands (id, name)
                     VALUES ("${newBand.id}","${newBand.name}" );`)
        // await db("bands").insert(newBand)

        res.status(200).send("'band' registered successfully.")

    } catch (error) {
        handleError(req, res, error)
    }
})

app.put("/bands/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        const schema = z.object({
            id: z.string({
                invalid_type_error: "'id' must be of string type.",
            }).min(1, "have at least one character").optional(),
            name: z.string({
                invalid_type_error: "'name' must be of string type.",
            }).min(1, "have at least one character").optional()
        });

        schema.parse(req.body);

        const { id: newId, name: newName }: Bands = req.body

        const [bands] = await db.raw(`SELECT * FROM bands WHERE id="${id}";`)

        if (bands) {
            await db.raw(`
            UPDATE bands 
            SET 
                id="${newId || bands.id}", 
                name="${newName || bands.name}"
            WHERE id="${id}"`)

            res.status(200).send("'band' upadated successfully.")
        } else {
            res.status(400)
            throw new Error("'id' not found.")
        }

    } catch (error) {
        handleError(req, res, error)
    }
})









function handleError(req: Request, res: Response, error: unknown) {

    if (req.statusCode === 200) {
        res.status(500)
    }
    if (error instanceof ZodError) {
        res.status(422).send(error.issues[0].message);
    } else if (error instanceof Error) {
        res.send(error.message)
    } else {
        res.send("Erro inesperado")
    }
}