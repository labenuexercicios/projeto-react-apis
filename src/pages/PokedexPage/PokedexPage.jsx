import { ConteinerPokedex, H1 } from "./styled";
import { PokemonCard } from "../../components/pokemonCard/PokemonCard";
import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";

export const PokedexPage = () => {
  
  const context = useContext(GlobalContext)
  const { pokedex } = context;
  return (
    <ConteinerPokedex>
      <H1>Meus pokémons</H1>
      {pokedex.map((pokemon, index) => {
        return (
          <PokemonCard
            key={index}
            pokemon={pokemon}
            btn = {'delet'}
          />
        );
      })}
    </ConteinerPokedex>
  );
};
