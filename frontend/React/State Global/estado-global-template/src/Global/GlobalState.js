import React, { useState } from "react";
import frutaria from "../frutaria.json";


export default function GlobalState() {

  const [frutas, setFrutas] = useState(frutaria.frutaria);
  const [carrinho, setCarrinho] = useState([])

  function comprar(id) {
    const i = carrinho.findIndex((item) => item.id === id);
    if (i !== -1) {
      carrinho[i] = { ...carrinho[i], amount: carrinho[i].amount + 1 };
    } else {
      const frutaEncontrada = frutas.find((fruta) => fruta.id === id);
      const novaFruta = { ...frutaEncontrada, amount: 1 };
      // const novaLista = [...carrinho, (carrinho[1] = novaFruta)];
      const novaLista = [...carrinho, novaFruta];
      setCarrinho(novaLista);
    }
  }

  function remover(id) {
    const fruta = carrinho && carrinho?.find((item) => item.id === id);

    if (fruta.amount > 1) {
      const novoCarrinho = carrinho?.map((item) => {
        if (fruta.id === item.id && item.amount >= 1) {
          return { ...item, amount: item.amount - 1 };
        } else {
          return item;
        }
      });

      setCarrinho(novoCarrinho);
    } else {
  
      const carrinhoSemItem = carrinho?.filter((item) => item.id !== id);
      setCarrinho(carrinhoSemItem);
    }
  }

  return { 
    frutas,
    setFrutas,
    carrinho,
    setCarrinho,
    comprar,
    remover

  }


}