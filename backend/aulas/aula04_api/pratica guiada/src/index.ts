import express, { Request, Response } from 'express'
import cors from 'cors'
import { courses, students } from './database'
import { COURSE_STACK, Student, TCourse } from './types'

// create server
const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get('/', (req: Request, res: Response) => {
    res.send('Api online...')
})

app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong!')
})

app.get('/courses', (req: Request, res: Response) => {
    res.status(200).send(courses)
    // res.status(200).send({data:courses}) // enviar de forma com chave
})

app.get('/courses/search', (req: Request, res: Response) => {
    // const query = req.query.name as string
    const query = req.query.name as string
    if(!query) res.status(400).send("parâmentro de busca (name) não informado!")

    const result = courses.filter((course) => course.name.toLowerCase().includes(query.toLowerCase()))
    // const result = courses.filter((course) => course.name.toLowerCase().includes(query.toString().toLowerCase()))
    res.status(200).send(result)
})

app.post('/courses', (req: Request, res: Response) => {

    if (Object.keys(req.body).length === 0) {
        res.status(400).send("o body é requerido!")
    }

    // informações recebidas
    const id = req.body.id as string
    const name = req.body.name as string
    const lessons = req.body.lessons as number
    const stack = req.body.stack as COURSE_STACK

    try {
        if (!id || typeof id !== "string") {
            res.statusCode = 400
            throw new Error("o Id precisa ser do tipo string!")
        }
        if (!name || typeof name !== "string" || name.length < 1) {
            res.statusCode = 400
            throw new Error("o Nome precisa ser do tipo string!")
        }
        if (!lessons || typeof lessons !== "number" || lessons < 1) {
            res.statusCode = 400
            throw new Error("a Lição precisa ser do tipo number e no mínimo uma lição!")
        }

        const resultStack:number = (Object.values(COURSE_STACK).indexOf(stack))+1
        if (!stack || !resultStack){
             throw new Error("Stack inválida, valores válidos:(" + Object.values(COURSE_STACK) + ")")
        }



        const newCourse:TCourse={
            id,
            name,
            lessons,
            stack
        }
        // adiciona ao "banco de dados"
        courses.push(newCourse)
        res.status(201).send("Curso resgistrado como sucesso")

    } catch (error: any) {

        if (res.statusCode == 200) {
            res.status(500)
        }
        res.send(error.message)
    }
})


///////////////////// GET ALL USERS
app.get('/students', (req: Request, res: Response) => {
    res.status(200).send(students)
})


//////////////////////// GET STUDENT BY NAME
app.get('/students/search', (req: Request, res: Response) => {
    const name = req.query.name as string
    if (!name) {
        res.status(400).send("parâmetro de busca não enivado(name)")
    }
    res.status(200).send(students.filter((student) => student.name.toLowerCase().includes(name.toLowerCase())))
})

/////////////////////////////// CREATE USER
app.post('/students', (req: Request, res: Response) => {

    if (Object.keys(req.body).length === 0) {
        res.statusCode = 400
        res.status(400).send("o body é requerido!")
    }

    const { id, name, age } = req.body

    if (!id || typeof id !== "string") {
        res.statusCode = 400
        throw new Error("o Id precisa ser do tipo string!")
    }
    if (!name || typeof name !== "string") {
        res.statusCode = 400
        throw new Error("o Nome precisa ser do tipo string!")
    }
    if (!age || typeof age !== "number") {
        res.statusCode = 400
        throw new Error("a Idade precisa ser do tipo number!")
    }

    try {

        const newStudent: Student =
        {
            id,
            name,
            age
        }

        students.push(newStudent)
        res.status(201).send("Estudante cadastrado com sucesso!")

    } catch (error) {
        res.send(error)

    }

})