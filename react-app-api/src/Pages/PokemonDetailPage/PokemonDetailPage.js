import React, { useContext } from "react";
import { Header } from "../../Components/Header/Header";
import { GlobalContext } from "../../GlobalState/GlobalContext";
import {
  BackImg,
  BarraStats,
  DivBarraStats,
  DivBaseStats,
  DivImgAndBase,
  DivMainCardDetails,
  DivMainDetails,
  DivMainImgs,
  DivMainInfoAndMoves,
  DivMoves,
  DivMovesStyle,
  DivPokebola,
  DivTextoDetalhes,
  DivTextoProgresso,
  DivTotalStats,
  EstiloBaseStats,
  FrontImg,
  IdStyle,
  ImgFrontandBack,
  ImgPokemon,
  MovesText,
  TextMove,
  TextoDetalhes,
  TextoStats,
  TextoTotal,
  TextoTotal1,
  Title,
} from "./pokemonDetailStyle";
import grass from "../../Assets/grass.png";
import poison from "../../Assets/poison.png";
import fire from "../../Assets/fire.png";
import flying from "../../Assets/flying.png";
import water from "../../Assets/water.png";
import normal from "../../Assets/normal.png";
import bug from "../../Assets/bug.png";
import pokebola from "../../Assets/pokebolaDetails.png";
import {
  DivMainTypes,
  DivTypes,
  ImgType,
  Type,
} from "../../Components/PokemonCard/pokemonCardStyle";

export function DetailPage() {
  const context = useContext(GlobalContext);
  const { details } = context;
  console.log(details);

  return (
    <div>
      <Header />
      <DivTextoDetalhes>
        <TextoDetalhes>Detalhes</TextoDetalhes>
      </DivTextoDetalhes>
      <DivMainDetails>
        <DivMainCardDetails>
          <DivImgAndBase>
            <DivMainImgs>
              <FrontImg>
                <ImgFrontandBack src={details.frontDetail} />
              </FrontImg>
              <BackImg>
                <ImgFrontandBack src={details.backDetail} />
              </BackImg>
            </DivMainImgs>
            <DivBaseStats>
              <EstiloBaseStats>Base Stats</EstiloBaseStats>
              {details.stats.map((stats, i) => {
               return (
                <div key={i}>
                    <DivBarraStats>
                        <DivTextoProgresso>
                            <TextoStats>
                                {stats.stat.name} {stats.base_stat}
                            </TextoStats>
                        </DivTextoProgresso>
                        <BarraStats
                            stats={stats.base_stat}
                            class="progress-bar"
                        ></BarraStats>
                    </DivBarraStats>
                </div>
            );
              })}
              <DivTotalStats>
                <TextoTotal>Total:</TextoTotal>
                <TextoTotal1>
                  {details?.stats?.reduce(
                    (primeiro, demais) => Number(primeiro + demais.base_stat),
                    []
                  )}
                </TextoTotal1>
              </DivTotalStats>
            </DivBaseStats>
          </DivImgAndBase>
          <DivMainInfoAndMoves>
            <IdStyle>#0{details.id}</IdStyle>
            <Title>{details.name}</Title>
            <DivMainTypes>
              {details.type.map((a, key) => {
                let cor = "";
                let imagem = "";
                switch (details.type[key]) {
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
            <DivMoves>
              <MovesText>Moves:</MovesText>
              {details.moves.map((a, i) => {
                return (
                  <DivMovesStyle key={i}>
                    <TextMove>{a}</TextMove>
                  </DivMovesStyle>
                );
              })}
            </DivMoves>
          </DivMainInfoAndMoves>
          <DivPokebola src={pokebola} />
          <ImgPokemon src={details.img} />
        </DivMainCardDetails>
      </DivMainDetails>
    </div>
  );
}
