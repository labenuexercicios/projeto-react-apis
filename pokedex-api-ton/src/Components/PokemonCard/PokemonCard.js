import {
  ButtonCaptur,
  ClassFirst,
  ClassSecond,
  DetailAndCaptur,
  ImgPokebola,
  ImgPokemon,
  StyleCard,
  StyleCardFull,
  StyleClass,
  StyleDetail,
  StyleDiv,
  StyleId,
  StyleImgClass,
  StyleName,
  StyleTextClass,
  Teste,
} from "./PokemonCardStyle";
import imagem from "../../assets/image 3.png";
import pokebola from "../../assets/pokebolaFundo.png";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

function PokemonCard() {
  const context = useContext(GlobalContext);
  const { pokeList } = context;

  return (
    <>
      {pokeList.map((pokeCard) => {
        <StyleCardFull>
          <StyleCard>
            <StyleDiv>
              <StyleId>#01</StyleId>
              <StyleName>{pokeCard.name}</StyleName>
              <ImgPokemon src={pokeCard.sprites.other.home.front_default} />
              <ImgPokebola src={pokebola} />
            </StyleDiv>
            <StyleClass>
              <ClassFirst>
                <StyleImgClass />
                <StyleTextClass>Poison</StyleTextClass>
              </ClassFirst>
              <ClassSecond>
                <StyleImgClass />
                <StyleTextClass>Grass</StyleTextClass>
              </ClassSecond>
            </StyleClass>
            <DetailAndCaptur>
              <StyleDetail>Detalhes</StyleDetail>
              <ButtonCaptur>Capturar!</ButtonCaptur>
            </DetailAndCaptur>
          </StyleCard>
        </StyleCardFull>;
      })}
    </>
  );
}

export default PokemonCard;
