import axios from "axios";
import {
  CardsContainer,
  Button,
  Pokebola,
  Container,
  PokemonNumber,
  PokemonName,
  TypesContainer,
  Pokemon,
  CatchButton,
} from "./PokemonCard.styled";
import { useEffect, useState } from "react";
import pokebola from "../../assets/images/pokebola.png";
import { goToPokemonDetail } from "../../routes/coordinator";
import { useNavigate, useLocation } from "react-router-dom";
import { getTypes } from "../../assets/types/types.js";
import { getColors } from "../../assets/CardColors/cardColors";

export default function PokemonCard(props) {
  const { addToPokedex, removeFromPokedex, url } = props;

  const location = useLocation();
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setPokemon(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const type = () => {
    if (pokemon?.data?.types[1]) {
      return (
        <>
          <img src={getTypes(pokemon?.data?.types[0]?.type?.name)} />
          <img src={getTypes(pokemon?.data?.types[1]?.type?.name)} />
        </>
      );
    }
    return <img src={getTypes(pokemon?.data?.types[0]?.type?.name)} />;
  };

  return (
    <CardsContainer>
      <Container color={getColors(pokemon.data?.types[0]?.type?.name)}>
        <div>
          <PokemonNumber>
            {pokemon.data?.id <= 9 ? (
              <PokemonNumber>#0{pokemon.data?.id}</PokemonNumber>
            ) : (
              <PokemonNumber>#{pokemon.data?.id}</PokemonNumber>
            )}
          </PokemonNumber>

          <PokemonName>
            {pokemon.data?.name.charAt(0).toUpperCase() +
              pokemon.data?.name.slice(1)}
          </PokemonName>

          <TypesContainer>{type()}</TypesContainer>

          <Button
            onClick={() => goToPokemonDetail(navigate, pokemon.data?.name)}
          >
            Detalhes
          </Button>
        </div>

        <div>
          <Pokemon
            src={pokemon.data?.sprites.other["official-artwork"].front_default}
            alt="image"
          />

          {location.pathname === "/" ? (
            <CatchButton onClick={() => addToPokedex(pokemon)}>
              Capturar!
            </CatchButton>
          ) : (
            <CatchButton onClick={() => removeFromPokedex(pokemon)}>
              Excluir
            </CatchButton>
          )}
        </div>

        <Pokebola src={pokebola} alt="pokeball" />
      </Container>
    </CardsContainer>
  );
}
