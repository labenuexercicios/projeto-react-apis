import Routes from "./routers/Router"
import { React, useEffect, useState } from "react";
import { getPokemons } from "./components/APIs/getPokemons";
import { GlobalStyled } from "./GlobalStyled";
import { PokeContext, PokedexContext, PokemonsContext } from "./components/Context/Pokedex";

function App() {
  const [pokemons, setPokemons] = useState(Array)
  const [pokedex, setPokedex] = useState([])
  const [pokemonDetails, setPokemonDetais] = useState([])

  const context = {
    pokemons: pokemons,
    setPokemons: setPokemons
  }

  const pokedexContext = {
    pokedex: pokedex,
    setPokedex: setPokedex
  }

  const pokeDetails = {
    pokemonDetails: pokemonDetails,
    setPokemonDetais: setPokemonDetais
  }


  useEffect(() => {
    getPokemons(setPokemons, pokemons)
  }, [])
  return (
    <div >
      <GlobalStyled />
      <PokemonsContext.Provider value={context}>
        <PokedexContext.Provider value={pokedexContext}>
          <PokeContext.Provider value={pokeDetails}>
            <Routes />
          </PokeContext.Provider>
        </PokedexContext.Provider>
      </PokemonsContext.Provider>
    </div>
  );
}

export default App;
