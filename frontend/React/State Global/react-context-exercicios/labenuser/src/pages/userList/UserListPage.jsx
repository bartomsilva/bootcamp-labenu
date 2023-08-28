// lista com opção de alteração e esclusão
import { useContext } from "react"
import { GlobalContext } from "../../global/GlobalContext"
import CardUser from "../../components/cardUser/CardUser"
import { ContainerUser } from "./userListPageStyled"

export default function UserListPage() {

  const { users } = useContext(GlobalContext)

  return (
    
    <ContainerUser>
      {users?.map((user) => {
        return (
          <CardUser
            key={user.id}
            user={user}
          />
        )
      })}
    </ContainerUser>
  )

}
