import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

import { irParaCadastro } from "../../Routes/coordinator";
import { ContainerForm, ContainerLogin, Input } from "./styled";

export default function Login() {
  
  const [form, onChange, resetForm] = useForm({ email: "", password: "" });

  const navigate = useNavigate();

  const enviaLogin = (e) => {
    e.preventDefault();
    console.log(form.email, form.password);
    resetForm()
  };

  return (
    <ContainerLogin>
      <ContainerForm onSubmit={enviaLogin}>
        <label htmlFor="email">Email:</label>
        <Input
          id="email"
          name="email"
          value={form.email}
          onChange={onChange}
          placeholder={"nome@email.com"}
          pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"}
          type='email'
          title={"digite o e-mail no formamto: nome@email.com"}
          required
        />
        <label htmlFor="senha">Senha:</label>
        <Input
          id="senha"
          name="password"
          value={form.password}
          onChange={onChange}
          placeholder={"Digite sua senha"}
          type='password'
          minLength="6"
          title={"a senha de ver no mínimo 6 caracteres"}
          required
        />
        <button>Fazer Login</button>
      </ContainerForm>
      <button onClick={() => irParaCadastro(navigate)}>
        Ainda não tenho uma conta
      </button>
    </ContainerLogin>
  );
}
