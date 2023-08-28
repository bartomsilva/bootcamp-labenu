import React, { useState } from "react";
import { ContainerForm, ContainerSignup, Input } from "./styled";
import { useForm } from '../../hooks/useForm'

export default function Signup() {

  const [form, onChange, resetForm] = useForm(
    {
      userName: '',
      email: '',
      password: '',
      confirmPassword: ''
    })

  const enviarCadastro = (e) => {
    e.preventDefault()
    //* EXTRA: validando a senha - ter certeza que o usuário sabe qual senha cadastrou
    if (form.password === form.confirmPassword) {
      console.log('User Name : ', form.userName);
      console.log('Email:', form.email);
      console.log('Password:', form.password);
      console.log('Confirm Password', form.confirmPassword);
      resetForm()
      alert('Cadastro feito com sucesso!')
    } else {
      alert('as senhas não são iguais!')
    }
  };

  return (
    <ContainerSignup>
      <ContainerForm onSubmit={enviarCadastro}>
        <label htmlFor="nome">Nome de usuario:</label>
        <Input
          id="nome"
          value={form.userName}
          name={"userName"}
          onChange={onChange}
          placeholder="username"
          minLength="10"
          title={"o nome de usuário deve ter no mínimo 10 caracteres"}
          required
        />
        <label htmlFor="email">Email:</label>
        <Input
          id="email"
          value={form.email}
          name={"email"}
          type={"email"}
          onChange={onChange}
          placeholder="nome@email.com"
          pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"}
          title={"digite o e-mail no formamto: nome@email.com"}
          required
        />
        <label htmlFor="senha">Senha:</label>
        <Input
          id="senha"
          value={form.password}
          name={"password"}
          type={"password"}
          onChange={onChange}
          placeholder="Crie sua senha"
          minLength="6"
          title={"a senha de ver no mínimo 6 caracteres"}
          required
        />
        <label htmlFor="confirma-senha">Confirmação de senha:</label>
        <Input
          id="confirma-senha"
          value={form.confirmPassword}
          name={"confirmPassword"}
          type={"password"}
          onChange={onChange}
          placeholder="Confirme a senha"
          minLength="6"
          title={"a senha de ver no mínimo 6 caracteres"}
          required
        />
        <button>Cadastrar</button>
      </ContainerForm>
    </ContainerSignup>
  );
}
