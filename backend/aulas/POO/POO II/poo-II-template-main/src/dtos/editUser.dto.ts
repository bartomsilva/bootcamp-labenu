import z from 'zod'

export interface UpdateUserInputDTO {
  id?: string,
  name?: string,
  email?: string,
  password?: string
}

export interface UpdateUserOutputDTO {
  message: string,
  user: {
    id: string,
    name: string,
    email: string,
    createdAt: string
  }
}

export const UpdateUserSchema = z.object({
  id: z.string().min(1).optional(),
  name: z.string().min(2).optional(),
  email: z.string().email().optional(),
  password: z.string().min(4).optional()
}).transform(data => data as UpdateUserInputDTO)