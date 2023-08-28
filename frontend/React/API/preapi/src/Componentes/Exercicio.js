import axios from "axios";
import { useEffect, useState } from "react";
import * as s from "./styled"

export default function Exercicio() {

  const [characters, setCharacters] = useState([])

  // const getUser = async () => {
  //   try {
  //     const response = await axios.get("https://thronesapi.com/api/v2/Characters")
  //     setCharacters(response.data);
  //   } 
  //     catch(error) {
  //       console.log(error.response);
  //     };
  // };

  // useEffect(() => {
  //   getUser()
  // }, [])

  useEffect(() => {
    (async () => {

      try {
        const response = await axios.get("https://thronesapi.com/api/v2/Characters")
        setCharacters(response.data);
      }
      catch (error) {
        console.log("ocorreu um erro: "+error);
      };
    })()

  }, [])

  const renderCharacter = (character) => {
    return <s.BoxCharacters key={character.id}>
      <img src={character.imageUrl} alt="image character" />
      <p>{character.fullName}</p>
      <p>{character.family}</p>
    </s.BoxCharacters>
  }


  return (
    <div>
      <h2>Game of Thrones API</h2>

      <s.ContainerCharacters>
        {characters.map((character) => renderCharacter(character))}
      </s.ContainerCharacters>

    </div>
  );
}
