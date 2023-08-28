import axios from 'axios';
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import useForms from '../../hooks/useForms'
import { irParaCadastro, irParaFeed } from '../../Routes/coordinator'
import { ContainerForm, ContainerLogin, Input } from './styled'
import { BASE_URL } from '../../constants/BASE_URL'

export default function Login() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const { form, onChange } = useForms({ email: "", password: "" })
  const enviaLogin = async (e) => {
    e.preventDefault()
    console.log(form)
    setIsLoading(true)
    try {
      const PATH = BASE_URL + '/users/login'
      const response = await axios.post(PATH, form)
      const { token } = response.data
      localStorage.setItem("labedditToken", JSON.stringify(token))
      setIsLoading(false)
      irParaFeed(navigate)
    } catch (error) {
      console.log(error)
      alert("erro de autenticação")
    }
  }

return (
  <ContainerLogin>
    <ContainerForm onSubmit={enviaLogin}>
      <label htmlFor='email'>Email:</label>
      <Input id='email'
        name="email"
        type="email"
        value={form.email}
        onChange={onChange}
        placeholder="nome@email.com"
        required
      />
      <label htmlFor='senha'>Senha:</label>
      <Input id='senha'
        name="password"
        minLength={8}
        type='password'
        value={form.password}
        onChange={onChange}
        placeholder="Digite sua senha"
        required
      />
      <button>Fazer Login</button>
    </ContainerForm>
    <button onClick={() => irParaCadastro(navigate)}>Ainda não tenho uma conta</button>
  </ContainerLogin>
)
}
