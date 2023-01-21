import Routes from "./routers/Router"
import React, { useEffect, useState } from "react";
import { getPokemons } from "./components/APIs/getPokemons";
import { GlobalStyled } from "./GlobalStyled";






function App() {
  const [pokemons, setPokemons] = useState([])
  useEffect(() => {
    getPokemons(setPokemons, pokemons)
  }, [])
  return (
    <div >
      <GlobalStyled />
      <Routes
        pokemons={pokemons} setPokemons={setPokemons}
      />
    </div>
  );
}

export default App;
