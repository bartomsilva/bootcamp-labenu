import { z } from "zod"

export interface DeleteCourseInputDTO {
  idToDelete: string
}

export interface DeleteCourseOutputDTO {
  message: string,
  course: {
    id: string,
    name: string,
    lessons: number,
    createdAt: string
  }
}

export const DeleteCourseSchema = z.object(
  {
    idToDelete: z.string(
      {
        required_error: "'idToDelete' é obrigatório",
        invalid_type_error: "'idToDelete' deve ser string"
      }).min(1,"'idToDelete' deve ter pelomenos 1 caracter")
  }
).transform(data => data  as DeleteCourseInputDTO)