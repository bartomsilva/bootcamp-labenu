import React, { useState } from 'react'
import { pokeMons } from './Components/Data';
import PokemonCard from './Components/PokemonCard/PokemonCard';
import { FlexContainer, ContainerMon } from './stylesApp';

function App() {
  const [pokeMon0, setPokeMon0] =
    useState(
      {
        "name": pokeMons[0].name,
        "type": pokeMons[0].type,
        "evolved": pokeMons[0].evolved,
        "weigth": pokeMons[0].weigth,
        "color": pokeMons[0].color,
        "image": pokeMons[0].image,
        "id": pokeMons[0].id
      })
  const [pokeMon1, setPokeMon1] =
    useState(
      {
        "name": pokeMons[1].name,
        "type": pokeMons[1].type,
        "evolved": pokeMons[1].evolved,
        "weigth": pokeMons[1].weigth,
        "color": pokeMons[1].color,
        "image": pokeMons[1].image,
        "id": pokeMons[1].id
      })

  const [pokeMon2, setPokeMon2] =
    useState(
      {
        "name": pokeMons[2].name,
        "type": pokeMons[2].type,
        "evolved": pokeMons[2].evolved,
        "weigth": pokeMons[2].weigth,
        "color": pokeMons[2].color,
        "image": pokeMons[2].image,
        "id": pokeMons[2].id
      })



  return (<>


    <FlexContainer>
      <div>
        <h1>Labmon</h1>
      </div>      
      <ContainerMon>
        <PokemonCard pokeMon={pokeMon0} setPokeMon={setPokeMon0} />
        <PokemonCard pokeMon={pokeMon1} setPokeMon={setPokeMon1} />
        <PokemonCard pokeMon={pokeMon2} setPokeMon={setPokeMon2} />
      </ContainerMon>
    </FlexContainer>
  </>

  );
}

export default App;
