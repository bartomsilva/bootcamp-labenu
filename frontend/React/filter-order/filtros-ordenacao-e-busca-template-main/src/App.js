import styled, { createGlobalStyle } from "styled-components";
import pokemons from "./pokemon/pokemon.json";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getColors } from "./utils/ReturnCardColor";
import Header from "./components/Header/Header.js";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  
  }
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center;
`;
function App() {

  const [filterId,setFilterId]=useState("")
  const [filterName,setFilterName]=useState("")
  const [filterType,setFilterType]=useState("")
  const [order,setOrder]=useState('A')

  return (
    <>
      <GlobalStyle />
      <Header 
          filterId={filterId}
          filterName={filterName}
          filterType={filterType}
          order={order}
          setFilterId={setFilterId}
          setFilterName={setFilterName}
          setFilterType={setFilterType}
          setOrder={setOrder} />
      <CardsContainer>
        {
        pokemons
        .filter(pokemon => filterId?+pokemon.id == +filterId:true)
        .filter(pokemon => pokemon.name.english.toLowerCase().includes(filterName.toLowerCase()))
        .filter(pokemon => pokemon.type.includes(filterType)) 
        .sort(( charA,charB)=>{ 
          switch (order){
            case "A":
              return charA.name["english"].localeCompare(charB.name["english"])
            case "D":
              return charB.name["english"].localeCompare(charA.name["english"])
            default:              
              return charA["id"] - charB["id"]
          }
        })  
        .map((pokemon) => {
          return <PokemonCard
          cardColor={getColors(pokemon.type[0])}
          key={pokemon.id}
          pokemon={pokemon}
            />
        })}
      </CardsContainer>
    </>
  );
}

export default App;
