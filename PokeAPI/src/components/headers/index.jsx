import React, { useContext, useState } from "react";
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
    addPokedex,
    ButtoRemove,
    pokedex,
    setShowGotcha,
    setShowRemove,
  } = context;

  return (
    <Container>
      <ContainerButaoVoltar>
        {exibir && (
          // IF TERNARIO QUE EXIBI O BOTAO VOLTAR
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
        {exibir === false && (
          // CONDICAO QUE EXIBI O BOTAO POKEDEX
          <BtnPokedex
            bgColor="#33A4F5"
            txtColor="#FFFFFF"
            display="block"
            onClick={() => {
              exibirBtn();
              goPokedes(navigate);
            }}
          >
            Pokedex
          </BtnPokedex>
        )}
        {exibirBtnRemoverHeader === false ? (
          <></>
        ) : (
          <>
            {pokedex.find((pk) => pk.id === pokemonDetalhes.id) ===
            // CONDICAO QUE DETERMINA QUAL BOTAO VAI SER EXIBIDO; BOTAO DE ADICIONAR/BOTAO DE REMOVER
            undefined ? (
              <BtnPokedex
                bgColor="#33A4F5"
                txtColor="#FFFFFF"
                onClick={() => {
                  setShowGotcha(true);
                  addPokedex(pokemonDetalhes);
                  ButtoRemove();
                }}
              >
                adicionar
              </BtnPokedex>
            ) : (
              <>
                <BtnPokedex
                  bgColor="#FF6262"
                  txtColor="#FFFFFF"
                  onClick={() => {
                    setShowRemove(true);
                    removePokedex(pokemonDetalhes);
                  }}
                >
                  remover
                </BtnPokedex>
              </>
            )}
          </>
        )}
      </BotaoPokedex>
    </Container>
  );
};

export default Header;
