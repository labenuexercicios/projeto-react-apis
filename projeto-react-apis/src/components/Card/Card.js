import { useNavigate, useParams } from "react-router-dom";
import { goToPokedex, goToDetail, goToHome } from "../../routes/Coordinator";
import {
  ContainerCard,
  DivColumn,
  DivRow,
  DivRowCatch,
  TextId,
  TextPokemon,
  PokemonImg,
  DivPoison,
  CatchButton,
  Link,
  DeleteButton,
} from "./style";

export const Card = () => {
    const navigate = useNavigate();
    const pathParams = useParams ();

  return (
    <ContainerCard>
      <DivRow>
        <DivColumn>
          <TextId>id</TextId>
          <TextPokemon>Pokemon</TextPokemon>
          <DivPoison>
            <img src="" alt="poison 1"/>
            <img src="" alt="poison 2"/>
          </DivPoison>
        </DivColumn>
        <PokemonImg src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" />
      </DivRow>
      <DivRowCatch>
        <Link onClick={() => goToDetail(navigate, "detail")}><u>Detalhes</u></Link>
        {pathParams.variable === 'pokedex'? <DeleteButton>Excluir</DeleteButton> : <CatchButton>Capturar!</CatchButton>}
      </DivRowCatch>
    </ContainerCard>
  );
};
