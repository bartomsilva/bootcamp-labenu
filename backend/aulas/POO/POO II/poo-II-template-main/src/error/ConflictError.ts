import { BaseError } from "./BaseError";

export class ConflictError extends BaseError {
  constructor(
    message: string = "Já cadastrado"
    ){
      super(409,message)
    }
}