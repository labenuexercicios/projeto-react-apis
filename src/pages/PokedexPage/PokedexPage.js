import Card from "../../components/Card/Card";
import { CardsContainer, Container } from "./styled";
import { BASE_URL } from "../../constants/url";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";
import {  P } from "../HomePage/styled";
import styled  from "styled-components";
import Modal from "../../components/Modal/Modal";
import React from "react";

function PokedexPage() {



  const context = useContext(GlobalContext);

  const { pokedex, removeFromPokedex, openModal, setOpenModal, verifyPokemon } = context;

  return (
    <Container>
      <P>
      <h1>
      Meus Pokémons
        </h1>
      </P>
      <Modal isOpen={openModal}  setIsClose={() => setOpenModal(!openModal)}>
      <h1>  Oh, no!</h1>
      <p>O Pokémon foi removido da sua Pokedéx</p>
      </Modal>
       <CardsContainer>
        {pokedex.map((pokemon) => (
          <Card
            key={pokemon.id}
            pokemonUrl={`${BASE_URL}/${pokemon.name}`}
            removeFromPokedex={removeFromPokedex}
            setOpenModal={setOpenModal}
            verifyPokemon={verifyPokemon}
          />
        ))}
     </CardsContainer>
    </Container>
  );
}

export default PokedexPage;
