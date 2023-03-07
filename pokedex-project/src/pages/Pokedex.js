import Header from "../components/header";
import { useContext } from "react";
import { PokemonContext } from "../context/pokemonContext";
import { Card } from "@chakra-ui/react";

function Poke() {
  const { pokedex } = useContext(PokemonContext);
  return (
    <div>
      <Header />
      {pokedex.map((pokemon) => (
        <h1>{pokemon.data.name}</h1>
      ))}
    </div>
  );
}

export default Poke;
