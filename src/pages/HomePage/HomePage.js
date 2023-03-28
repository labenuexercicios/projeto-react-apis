import Card from "../../components/Card/Card";
import { H, P } from "./styled";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import styled from "styled-components";
import { Container } from "./styled";
const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(440px, 1fr));
    justify-items: center;
    background: grey;
  `;
function HomePage() {
  const context = useContext(GlobalContext);

  const { pokelist, addToPokedex, pokedex,  } = context;

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
       <H>  
        <P>
          <p>
           Todos Pokémons
        </p>
        </P>
        </H>
      <CardsContainer>
        {filteredPokelist().map((pokemon) => (
          <Card
            key={pokemon.url}
            pokemonUrl={pokemon.url}
            addToPokedex={addToPokedex}
        />
        ))}
      </CardsContainer>
    </Container>
  );
}

export default HomePage;
