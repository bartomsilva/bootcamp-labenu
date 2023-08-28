import { z } from "zod"

export interface SingUpInputDTO {
  id: string
  name: string
  email: string
  password: string 
}

export const SingUpSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6)
}).transform( data => data as SingUpInputDTO)

