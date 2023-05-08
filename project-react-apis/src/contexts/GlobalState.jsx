import axios from "axios";
import { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { BASE_URL } from "../constants/url"
import { MessageBox, Text, BigText1, BigText2, H3 } from "./styled";

export default function GlobalState({ children }) {
  const [pokelist, setPokelist] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const MESSAGE_TIMEOUT = 3000

  useEffect(() => {
    fetchPokelist();
  }, []);

  const fetchPokelist = async () => {
    try {
      const response = await axios.get(BASE_URL);
      setPokelist(response.data.results);
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error.response);
    }
  };

  const addToPokedex = (pokemonToAdd) => {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    );

    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemonToAdd];
      setPokedex(newPokedex);
      setMessage(<Text><BigText1>Gotcha!</BigText1><H3>Pokemon adicionado a sua Pokédex</H3></Text>);
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, MESSAGE_TIMEOUT);
    }
  };
  
  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
    );

    setPokedex(newPokedex);
    setMessage(<Text><BigText2>Oh, no!</BigText2><H3>O Pokémon foi removido da sua Pokedex</H3></Text>);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, MESSAGE_TIMEOUT);
  };

  const hideMessage = () => {
    setShowMessage(false);
  };

  //OBJETO QUE PROVERÁ
  const context = {
    pokelist,
    setPokelist,
    pokedex,
    setPokedex,
    addToPokedex,
    removeFromPokedex,
    fetchPokelist
  }
  
  return (
    <GlobalContext.Provider value={context}>
      {children}
      {showMessage && (
        <MessageBox onClick={hideMessage}>
          {message}
        </MessageBox>
      )}
    </GlobalContext.Provider>
  )
}



