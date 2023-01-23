import Routes from "./routers/Router"
import { React, useEffect, useState } from "react";
import { getPokemons } from "./components/APIs/getPokemons";
import { GlobalStyled } from "./GlobalStyled";

function App() {
  const [pokemons, setPokemons] = useState(Array)
  const [pokedex, setPokedex] = useState([])
  const [showCart, setShowCart] = useState(false)
  // console.log(pokemons)



  useEffect(() => {
    getPokemons(setPokemons, pokemons)
  }, [])
  return (
    <div >
      <GlobalStyled />
      <Routes
        pokemons={pokemons} setPokemons={setPokemons}
        pokedex={pokedex} setPokedex={setPokedex}
        showCart={showCart} setShowCart={setShowCart}
      />
    </div>
  );
}

export default App;
