import React, { useContext } from "react";
import CardGotcha from "../../components/cardGotcha";
import Header from "../../components/headers";
import SectionPokemons from "../../components/sectionPokemons";
import TxtMain from "../../components/TxtMaIn";
import { GlobalContext } from "../../context/GlobalContext";
import { ContainerMain, Section } from "../home/styled";

const PokedexPage = () => {
  const context = useContext(GlobalContext);
  const { showRemove, pokedex } = context;
  return (
    <div>
      <Header />
      <ContainerMain>
        <TxtMain texto={`Meus Pokemons`} />
        <Section>
          <SectionPokemons pokemons={pokedex} />
        </Section>
        {showRemove === true && (
          <CardGotcha
            txtOne={`Oh, no!`}
            txtTwo={`O Pokémon foi removido da sua Pokedéx`}
          />
        )}
      </ContainerMain>
    </div>
  );
};

export default PokedexPage;
