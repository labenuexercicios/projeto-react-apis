import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import {
  BoxImagem,
  ButtonCapturar,
  ButtonDetalhes,
  Container,
  ContainerButtons,
  ContainerImgName,
  Gotcha,
  ImgFundoPk,
  ImgPoke,
} from "./styled";
import { goDetails } from "../navegacao/navegacao";
import { useNavigate } from "react-router-dom";
import ImgFundo from "../../img/Rectangle2.png";
import NameAndId from "../nameAndId";

const CardPokemon = (props) => {
  const { pokemon } = props;
  const context = useContext(GlobalContext);
  const {
    addPokedex,
    exibir,
    removePokedex,
    exibirBtn,
    detailsPokemon,
    exibirBtnRemoverHeaderFunction,
    pokedex,
  } = context;
  const navigate = useNavigate();
  let cor = "";

  switch (pokemon.types[0].type.name) {
    case "grass":
      cor = " #729F92";
      break;
    case "fire":
      cor = "#EAAB7D";
      break;
    case "water":
      cor = "#71C3FF";
      break;
    case "bug":
      cor = "#76A866";
      break;
    case "normal":
      cor = "#BF9762";
      break;
    default:
      cor = "";
      break;
  }
  return (
    <Container bgColor={cor}>
      <ContainerImgName>
        <NameAndId pokemon={pokemon} />
        <BoxImagem>
          <ImgFundoPk src={ImgFundo} alt="" />
          <ImgPoke
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt=""
          />
        </BoxImagem>
      </ContainerImgName>
      <ContainerButtons>
        <ButtonDetalhes
          onClick={() => {
            goDetails(navigate, pokemon.id);
            exibirBtn();
            detailsPokemon(pokemon);
            exibirBtnRemoverHeaderFunction(pokemon.id);
          }}
        >
          detalhes
        </ButtonDetalhes>
        {exibir ? (
          <ButtonCapturar
            bgColor="#FF6262"
            onClick={() => {
              removePokedex(pokemon);
            }}
          >
            remover
          </ButtonCapturar>
        ) : pokedex.find((pk) => pk.id === pokemon.id) === undefined ? (
          <ButtonCapturar
            bgColor="#FFFFF"
            onClick={() => {
              addPokedex(pokemon);
            }}
          >
            Capturar!
          </ButtonCapturar>
        ) : (
          <ButtonCapturar
            bgColor="#FFFFF"
            onClick={() => {
              addPokedex(pokemon);
            }}
          >
            Capturado!
          </ButtonCapturar>
        )}
      </ContainerButtons>
    </Container>
  );
};

export default CardPokemon;
