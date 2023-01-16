import React from "react";
import {
  HeaderContainer,
  Logo,
  ButtonPokedex,
  ButtonExcluirPokedex,
  SpanBack,
} from "./styled";
import pokemonLogo from "../../img/pokemon-logo.png";
import { NavLink } from "react-router-dom";

const header = ({ page, home }) => {
  const renderButton = () => {
    switch (page) {
      case "home":
        return <ButtonPokedex>Pokédex</ButtonPokedex>;
      case "detail":
        return <ButtonExcluirPokedex>Excluir da Pokedex</ButtonExcluirPokedex>;
      case "pokedex":
        return null;
      default:
        return null;
    }
  };
  return (
    <div>
      <HeaderContainer>
        {!home ? (
          <NavLink to="/" end>
            <SpanBack>Todos Pokémons</SpanBack>
          </NavLink>
        ) : null}

        <Logo src={pokemonLogo} alt="logo pokemon" />
        {renderButton()}
      </HeaderContainer>
    </div>
  );
};

export default header;
