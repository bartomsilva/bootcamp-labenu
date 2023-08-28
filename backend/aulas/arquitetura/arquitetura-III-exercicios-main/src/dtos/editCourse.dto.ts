import { string, z } from "zod"

export interface editCourseInputDTO {
  idToEdit: string
  id?: string
  name?: string
  lessons?: number
}

export interface editCourseOutputDTO {
  message: string,
  course: {
    id: string,
    name: string
    lessons: number,
    createdAt: string
  }
}

export const editCourseSchema = z.object(
  {
    idToEdit: z.string(
      {
        required_error: "'idToEdit' é obrigatório",
        invalid_type_error: "'idToEdit' deve ser string"  
      }).min(1,"'idToEdit' deve possuir pelomenos 1 caracter"),

    id: z.string(
      {
        invalid_type_error: "'id' dever ser string"
      }).min(1,"'idToEdit' deve possuir pelomenos 1 caracter").optional(),

    name: z.string(
      {
        invalid_type_error: "'name' deve ser string"  
      }
    ).min(2,"'name' deve deve possuir pelomenos 2 caracteres").optional(),

    lessons: z.number(
      {
        invalid_type_error: "'lenssons' deve ser number"
      }).min(1,"'lessons' não pode ser zero ou negativo").optional()

  }).transform(data => data as editCourseInputDTO)
