import Card from "../../components/Card/Card";
import { Container, Section, Title, ModalRemove } from "./Pokedex.styled";
import Header from "../../components/Header/Header";
import { BASE_URL } from "../../constants/url";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import Modal from 'react-modal'

function PokedexPage() {

  const context = useContext(GlobalContext)
  const { pokedex, removeFromPokedex, modalOpen, closeModalCapture, customStyle } = context;

  return (
    <>
    <Header />
    <Container>
      <Title>Meus Pokémons</Title>
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
    <Modal
        bodyOpenClassName={"modalClasse"}
        isOpen={modalOpen}
        onRequestClose={closeModalCapture}
        style={customStyle}
      >
      <ModalRemove>
          <h1>Oh, no</h1>
          <p>O Pokémon foi removido da sua Pokédex</p>
      </ModalRemove>
    </Modal>
    </>
  );
}

export default PokedexPage;