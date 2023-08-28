import React from "react";
import { TitleHeader } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = (props) => {


  return (
    <ContainerPostagem>
      <TitleHeader>{props.post.title}</TitleHeader>
      <Image src={props.post.image} />
      <Description>{props.post.description}</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;
