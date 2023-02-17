import React from "react";
import { useContext } from "react";
import CardGotcha from "../../components/cardGotcha";
import Header from "../../components/headers";
import SectionPokemons from "../../components/sectionPokemons";
import TxtMain from "../../components/TxtMaIn";
import { GlobalContext } from "../../context/GlobalContext";
import { ContainerMain, Section } from "./styled";

const HomePage = () => {
  const context = useContext(GlobalContext);
  const { showGotcha, showRemove } = context;
  return (
    <div>
      <Header />
      <ContainerMain>
        <TxtMain texto={`Todos os Pokemons`} />
        <Section>
          <SectionPokemons />
        </Section>
        {showGotcha === true && (
          <CardGotcha
            txtOne={`gotcha!`}
            txtTwo={`O Pokémon foi adicionado a sua Pokédex`}
          />
        )}
        {showRemove === true && (
          <CardGotcha
            txtOne={`gotcha!`}
            txtTwo={`O Pokémon foi adicionado a sua Pokédex`}
          />
        )}
      </ContainerMain>
    </div>
  );
};

export default HomePage;
