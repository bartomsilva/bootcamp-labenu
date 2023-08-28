import { useContext } from "react";
import { Container, TextEmpty } from "./PokedexPage.styled";
import { GlobalStateContext } from "../../context/GlobalStateContext";
import { BASE_URL } from "../../constants/url";
import Card from "../../components/Card/Card";

function PokedexPage() {
  const { pokedex } = useContext(GlobalStateContext);

  return (
    <Container>
      <section>
        {pokedex.length ==0 && <TextEmpty>Sua Pokédex está vázia</TextEmpty>}
        {pokedex.map((pokemon) => (
          <Card
            key={pokemon.name}
            pokemonUrl={`${BASE_URL}/${pokemon.name}`}
          />
        ))}
      </section>
    </Container>
  );
}

export default PokedexPage;
