import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { goHome, goPokedes } from "../navegacao/navegacao";
import {
  BotaoPokedex,
  BotaoVoltar,
  BtnPokedex,
  Container,
  ContainerButaoVoltar,
  Logo,
} from "./styled";
import { useNavigate, useParams } from "react-router-dom";
import logo from "../../img/logoPokemon.png";

const Header = () => {
  const context = useContext(GlobalContext);
  const navigate = useNavigate();
  const {
    exibir,
    exibirBtn,
    ocultarBtn,
    notExibirBtnRemoverHeaderFunction,
    exibirBtnRemoverHeader,
    removePokedex,
    pokemonDetalhes,
    buttonAdd,
    addPokedex,
    exibirBtnRemoverHeaderFunction,
    ButtoRemove,
  } = context;

  const params = useParams();

  return (
    <Container>
      <ContainerButaoVoltar>
        {exibir && (
          <BotaoVoltar
            onClick={() => {
              ocultarBtn();
              goHome(navigate);
              notExibirBtnRemoverHeaderFunction();
            }}
          >
            todos pokemons
          </BotaoVoltar>
        )}
      </ContainerButaoVoltar>

      <div>
        <Logo src={logo} alt="POKEMONS" />
      </div>

      <BotaoPokedex>
        {exibirBtnRemoverHeader === false ? (
          <BtnPokedex
            bgColor="#33A4F5"
            txtColor="#FFFFFF"
            onClick={() => {
              exibirBtn();
              goPokedes(navigate);
            }}
          >
            Pokedex
          </BtnPokedex>
        ) : buttonAdd === true ? (
          <BtnPokedex
            bgColor="#33A4F5"
            txtColor="#FFFFFF"
            onClick={() => {
              addPokedex(pokemonDetalhes);
              // exibirBtnRemoverHeaderFunction(params.id);
              ButtoRemove();
            }}
          >
            adicionar
          </BtnPokedex>
        ) : (
          <BtnPokedex
            bgColor="#FF6262"
            txtColor="#FFFFFF"
            onClick={() => {
              removePokedex(pokemonDetalhes);
              // exibirBtnRemoverHeaderFunction(params.id);
            }}
          >
            remover
          </BtnPokedex>
        )}
      </BotaoPokedex>
    </Container>
  );
};

export default Header;
