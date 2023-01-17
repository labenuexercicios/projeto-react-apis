import Routes from "./routers/Router"
import React, { useEffect, useState } from "react";
import axios from "axios"






function App() {
  const [listPokemons, setListaPokemons] = useState([])


  const getPokemons = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
      setListaPokemons(response.data.results);
    } catch (err) {
      // TODO
      // adicionar tratamento da exceção
      console.error(err);
    }
  }


  useEffect(() => {
    getPokemons()
  }, [])
  return (
    <div >
      <Routes listPokemons={listPokemons} />
    </div>
  );
}

export default App;
