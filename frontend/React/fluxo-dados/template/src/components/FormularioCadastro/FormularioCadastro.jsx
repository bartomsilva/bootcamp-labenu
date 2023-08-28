import { useState } from "react";
import { FormContainer, Form, Input, StyledLabel } from "./styled";

export const FormularioCadastro = (props) => {

  const {
    title,
    setTitle,
    image,
    setImage,
    post,
    setPost,
    handleOnChange
  } = props


  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
      <StyledLabel htmlFor="title">
          Título:
          <Input id="title" value={title} onChange={(e) => handleOnChange(e, setTitle)} />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={image} onChange={(e) => handleOnChange(e, setImage)} />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" value={post} onChange={(e) => handleOnChange(e, setPost)} />
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};


export default FormularioCadastro