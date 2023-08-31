import z from "zod"
import { UserModel } from "../../models/User"

export interface DeleteUserInputDTO {
  userId: string,
  token: string
}

export type DeleteUserOutputDTO = {
  message: string
}

export const DeleteUserSchema = z.object({
  userId: z.string().min(1).optional(),
  token: z.string().min(1)
}).transform(data => data as DeleteUserInputDTO)