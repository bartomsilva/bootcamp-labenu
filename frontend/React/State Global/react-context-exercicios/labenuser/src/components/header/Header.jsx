import { useNavigate } from "react-router-dom"
import { goToUserRegister, goToUsersList } from "../../routes/cordinator"
import { Container, Header_, NavBar } from "./headerStyled"

export default function Header() {

  const navigate = useNavigate()  

  return (
    <Header_>
      <Container>
          <h1>Labenusers</h1>
      </Container >
      <NavBar>
        <li>
          <a onClick={()=>goToUsersList(navigate)}>Lista de Usuários</a>
        </li>
        <li>
          <a onClick={()=>goToUserRegister(navigate)}>Cadastrar Usuário</a>
        </li>
      </NavBar>
      <hr />
    </Header_>
  )
}