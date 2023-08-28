import React, { useState, useId } from 'react'
import PokemonCard from './Components/PokemonCard/PokemonCard';
import { pokeMons } from './Components/Data';
import { FlexContainer, ContainerMon } from './stylesApp';

export default function App() { 
    const [pokeMon, setPokeMon] =useState(pokeMons)
   return (<>
    <FlexContainer>
      <div>
        <h1>Labmon</h1>
      </div>      
      <ContainerMon>
        {
           pokeMon.map ( (obj,index) => (
           <PokemonCard pokeMon={pokeMon} 
                        setPokeMon={setPokeMon} 
                        index={index} 
                        key={useId()}/>
           )) 
        }
      </ContainerMon>
    </FlexContainer>
  </>
  );
}

