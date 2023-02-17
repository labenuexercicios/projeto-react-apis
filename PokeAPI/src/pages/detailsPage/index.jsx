import React, { useContext } from "react";
import Header from "../../components/headers";
import TxtMain from "../../components/TxtMaIn";
import { GlobalContext } from "../../context/GlobalContext";
import { ContainerMain } from "../home/styled";
import CardGotcha from "../../components/cardGotcha";
import CardDetalhes from "../../components/CardDetalhes";

const Details = () => {
  const context = useContext(GlobalContext);
  const { showGotcha, showRemove } = context;
  return (
    <div>
      <Header />
      <ContainerMain>
        <TxtMain texto={`Detalhes`} />
        <CardDetalhes />
      </ContainerMain>
      {showGotcha === true && (
        <CardGotcha
          txtOne={`gotcha!`}
          txtTwo={`O Pokémon foi adicionado a sua Pokédex`}
        />
      )}
      {showRemove === true && (
        <CardGotcha
          txtOne={`Oh, no!`}
          txtTwo={`O Pokémon foi removido da sua Pokedéx`}
        />
      )}
    </div>
  );
};

export default Details;
