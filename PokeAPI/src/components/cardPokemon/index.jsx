import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import {
  BoxImagem,
  ButtonCapturar,
  ButtonDetalhes,
  Container,
  ContainerButtons,
  ContainerImgName,
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
    exibirBtnRemoverHeaderFunction,
    pokedex,
    showCart,
    setShowGotcha,
    setShowRemove,
  } = context;
  const navigate = useNavigate();

  let cor = "";

  let getColor = () => {
    switch (pokemon.types[0].type.name) {
      // SWITCH QUE DETERMINA BACKGROUND DO CARD
      case "grass":
        return "#729F92";
      case "fire":
        return "#EAAB7D";
      case "water":
        return "#71C3FF";
      case "bug":
        return "#76A866";
      case "normal":
        return "#BF9762";
      default:
        return "";
    }
  };
  return (
    <Container bgColor={getColor()}>
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
            exibirBtnRemoverHeaderFunction(pokemon.id);
          }}
        >
          detalhes
        </ButtonDetalhes>
        {exibir ? (
          // CONDICAO QUE DETERMINA QUAL BOTAO VAI SER EXIBIDO; BOTAO DE ADICIONAR/BOTAO DE REMOVER
          <ButtonCapturar
            bgColor="#FF6262"
            onClick={() => {
              setShowRemove(true);
              removePokedex(pokemon);
            }}
          >
            remover
          </ButtonCapturar>
        ) : pokedex.find((pk) => pk.id === pokemon.id) === undefined ? (
          // CONDICAO QUE DETERMINA QUAL BOTAO VAI SER EXIBIDO; BOTAO DE CAPTURAR/BOTAO DE CAPTURADO

          <ButtonCapturar
            bgColor="#FFFFF"
            onClick={() => {
              addPokedex(pokemon);
              showCart();
              setShowGotcha(true);
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
