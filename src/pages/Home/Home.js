import Card from "../../components/Card/Card";
import { Container, Section, Title, Button, ModalCapture, Buttons } from "./Home.styled";
import Header from "../../components/Header/Header";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import Modal from 'react-modal'
import React from 'react'
   

function HomePage() {

  const context = useContext(GlobalContext)
  const { 
    addToPokedex, 
    modalOpen,
    closeModalCapture,
    customStyle, 
    nextPageHome,
    backPageHome, 
    pokelist, 
    pokedex, 
    nextPage} = context

   const filteredPokelist = () =>
    pokelist.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );

  return (
    <>
    <Header/>
    <Container>
      <Title>Todos Pokémons
        <Buttons>
          {nextPage > 20 && <Button onClick={() => backPageHome()}>Retornar Página</Button>}
          <Button onClick={() => nextPageHome()}>Próxima Página</Button>
        </Buttons>
      </Title>
      <Section>
        {filteredPokelist().map((pokemon) => (
          <Card
            key={pokemon.url}
            pokemonUrl={pokemon.url}
            addToPokedex={addToPokedex}
            pokemons={pokemon}
          />
        ))}
      </Section>
    </Container>
    <Modal 
        bodyOpenClassName={"modalClasse"}
        isOpen={modalOpen}
        onRequestClose={closeModalCapture}
        style={customStyle}>
        <ModalCapture>
            <h1>Gotcha!</h1>
            <p>O Pokémon foi adicionado a sua Pokédex</p>
        </ModalCapture>
    </Modal>
    </>
  );
}

export default HomePage;