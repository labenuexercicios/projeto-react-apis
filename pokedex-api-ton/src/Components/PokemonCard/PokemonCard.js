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
import img from "../../assets/image 3.png";
import pokebola from "../../assets/pokebolaFundo.png";

function PokemonCard() {
  return (
    <StyleCardFull>
      <StyleCard>
        <StyleDiv>
          <StyleId>#01</StyleId>
          <StyleName>Bulbasaur</StyleName>
          <ImgPokemon src={img} />
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
    </StyleCardFull>
  );
}

export default PokemonCard;
