import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { useNavigate } from "react-router-dom";
import { CardsContainer } from "./styles";
import usePokemons from "../../Hooks/usePokemons";

const PokedexPage = () => {
  const navigate = useNavigate();

  const { pokemons } = usePokemons();


  return (
    <div>
      <Header />
      <CardsContainer>
        {pokemons.map((pokemon) => {
          return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
        })}
      </CardsContainer>
    </div>
  );
};

export default PokedexPage;
