import { Response } from "express"
import { BaseError } from "./BaseError"
import { ZodError } from "zod"

export function handlerError(res: Response, error: unknown) {

  console.log(error)

  if (error instanceof BaseError) {
    res.send(error.statusCode).send(error.message)
  } else if ( error instanceof ZodError) {
    res.send(error.message)
  }
   else {
    res.status(500).send("Erro inesperado")
  }
}