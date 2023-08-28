import z from 'zod'

export interface CreateUserInputDTO {
  id: string,
  name: string,
  email: string,
  password: string
}

export interface CreateUserOutputDTO {
  message: string,
  user: {
    id: string,
    name: string,
    email: string,
    createdAt: string
  }
}


export const CreateUserSchema = z.object({

  id: z.string(
    {
      required_error: "'id' é obrigatório",
      invalid_type_error: "'id' deve ser do tipo string"
    }).min(1, "'id' deve ter no mínimo 1 caracter"),

  name: z.string(
    {
      required_error: "'name' é obrigatório",
      invalid_type_error: "'name' deve ser do tipo string"
    }).min(2, "'name' deve ter no mínimo 2 caracteres"),

  email: z.string(
    {
      required_error: "'email' é obrigatório",
      invalid_type_error: "'email' deve ser do tipo string"
    }).refine((value)=> /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i.test(value),
    "'email' invalido"),
    //.email("'email' inválido"), // padrão do zod

  password: z.string(
    {
      required_error: "'password' é obrigatória",
      invalid_type_error: "'password' deve ser do tipo string"
    }).refine((value)=> /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$/g.test(value)
    ,"'password' deve ter entre 6 e 15 caracteres, incluindo números, "+ 
    "letras minusculas e no mínimo uma letra maiuscula, e um caracter especial")

}).transform(data => data as CreateUserInputDTO)