import React from "react";
import { useNavigate } from "react-router-dom";
import { handleCart } from "../Router/cordinator";
import { handleFruit } from "../Router/cordinator";
import CardFrutas from "../components/CardFrutas";
import styled from "styled-components";
import { useContext } from "react";
import { GlobalStateContext } from "../Global/GlobalStateContext";

export default function Mercadinho(props) {

  const context = useContext(GlobalStateContext)
  const navigate = useNavigate();
  const { frutas } = context


  return (
    <MercadinhoContainer>
      <h1>Mercadinho</h1>
      <button onClick={() => handleCart(navigate)}>Vá para Carrinho </button>
      <button onClick={() => handleFruit(navigate)}>Cadastro de Frutas </button>
      <FrutasContainer>
        {frutas?.map( (fruta) =>
          <CardFrutas key={fruta.id}fruta={fruta} />
        )}
      </FrutasContainer>
    </MercadinhoContainer>
  );
}

const FrutasContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`;
const MercadinhoContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`
