import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { goToPokedexPage } from "../../Router/coordinator";
import { goToListPage } from "../../Router/coordinator";
import seta from "../../Assets/seta-voltar.png";
import {
  ButtonStyle,
  ButtonStyleAdd,
  ButtonStyleRemove,
  DivBotao,
  DivMainPokedex,
  DivStyleHeader,
  ImgHeader,
  TextButtonStyle,
  TextVoltaPagina,
} from "./headerStyle";
import header from "../../Assets/header.png";
import { GlobalContext } from "../../GlobalState/GlobalContext";

export function Header() {
  const navigate = useNavigate();

  const context = useContext(GlobalContext);

  const {
    pagina,
    setPagina,
    adicionaPokedex,
    RemovePokemon,
    details,
    pokedex,
  } = context;

  function headerPokedex() {
    setPagina("pokedex");
  }
  function headerHome() {
    setPagina("home");
  }

  //RENDERIZAÇÃO CONDICIONAL DA PAGINA HOME
  if (pagina === "home") {
    return (
      <DivStyleHeader>
        <div>
          <ImgHeader src={header} />
        </div>
        <ButtonStyle
          onClick={() => {
            headerPokedex();
            goToPokedexPage(navigate);
          }}
        >
          <TextButtonStyle>PokedexPage</TextButtonStyle>
        </ButtonStyle>
      </DivStyleHeader>
    );
  }

  //RENDERIZAÇÃO CONDICIONAL DA POKEDEX
  if (pagina === "pokedex") {
    return (
      <DivMainPokedex>
        <TextVoltaPagina
          onClick={() => {
            headerHome();
            goToListPage(navigate);
          }}
        >
          <img src={seta} /> Todos Pokémons
        </TextVoltaPagina>
        <div>
          <ImgHeader src={header} />
        </div>
      </DivMainPokedex>
    );
  }

  //RENDERIZAÇÃO CONDICIONAL DA PAGINA DETALHES
  if (pagina === "details") {
    return (
      <DivMainPokedex>
        <TextVoltaPagina
          onClick={() => {
            headerHome();
            goToListPage(navigate);
          }}
        >
          <img src={seta} /> Todos Pokémons
        </TextVoltaPagina>
        <div>
          <ImgHeader src={header} />
        </div>
        <DivBotao>
          {pokedex.find((pokemon) => pokemon.id === details.id) ===
          undefined ? (
            <ButtonStyleAdd onClick={() => {
              adicionaPokedex(details)
            }}>Capturar!</ButtonStyleAdd>
          ) : (
            <ButtonStyleRemove
              onClick={() => {
                RemovePokemon(details);
              }}
            >
              Excluir da Pokédex
            </ButtonStyleRemove>
          )}
        </DivBotao>
      </DivMainPokedex>
    );
  }
}
