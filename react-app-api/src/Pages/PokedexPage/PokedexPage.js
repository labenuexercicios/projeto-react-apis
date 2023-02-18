import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Header } from "../../Components/Header/Header";
import { goToDetailsPage } from "../../Router/coordinator";
import grass from "../../Assets/grass.png";
import poison from "../../Assets/poison.png";
import fire from "../../Assets/fire.png";
import flying from "../../Assets/flying.png";
import water from "../../Assets/water.png";
import normal from "../../Assets/normal.png";
import bug from "../../Assets/bug.png";
import {
  ButtonRemove,
  DivDetailsAndButton,
  DivFirstLineCard,
  DivMainTypes,
  DivTypes,
  IdStyle,
  ImgPokemon,
  ImgType,
  MainCard,
  MainDiv,
  PokebolaImg,
  TextDetails,
  TextoExcluir,
  TextTitle,
  Title,
  Type,
} from "./pokedexPageStyle";
import pokebola from "../../Assets/pokebola.png";
import { GlobalContext } from "../../GlobalState/GlobalContext";
import { Alert } from "../../Components/Alert/Alert";

export function PokedexPage() {
  const navigate = useNavigate();
  const context = useContext(GlobalContext);
  const { pokedex, RemovePokemon, alertRemove, setAlertRemove, setDetails, setPagina } = context;
  const pokemonDetail = (pokemon) => {
    setDetails(pokemon);
  };
  const detailPage = () => {
    setPagina("details");
  };

  return (
    <div>
      {alertRemove && (
        <Alert
          main={"Oh, no!"}
          text={"O Pokémon foi removido da sua Pokedéx"}
        />
      )}
      <Header />
      <TextTitle>MeusPokemons</TextTitle>
      <MainDiv>
        {pokedex.map((poke, index) => {
          let colorType = "";
          switch (poke.type[0]) {
            case "grass":
              colorType = "#729F92";
              break;
            case "fire":
              colorType = "#EAAB7D";
              break;
            case "flying":
              colorType = "#6892B0 ";
              break;
            case "water":
              colorType = "#71C3FF";
              break;
            case "bug":
              colorType = "#76A866";
              break;
            case "normal":
              colorType = "#BF9762";
              break;
            default:
              break;
          }
          return (
            <MainCard key={index} background={colorType}>
              <DivFirstLineCard>
                <IdStyle>#0{poke.id}</IdStyle>
                <Title>{poke.name}</Title>
                <ImgPokemon src={poke.img} />
                <PokebolaImg src={pokebola} />
              </DivFirstLineCard>
              <DivMainTypes>
                {poke.type.map((a, key) => { 
                  let cor = "";
                  let imagem = "";
                  switch (poke.type[key]) {
                    case "grass":
                      cor = "#70B873";
                      imagem = grass;
                      break;
                    case "poison":
                      cor = "#AD61AE";
                      imagem = poison;
                      break;
                    case "fire":
                      cor = "#F44900";
                      imagem = fire;
                      break;
                    case "flying":
                      cor = "#6892B0";
                      imagem = flying;
                      break;
                    case "water":
                      cor = "#33A4F5";
                      imagem = water;
                      break;
                    case "bug":
                      cor = "#316520";
                      imagem = bug;
                      break;
                    case "normal":
                      cor = "#8A8A8A";
                      imagem = normal;
                      break;

                    default:
                      break;
                  }
                  return (
                    <DivTypes color={cor} key={key}>
                      <ImgType src={imagem} />
                      <Type>{a}</Type>
                    </DivTypes>
                  );
                })}
              </DivMainTypes>
              <DivDetailsAndButton>
                <TextDetails
                  onClick={() => {
                    pokemonDetail(poke);
                    detailPage();
                    goToDetailsPage(navigate);
                  }}
                >
                  detalhes
                </TextDetails>
                <ButtonRemove
                  onClick={() => {
                    RemovePokemon(poke);
                    setAlertRemove(true)
                  }}
                >
                  <TextoExcluir>Remover!</TextoExcluir>
                </ButtonRemove>
              </DivDetailsAndButton>
            </MainCard>
          );
        })}
      </MainDiv>
    </div>
  );
}
