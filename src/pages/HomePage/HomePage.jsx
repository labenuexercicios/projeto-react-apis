import { PokemonCard } from "../../components/pokemonCard/PokemonCard";
import { Conteiner, H1 } from "./styled";

export const HomePage = (props) => {
  const { pokemons, pokedex, type1, setType1, type2, setType2, setDetail,capturePokemon } =
    props;
  

  const noPokedex = (pokemonName) => {
    const foundPokemon = pokedex.filter(
      (pokemon) => pokemon.name === pokemonName
    );
    if (foundPokemon.length > 0) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <Conteiner>
      <H1>Todos os pokemons</H1>
      {pokemons
        .filter((pokemon) => noPokedex(pokemon.name))
        .map((pokemon, index) => {
          return (
            <PokemonCard
              setType1={setType1}
              setType2={setType2}
              type1={type1}
              type2={type2}
              key={index}
              pokemon={pokemon}
              capturePokemon={capturePokemon}
              setDetail={setDetail}
              btn={'capture'}
            />
          );
        })}
    </Conteiner>
  );
};
