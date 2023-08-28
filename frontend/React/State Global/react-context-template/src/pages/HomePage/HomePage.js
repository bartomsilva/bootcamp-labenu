import Card from "../../components/Card/Card";
import { Container, TextEmpty } from "./HomePage.styled";
import { GlobalStateContext } from "../../context/GlobalStateContext";
import { useContext } from "react";

export default function HomePage() {

  const { pokelist, pokedex } = useContext(GlobalStateContext)

  // não mostrar pokemons que estão na pokedex
  const filteredPokelist = () =>
    pokelist.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );

  return (
    <Container>
      <section>
        {filteredPokelist().length === 0 && <TextEmpty>Nenhum Pokémon livre!</TextEmpty>}
        {filteredPokelist().map((pokemon) => (
          <Card
            key={pokemon.url}
            pokemonUrl={pokemon.url}
          />
        ))}
      </section>
    </Container>
  );
}

