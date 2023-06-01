import Card from "../../components/Card/Card";
import { P } from "./styled";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Container } from "./styled";
import { CardsContainer } from "./styled";
import Modal from "../../components/Modal/Modal";
import React from "react";
function HomePage() {
  const context = useContext(GlobalContext);

  const { pokedex, pokelist, addToPokedex, openModal, setOpenModal, verifyPokemon} = context;

  
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
     <P>
      <h1>
           Todos Pokémons
        </h1>
      </P>
      <Modal isOpen={openModal}  setIsClose={() => setOpenModal(!openModal)}> 
      <h1> Gotcha!</h1>
      <p>O Pokémon foi adicionado a sua Pokédex</p>
      </Modal>
      <CardsContainer >
        {filteredPokelist().map((pokemon) => (
          <Card
          key={pokemon.url}
            pokemonUrl={pokemon.url}
            addToPokedex={addToPokedex}
            setOpenModal={setOpenModal}
            verifyPokemon={verifyPokemon}
        />
        ))}
      </CardsContainer>
    </Container>
  );
}

export default HomePage;
