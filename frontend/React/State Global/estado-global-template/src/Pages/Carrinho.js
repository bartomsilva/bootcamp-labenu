import React from "react";
import { useNavigate } from "react-router-dom";
import CardCarrinho from "../components/CardCarrinho";
import { handleHome } from "../Router/cordinator";
import styled from "styled-components";
import { useContext } from "react";
import { GlobalStateContext } from "../Global/GlobalStateContext";

export default function Carrinho(props) {
  
  const navigate = useNavigate();
  const context = useContext(GlobalStateContext)
  const {carrinho, setCarrinho} = context 

  let preçoTotal = 0;
  carrinho?.map((item) => (preçoTotal = preçoTotal + item.price * item.amount));

  return (
    
    <CarrinhoContainer>
      <h1 id="cart">Carrinho <span role="img" aria-label="cart">🛒 </span></h1>
      <button onClick={() => handleHome(navigate)}>Voltar</button>
      { 
        carrinho?.map( item => 
          <CardCarrinho key={item.id} item={item} />          

          )
      }

      <h3>Preço Total: R$ {preçoTotal}</h3>
    </CarrinhoContainer>
  );
}
const CarrinhoContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
