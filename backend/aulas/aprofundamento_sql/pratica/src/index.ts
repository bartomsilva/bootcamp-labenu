import express, { Request, Response } from 'express'
import cors from 'cors'
import { db } from "./database/knex"


const PORT = 3003

const server = express()
server.use(express.json())
server.use(cors())

server.listen(PORT, () => {
  console.log("server on in port ", PORT)
})

server.post("/create-table-users", async (req: Request, res: Response) => {
  try {

    const existsTableUser = await db.schema.hasTable('users');
    if (existsTableUser) {
      res.status(400)
      throw new Error("database error, user table already exists..")
    }

    await db.raw(`
        CREATE TABLE users (
            id PRIMARY KEY UNIQUE NOT NULL,
            name TEXT UNIQUE NOT NULL,
            salary INTEGER NOT NULL
        );
      `)

    res.status(200).send( { message: "users table successfully created!"} )

  } catch (error) {

    if (res.statusCode === 200) {
      res.status(500)
    }

    if (error instanceof Error) {
      res.send(error.message)
    } else {
      res.send("Erro inesperado")
    }
  }
})

server.get("/users", async (req: Request, res: Response) => {
  try {

    const existsTableUser = await db.schema.hasTable('users');
    if (!existsTableUser) {
      res.status(400)
      throw new Error("database error.")
    }

    // lembre-se do uso do await para executar a query (promessa)
    const result = await db.raw(`
        SELECT * FROM users;
      `)

    res.status(200).send(result)
  } catch (error) {

    if (res.statusCode === 200) {
      res.status(500)
    }

    if (error instanceof Error) {
      res.send(error.message)
    } else {
      res.send("Erro inesperado")
    }
  }
})

server.post("/users", async (req: Request, res: Response) => {
  try {
    const id = req.body.id
    const name = req.body.name
    const salary = req.body.salary

    const existsTableUser = await db.schema.hasTable('users');
    if (!existsTableUser) {
      res.status(400)
      throw new Error("database error.")
    }

    // validação de dados simplificada
    if (!id || !name || isNaN(salary)) {
      res.status(400)
      throw new Error("Dados inválidos")
    }

    // lembre-se do uso do await para executar a query (promessa)
    
    const result: Array<string> = await db.raw(`
          SELECT * FROM users
          WHERE id = "${id}" AND name = "${name}"    
  `)

    if (result.length > 0) {
      res.status(400)
      throw new Error("user already exists!")
    }

    await db.raw(`
	        INSERT INTO users (id, name, salary)
	        VALUES ("${id}", "${name}", "${salary}");
        `) // colocamos as expressões entre ${}

    res.status(200).send({ message: "Cadastro realizado com sucesso!" })

  } catch (error) {

    if (res.statusCode === 200) {
      res.status(500)
    }

    if (error instanceof Error) {
      res.send(error.message)
    } else {
      res.send("Erro inesperado")
    }
  }
})

server.delete("/users/:id", async (req: Request, res: Response) => {
  try {
    const idToDelete = req.params.id

    const existsTableUser = await db.schema.hasTable('users');
    if (!existsTableUser) {
      res.status(400)
      throw new Error("database error.")
    }

    //validação: checar se o item existe antes de deletá-lo
    const [user] = await db.raw(`
        SELECT * FROM users
        WHERE id = "${idToDelete}";
      `) // desestruturamos para encontrar o primeiro item do array
      

    if (!user) {
      res.status(404)
      throw new Error("'id' não encontrada")
    }

    //se chegou até aqui é porque podemos deletar
    await db.raw(`
        DELETE FROM users
        WHERE id = "${idToDelete}";
      `)

    res.status(200).send({ message: "User deletado com sucesso" })
  } catch (error) {

    if (res.statusCode === 200) {
      res.status(500)
    }

    if (error instanceof Error) {
      res.send(error.message)
    } else {
      res.send("Erro inesperado")
    }
  }
})

server.put("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id

    const newId = req.body.id
    const newName = req.body.name
    const newSalary = req.body.salary

    const existsTableUser = await db.schema.hasTable('users');
    if (!existsTableUser) {
      res.status(400)
      throw new Error("database error.")
    }

    if (newId !== undefined) {

      if (typeof newId !== "string") {
        res.status(400)
        throw new Error("'id' deve ser string")
      }

      if (newId.length < 1) {
        res.status(400)
        throw new Error("'id' deve possuir no mínimo 1 caractere")
      }
    }

    if (newName !== undefined) {

      if (typeof newName !== "string") {
        res.status(400)
        throw new Error("'name' deve ser string")
      }

      if (newName.length < 2) {
        res.status(400)
        throw new Error("'name' deve possuir no mínimo 2 caracteres")
      }
    }

    if (newSalary !== undefined) {

      if (typeof newSalary !== "number") {
        res.status(400)
        throw new Error("'salary' deve ser number")
      }

      if (newSalary < 0) {
        res.status(400)
        throw new Error("'salary' não pode ser negativo")
      }
    }

    // verificamos se o user a ser editado realmente existe
    const [user] = await db.raw(`
					SELECT * FROM users
					WHERE id = "${id}";
				`) // desestruturamos para encontrar o primeiro item do array

    // se existir, aí sim podemos editá-lo
    if (user) {
      await db.raw(`
							UPDATE users
							SET
								id = "${newId || user.id}",
								name = "${newName || user.name}",
								salary = ${isNaN(newSalary) ? user.salary : newSalary}
							WHERE
								id = "${id}";
						`)

    } else {
      res.status(404)
      throw new Error("'id' não encontrada")
    }

    res.status(200).send({ message: "Atualização realizada com sucesso" })

  } catch (error) {

    if (res.statusCode === 200) {
      res.status(500)
    }

    if (error instanceof Error) {
      res.send(error.message)
    } else {
      res.send("Erro inesperado")
    }
  }
})



