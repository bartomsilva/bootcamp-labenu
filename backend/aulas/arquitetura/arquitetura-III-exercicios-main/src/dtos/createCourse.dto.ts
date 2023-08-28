import z from "zod"

export interface CreateCourseInputDTO {

  id: string
  name: string
  lessons: number
}

export interface CreateCourseOutputDTO {
  message: string,
  course: {
    id: string
    name: string
    lessons: number
    createdAt: string
  }
}


export const CreateCourseSchema = z.object(
  {
    id: z.string({
      required_error: "'id' é obrigatório",
      invalid_type_error: "'id' deve ser string"
    }).min(1, "'id' deve possuir pelo menos 1 carater"),

    name: z.string({
      required_error: "'name' é obrigatório",
      invalid_type_error: "'name' deve ser string"
    }).min(2, "'name' deve possuir pelo menos 2 caracteres "),

    lessons: z.number({
      required_error: "'lessons' é obrigatório",
      invalid_type_error: "'lessons' deve ser number"
    }).min(1, "'lessons' não pode ser zero ou negativo")
  }).transform(data => data as CreateCourseInputDTO)

