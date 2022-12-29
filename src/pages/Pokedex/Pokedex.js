import Card from "../../components/Card/Card";
import { Container, Section, Span } from "./Styled";
import Header from "../../components/Header/Header";
import { BASE_URL } from "../../constants/url";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

function PokedexPage() {

  const context = useContext(GlobalContext)
  const { pokedex, removeFromPokedex } = context;

  // const { pokedex, removeFromPokedex } = props;

  return (
    <Container>
      <Header />
      <Span>Meus Pokémons</Span>
      <Section>
        {pokedex.map((pokemon) => (
          <Card
            key={pokemon.name}
            pokemonUrl={`${BASE_URL}/${pokemon.name}`}
            removeFromPokedex={removeFromPokedex}
          />
        ))}
      </Section>
    </Container>
  );
}

export default PokedexPage;