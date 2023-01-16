import { ChakraProvider } from "@chakra-ui/react";
import axios from "axios";
import { GlobalContext } from "./contexts/GlobalContext";
import { GlobalStyle } from "./GlobalStyle.styled";
import Router from "./router/Router"
import { useEffect, useState } from "react";
export default function App() {
  const [pokemons, setPokemons] = useState([])
  const [pokedex,setPokedex] = useState([])
  const [pokemonDetail,setPokemonDetail] = useState({})
  
  const pegarPokemons = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon")
      setPokemons(response.data.results)
    }
    catch (error) {
      console.log(error.response);
    }
  }

  useEffect(() => { pegarPokemons() }, [])


  let teste = "teste"

  const context = {pokemonDetail,setPokemonDetail,pokemons,pegarPokemons,setPokemons,pokedex,setPokedex}
  
  
  return (
    <>
      <GlobalStyle />
      <ChakraProvider>
        <GlobalContext.Provider value={context}>
          <Router />
        </GlobalContext.Provider>
      </ChakraProvider>
    </>
  );
}