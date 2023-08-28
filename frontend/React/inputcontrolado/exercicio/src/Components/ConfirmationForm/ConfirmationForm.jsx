import React from "react";
import { Form, Input } from "../MainPage/styles";

const ConfirmationForm = (props) => {
  const {
    birthDate, 
    onChangeBirthDate,
    telephone,
    onChangeTelephone,
    city,
    onChangeCity,
    sendForm
  } = props

  return (
    <Form>
      <label>
        Data de Nascimento:
        <Input placeholder="Data de nascimento" value={birthDate} onChange={onChangeBirthDate}/>
      </label>
      <label>
        Telefone:
        <Input placeholder="Telefone" value={telephone} onChange={onChangeTelephone} />
      </label>
      <label>
        Cidade:
        <Input placeholder="Cidade" value={city} onChange={onChangeCity}/>
      </label>
      <button onClick={sendForm}>Enviar dados</button>
    </Form >
  );
};

export default ConfirmationForm;