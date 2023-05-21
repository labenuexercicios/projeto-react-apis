import axios from "axios";
import {
  CatchButton,
  ContainerCard,
  Pokeball,
  Pokemon,
  PokemonName,
  PokemonNumber,
  PokemonType,
  TypesContainer,
  Detalhes,
  DeletButton,
} from "./styled";
import { getColors } from "../../utils/ReturnCardColor";
import { getTypes } from "../../utils/ReturnPokemonType";
import { useEffect, useState } from "react";
import pokeball from "../../assets/pngwing 2.png";
import { useNavigate } from "react-router-dom";
import { goToDetailPage } from "../../routes/Cordinator";

export const PokemonCard = (props) => {
  const navigate = useNavigate();

  const { deletPokemon, capturePokemon, pokemon, setDetail, btn } = props;

  const [id, setId] = useState("");
  const [image, setImage] = useState("");
  const [type1Home, setType1Home] = useState("");
  const [type2Home, setType2Home] = useState("");

  const loadDetail = async () => {
    try {
      const res = await axios.get(pokemon?.url);
      setId(res.data.id);
      setImage(res.data.sprites.other["official-artwork"].front_default);
      setType1Home(res.data.types[0]?.type.name);
      setType2Home(res.data.types[1]?.type.name);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadDetail();
  }, [pokemon]);

  const typ2 = () => {
    if (type2Home) {
      return <PokemonType src={getTypes(type2Home)} />;
    } else {
      return null;
    }
  };

  const detailPage = () => {
    goToDetailPage(navigate);
    setDetail(pokemon);
  };
  return (
    <ContainerCard cor={getColors(type1Home)}>
      <div>
        <PokemonNumber>#{id}</PokemonNumber>
        <PokemonName>{pokemon.name}</PokemonName>
        <TypesContainer>
          <PokemonType src={getTypes(type1Home)} />
          {typ2()}
        </TypesContainer>
      </div>
      <div>
        <Pokemon src={image} alt="imagem Pokémon" />
        {btn === "delet" && (
          <DeletButton onClick={() => deletPokemon(pokemon)}>
            Excluir
          </DeletButton>
        )}
        {btn === "capture" && (
          <CatchButton
            className="btnCapturar"
            onClick={() => capturePokemon(pokemon)}
          >
            Capturar!
          </CatchButton>
        )}
      </div>
      <Detalhes onClick={() => detailPage()}>Detalhes</Detalhes>
      <Pokeball src={pokeball} alt="pokeball" />
    </ContainerCard>
  );
};

//capture={capture} onClick={handleClickBtn}
