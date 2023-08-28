import axios from "axios";
import React from "react";
import useForms from '../../hooks/useForms'
import { useNavigate } from "react-router-dom";
import { goToFeed, goToSignUp } from "../../routes/coordinator.js";
import { FormContainer, InputContainer } from "./styled.js";
import { BASE_URL } from '../../constants/baseURL'

function LoginPage() {
  const navigate = useNavigate();
  const { form, onChange, resetForm } = useForms(
    {
      email: "",
      password: ""
    })

  async function requestLogin(e){
    e.preventDefault()
    try {
      const response = await axios.post(`${BASE_URL}/user/login`, form)
      const { token } = response.data
      localStorage.setItem("token",token)
      goToFeed(navigate)
    } catch (error) {
      console.log(error)
      alert("Não foi possível efeturar seu login, verifique email e senha!")
    }

  }
  return (
    <main>
      <h1>Login</h1>
      <FormContainer onSubmit={requestLogin}>
        <InputContainer>
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Senha:</label>
          <input
            id="password"
            type="password"
            name='password'
            value={form.password}
            onChange={onChange}
            required
          />
        </InputContainer>
        <button>Entrar</button>
        <button onClick={() => goToSignUp(navigate)}>Não tenho cadastro</button>
      </FormContainer>
    </main>
  );
}

export default LoginPage;
