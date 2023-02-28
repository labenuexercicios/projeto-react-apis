import React, { useState, useEffect } from "react";
import axios from "axios";
import { Router } from "./routes/Router";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const getPokemon = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/berry/${pokemon.id}/`
      );

      setPokemon(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    getPokemon();
  }, []);
  console.log(pokemon);
  return (
    <div>
      <h1>Pokedex será feita aqui!</h1>
      {pokemon.map((element) => {
        return <li key={element.id}>{element.name}</li>;
      })}
      <Router />
    </div>
  );
}

export default App;
