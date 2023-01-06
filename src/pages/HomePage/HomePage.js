import Card from "../../components/Card/Card";
import { H, P } from "./styled";
import Header from "../../components/Header/Header";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import styled, { createGlobalStyle } from "styled-components";
import { Container } from "./styled";
import { getColors } from "../../utils/ReturnCardColor";

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
   
  
  const CardsContainer = styled.div`
  position: absolute;
  color: white;
    display: grid;
    grid-template-columns: repeat(3, minmax(440px, 1fr));
    justify-items: center;
    background: grey;
  `;
  return (
    <Container>
  
      <Header />
       <H>  
        <P>
          <p>
           Todos Pokémons
        </p>
        </P>
        </H>
      <section>
        {filteredPokelist().map((pokemon) => (
          <Card
         
            key={pokemon.url}
            pokemonUrl={pokemon.url}
            addToPokedex={addToPokedex}
            
        />
        ))}
      </section>
    </Container>
  );
}

export default HomePage;
