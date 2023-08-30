/*
Crie uma lista de usuários 
(você decide quais propriedades existem na sua tipagem) 
e desenvolva um teste garantindo que o Astrodev
está presente nessa lista.
Crie pelo menos um teste que valida sua implementação.
*/
export interface UserList {
  id: string,
  name: string,
  email: string
}
export function getUsers():UserList[]{
  const userList:UserList[] = [
    {
      id: "x001",
      name: "Albert Sabin",
      email: "albert@email.com"  
    },
    {
      id: "x900",
      name: "Astrodev",
      email: "astrodev@email.com"
    }
  ]      
  return userList
}
