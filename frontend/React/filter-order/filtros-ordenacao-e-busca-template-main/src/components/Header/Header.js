import React from "react";
import { Container } from "./styles";

const Header = (props) => {
  const pokemontypesArray = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Flying",
    "Fighting",
    "Poison",
    "Electric",
    "Ground",
    "Rock",
    "Psychic",
    "Ice",
    "Bug",
    "Ghost",
    "Steel",
    "Dragon",
    "Dark",
    "Fairy",
  ];

  return (
    <Container>
      <input type="number" placeholder="Buscar por id"
      value={props.filterId} onChange={(e)=>props.setFilterId(e.target.value)}  />
      <input type="text" placeholder="Buscar por nome"
      value={props.filterName} onChange={(e)=>props.setFilterName(e.target.value)}  />

      <select onChange={e=>props.setOrder(e.target.value)}>
        <option value="N">Ordenar</option>
        <option value="A">Crescente</option>
        <option value="D">Decrescente</option>
      </select>

      <select name="tipo" id="tipo" onChange={e=>props.setFilterType(e.target.value)} >
        <option value="">Selecione um tipo</option>
        {pokemontypesArray.map((type) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select>
      
    </Container>
  );
};

export default Header;
