import React from "react";
import {
  BoxMoves,
  Container,
  ContainerBaseStats,
  ContainerImagens,
  ContainerImgAndMoves,
  ContainerProgressBar,
  ContainerTr,
  DivImagem,
  ImgPoke,
  ListaStats,
  ListMoves,
  NameContainer,
  NameTh,
  NameTxt,
  ProgressBar,
  LiMoves,
  ContainerName,
} from "./styled";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Rectangle2 from "../../img/Rectangle2.png";
import TiposPokemon from "../tiposPokemons";
import NameAndId from "../nameAndId";

const CardDetalhes = () => {
  const context = useContext(GlobalContext);
  const { pokemonDetalhes } = context;

  return (
    <Container bgImg={Rectangle2}>
      <ContainerImagens>
        <DivImagem>
          <img src={pokemonDetalhes.sprites.front_default} alt="" />
        </DivImagem>
        <DivImagem>
          <img src={pokemonDetalhes.sprites.front_default} alt="" />
        </DivImagem>
      </ContainerImagens>
      <ContainerBaseStats>
        <h1>Bases Stats</h1>
        <ListaStats>
          {pokemonDetalhes.stats.map((p, i) => (
            <LiMoves key={i}>
              <ContainerTr>
                <NameTh>{p.stat.name}</NameTh>
                <p>{p.base_stat}</p>
                <ContainerProgressBar>
                  <ProgressBar width={p.base_stat}></ProgressBar>
                </ContainerProgressBar>
              </ContainerTr>
            </LiMoves>
          ))}
        </ListaStats>
      </ContainerBaseStats>
      <ContainerName>
        <NameAndId pokemon={pokemonDetalhes} />
      </ContainerName>
      <ContainerImgAndMoves>
        <BoxMoves>
          <h1>Moves</h1>
          {pokemonDetalhes.moves.map((p, i) => {
            if (i <= 3) {
              return <ListMoves key={i}>{p.move.name}</ListMoves>;
            }
          })}
        </BoxMoves>
      </ContainerImgAndMoves>
      <ImgPoke
        src={pokemonDetalhes.sprites.other["official-artwork"].front_default}
        alt=""
      />
    </Container>
  );
};

export default CardDetalhes;
