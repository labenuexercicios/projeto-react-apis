import Card from "../../components/Card/Card";
import { Container, Section, Span } from "./Styled";
import Header from "../../components/Header/Header";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";



function HomePage() {

  const context = useContext(GlobalContext)
  const { addToPokedex, filteredPokelist } = context

    
  return (
    <Container>
      <Header />
      <Span>Todos Pokémons</Span>
      <Section>
        {filteredPokelist().map((pokemon) => (
          <Card
            key={pokemon.url}
            pokemonUrl={pokemon.url}
            addToPokedex={addToPokedex}
          />
        ))}
      </Section>
      
    </Container>
  );
}

export default HomePage;