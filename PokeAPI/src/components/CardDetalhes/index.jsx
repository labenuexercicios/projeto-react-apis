import React, { useEffect } from "react";
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
  NameTh,
  ProgressBar,
  LiMoves,
  ContainerName,
  BackgroundImagem,
} from "./styled";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Rectangle2 from "../../img/Rectangle2.png";
import NameAndId from "../nameAndId";
import { useParams } from "react-router-dom";

const CardDetalhes = () => {
  const context = useContext(GlobalContext);
  const {
    pokemonDetalhes,
    getPokemonDetails,
    exibirBtn,
    exibir,
    exibirBtnRemoverHeaderFunction,
  } = context;
  const { id } = useParams();
  console.log(pokemonDetalhes);
  useEffect(() => {
    getPokemonDetails(id);
    exibirBtn();
    exibirBtnRemoverHeaderFunction();
  }, []);

  return (
    <Container>
      <ContainerImagens>
        <DivImagem>
          <img src={pokemonDetalhes?.sprites?.front_default} alt="" />
        </DivImagem>
        <DivImagem>
          <img src={pokemonDetalhes?.sprites?.front_default} alt="" />
        </DivImagem>
      </ContainerImagens>
      <ContainerBaseStats>
        <h1>Bases Stats</h1>
        <ListaStats>
          {pokemonDetalhes?.stats?.map((p, i) => (
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
          {pokemonDetalhes?.moves?.map((p, i) => {
            if (i <= 3) {
              return <ListMoves key={i}>{p.move.name}</ListMoves>;
            }
          })}
        </BoxMoves>
      </ContainerImgAndMoves>
      <ImgPoke
        src={pokemonDetalhes?.sprites?.other["official-artwork"]?.front_default}
        alt=""
      />
      <BackgroundImagem src={Rectangle2} alt="" />
    </Container>
  );
};

export default CardDetalhes;
