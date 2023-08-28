import { Form, FormContainer, Input, StyledLabel, SendButton, BackToLoginButton } from "./styled";

function TelaCadastro(props) {
  const {setPageActive} = props
  return (
    <FormContainer>
      <h1>Cadastro </h1>
      <Form>
        <StyledLabel htmlFor="name">
          Nome:
          <Input id="name" />
        </StyledLabel>
        <StyledLabel htmlFor="email">
          E-mail:
          <Input id="email" />
        </StyledLabel>
        <StyledLabel htmlFor="senha">
          Senha:
          <Input id="senha" />
        </StyledLabel>
        <StyledLabel htmlFor="confsenha">
          Confirmação da senha:
          <Input id="confsenha" />
        </StyledLabel>
        <SendButton onClick={()=>setPageActive("registered")} >Cadastrar</SendButton>
        <BackToLoginButton onClick={()=>setPageActive('login')} >Já possuo um cadastro</BackToLoginButton>
      </Form>
    </FormContainer>
  );
}

export default TelaCadastro;
