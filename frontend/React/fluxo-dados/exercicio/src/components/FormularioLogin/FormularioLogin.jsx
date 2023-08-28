import React from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../FormularioPostagem/styled";

const FormularioLogin = (props) => {
  
  const {handleOnChange,setUserLogin,login} = props

  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input type={"text"}
            name="name"
            value={props.userLogin.name}
            onChange={(e) => handleOnChange(e, props.userLogin, setUserLogin)}
          />
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input type={"text"}
            name="photo"
            value={props.userLogin.photo}
            onChange={(e) => handleOnChange(e, props.userLogin,setUserLogin)}
          />
        </StyledLabel>
        <SendButton onClick={login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;
