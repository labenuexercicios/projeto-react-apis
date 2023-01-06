import { Router } from "./Router/Router";
import axios from "axios";
import { useEffect, useState } from "react";
import { PokemonContext } from "./contexts/PokeListContext";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./themes/themes.js"

function App() {
  // Estados pra serem usados globalmente usando o Context
  const [pokeList, setPokeList] = useState([]) // pokeList geral
  const [caughtPokemons, setCaughtPokemons] = useState([]) // pokemons capturados
  const [pokeForDetails, setPokeForDetails] = useState({}) // pokemon escolhido para checar detalhes
  
  const context = {
    pokeList: pokeList, setPokeList: setPokeList,
    caughtPokemons: caughtPokemons, setCaughtPokemons: setCaughtPokemons,
    pokeForDetails: pokeForDetails, setPokeForDetails: setPokeForDetails
  }

  // Função pra trazer as infos dos pokémons
  const getAndSetPokeList = () => {
    let newPokeList = []
    for (let i = 1; i <= 20; i++) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((response) => { newPokeList.push(response.data) })
        .catch((error) => { console.log(error.message) })
    }
    setPokeList(newPokeList)
  }

  // // useEffect pra que a função seja chamada apenas uma vez no carregamento de tela
  useEffect(() => { getAndSetPokeList() }, [])
  // console.log(pokeList)
  return (
    <ChakraProvider theme={theme}>
      <PokemonContext.Provider value={context}>
        <Router />
      </PokemonContext.Provider>
    </ChakraProvider>
  );
}

export default App;
