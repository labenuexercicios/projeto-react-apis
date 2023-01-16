import React, { useContext } from "react";
import Header from "../../components/Header/header";
import { Container, ContainerCards } from "./styled";
import { UserContext } from "../../context/GlobalContext";
import Card from "../../components/Card/Card";

const HomePage = () => {
  const context = useContext(UserContext);
  const { pokemon, isLoading } = context;

  return (
    <div>
      <Header page={"home"} home={true} />
      <Container>
        Todos Pokémons
        <ContainerCards>
          {pokemon.results?.map((pokemon, index) => (
            <Card url={pokemon.url} key={index} />
          ))}
        </ContainerCards>
      </Container>
    </div>
  );
};

export default HomePage;
