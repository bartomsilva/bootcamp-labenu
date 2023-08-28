import axios from 'axios';
import { GlobalContext } from '../../global/GlobalContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { Button, ContainerButtons, ContainerInputs, Form, Input } from "./userRegisterPageStyled";
import { goToUsersList } from '../../routes/cordinator';
import { BASE_URL, HEADERS } from '../../constants/Constants'
import { useState } from 'react';

export default function UserRegisterPage() {

  const { requestData } = useContext(GlobalContext)

  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const onChange=(e,setState)=>{
    const { value } = e.target
    setState(value)
  }
  const createUser = async (e) => {
    e.preventDefault()
    try {
      const body = {
        name: name,
        email: email
      }
      await axios.post(`${BASE_URL}/users`,body, HEADERS)
      setName("")
      setEmail("")
    } catch (error) {
      alert("Deu muito ruim!")
    }
    requestData(`${BASE_URL}/users`)
    
  }
  return (
    <Form onSubmit={createUser}>
      <h3>Novo Usuário</h3>
      <ContainerInputs>
        <Input placeholder="nome do usuário"
          name='name'
          value={name}
          onChange={(ev)=>onChange(ev,setName)}
          required minLength={10} />
        <Input placeholder='email'
          name='email'
          type='email'
          value={email}
          onChange={(ev)=>onChange(ev,setEmail)}
          required />
      </ContainerInputs>

      <ContainerButtons>
        <Button>Cadastrar</Button>
        <Button onClick={() => goToUsersList(navigate)}>Fechar</Button>
      </ContainerButtons>
    </Form>
  )
}


