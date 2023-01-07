import Rotas from './Rotas/Rotas';
import axios from 'axios';
import { GlobalContext } from "./componentes/Context/context"
import { useEffect, useState } from "react";
import { BASE_URL } from "./componentes/constantes/url";

function App() {
  const [pokelist, setPokelist] = useState([]);
  const [pokedex, setPokedex] = useState([]);

 

  const fetchPokelist = async () => {
    try {
      const response = await axios.get(BASE_URL);
      setPokelist(response.data.results);
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchPokelist();
  }, []);
  const addToPokedex = (pokemonToAdd) => {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    );

    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemonToAdd];
      setPokedex(newPokedex);
    }
  };

  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
    );

    setPokedex(newPokedex);
  };

  //caso o nome seja igual, pode usar abreviação, removendo a igualdade.
 const context = {
 pokelist,
addToPokedex,
 removeFromPokedex,
 pokedex,
 
 }

  return (
    <>
      <GlobalContext.Provider value={context}>
        <Rotas/>
      </GlobalContext.Provider>
    </>
  );
}

export default App;

