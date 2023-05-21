import { ConteinerPokedex, H1 } from "./styled";
import { PokemonCard } from "../../components/pokemonCard/PokemonCard";

export const PokedexPage = ({ pokedex, deletPokemon,setDetail }) => {
  

  return (
    <ConteinerPokedex>
      <H1>Meus pokémons</H1>
      {pokedex.map((pokemon, index) => {
        return (
          <PokemonCard
            key={index}
            pokemon={pokemon}
            deletPokemon={deletPokemon}
            setDetail={setDetail}
            btn = {'delet'}
          />
        );
      })}
    </ConteinerPokedex>
  );
};
