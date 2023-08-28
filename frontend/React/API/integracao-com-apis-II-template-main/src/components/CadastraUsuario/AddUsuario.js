import axios from "axios";
import React, { useState } from "react";
import { InputCadastro, ContainerCadastro } from './style'
import { AUTH_TOKEN } from "../../constants/AUTH_TOKEN";
import { BASE_URL } from '../../constants/BASE_URL'

function AddUsuario(props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const postNovoUsuario = async () => {
    const body = {
      name: nome,
      email: email
    };
    await
    axios
      .post(
        `${BASE_URL}`,
        body,
        {
          headers: {
            Authorization: AUTH_TOKEN
          }
        }
      )
      .then(() => {
        alert("usuario criado!");
        props.getUsuarios();
        setEmail("");
        setNome("");
      })
      .catch((err) => {
        console.log("erro add", err.response);
      });
  };

  return (
    <ContainerCadastro>
      <h3>Cadastrar novo usuario</h3>
      <InputCadastro
        placeholder={"Nome"}
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
        }}
      />
      <InputCadastro
        type="email"
        placeholder={"E-mail"}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button onClick={postNovoUsuario}>Enviar</button>
    </ContainerCadastro>
  );
}

export default AddUsuario;