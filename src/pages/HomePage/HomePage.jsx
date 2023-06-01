import { PokemonCard } from "../../components/pokemonCard/PokemonCard";
import GlobalContext from "../../context/GlobalContext";
import { Conteiner, H1 } from "./styled";
import { useContext } from "react";

export const HomePage = () => {

  const context = useContext(GlobalContext)
    const { pokemons, noPokedex } = context;
  
  return (
    <Conteiner>
      <H1>Todos os pokemons</H1>
      {pokemons
        .filter((pokemon) => noPokedex(pokemon.name))
        .map((pokemon, index) => {
          return (
            <PokemonCard              
              key={index}
              pokemon={pokemon}
              btn={'capture'}
            />
          );
        })}
    </Conteiner>
  );
};
