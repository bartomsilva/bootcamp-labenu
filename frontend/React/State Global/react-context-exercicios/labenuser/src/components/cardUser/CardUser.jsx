import axios from "axios"
import { useContext, useEffect } from "react"
import { GlobalContext } from "../../global/GlobalContext"
import { useState } from "react"
import { BASE_URL } from '../../constants/Constants'
import { HEADERS } from "../../constants/Constants"
import { Box, Button, ContainerButtonUser, ContainerButtons, ContainerInputs, Input, NameUser } from "./cardUserStyled"

export default function CardUser({ user }) {

  const [edit, setEdit] = useState(false)
  const { users, setUsers } = useContext(GlobalContext)
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const editUser = async (_user) => {

    const body = {
      name: name,
      email: email
    }
    try {
      await axios.put(`${BASE_URL}/users/${_user.id}`, body, HEADERS)
      const newUsers = users.map(user => {
        if (user.id === _user.id) {
          user.name = _user.name
          user.email = _user.email
        }
        return user
      }
      )
      setUsers(newUsers)
      setEdit(!edit)
    } catch (error) {
      alert("Ops! deu ruim, não foi possível efetuar a altaração!")
    }
  }

  const deleteUser = async (_user) => {

    try {
      await axios.delete(`${BASE_URL}/users/${_user.id}`, HEADERS)
      const newUsers = users.filter(user => user.id !== _user.id)
      setUsers(newUsers)
      setEdit(!edit)
    } catch (error) {
      alert("Ops! deu ruim, não foi possível efetuar a exclusão!")
    }

  }

  function selectBox(iD) {
    const newListUser = users.map((user) => {
      if (user.id === iD) {
        user.select = true
      } else {
        user.select = false
      }
      return user
    }
    )
    setUsers(newListUser)
  }
  return (
    <Box select={user.select}>
      <img onClick={(e) => selectBox(user.id)} src={'/image/no-photo.png'} alt="imagem do usuário" />
      {!edit ? (
        <ContainerButtonUser>
          <NameUser onClick={() => setEdit(!edit)}>{name}</NameUser>
        </ContainerButtonUser>
      ) : (
        <ContainerInputs>
          <Input name='name' value={name} onChange={(e) => setName(e.target.value)} />
          <Input name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </ContainerInputs>
      )}
      {edit ? (
        <ContainerButtons>
          <Button onClick={() => editUser(user)}>Salvar</Button>
          <Button onClick={() => setEdit(!edit)}>Fechar</Button>
        </ContainerButtons>
      ) : (
        <ContainerButtons>
          <Button onClick={() => setEdit(!edit)}>Editar</Button>
          <Button onClick={() => deleteUser(user)}>Excluir</Button>
        </ContainerButtons>
      )}
    </Box>
  )
}