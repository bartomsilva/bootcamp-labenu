import { UserList } from "../../src/exercicio3"
// função para procurar um usuário
export function mockFindUsers(users: UserList[],nameFind:string):boolean {
  
  const result = users.find((user) =>
    user.name == nameFind)
  
    return result != undefined
}