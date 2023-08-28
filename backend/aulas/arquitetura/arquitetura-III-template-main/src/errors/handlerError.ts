import { Response } from "express"
import { BaseError } from "./BaseError"
import { ZodError } from "zod"

export function handerError(res: Response, error: unknown) {
  if (error instanceof BaseError) {
    res.status(error.statusCode).send(error.message)
  } else if (error instanceof ZodError) {
    res.status(400).send(error.issues)  
  } else {
    res.status(500).send("Erro inesperado")
  }
}