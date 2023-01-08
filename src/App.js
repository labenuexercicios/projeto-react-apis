import { GlobalStyle } from "./GlobalStyle.styled";
import Router from "./routes/Routes";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { GlobalContext } from "./contexts/GlobalContext";
import { ChakraProvider } from "@chakra-ui/react";



function App({theme}) {
  const [pokemons, setPokemons] = useState([])
  const [pokedex, setPokedex] = useState([])

  const getPokemons = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=100?limit=100&offset=0")

      .then((resposta) => {
        // console.log(resposta.data.results)
        setPokemons(resposta.data.results)

      })

      .catch((error) => {

      })
  }
  useEffect(() => {
    getPokemons()
  }, [])

  const adicionaPokedex = (pokemonToAdd) => {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    )
    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemonToAdd]

      const stringficado = JSON.stringify(newPokedex)
      localStorage.setItem("local", stringficado)

      setPokedex(newPokedex)
    }
  }

  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
    )

    const stringficado = JSON.stringify(newPokedex)
    localStorage.setItem("local", stringficado)

    setPokedex(newPokedex)
  }

  const verificarItem = () => {
    if (localStorage.getItem("local")){
    const guardarItem = localStorage.getItem ("local")
    const pegarItem = JSON.parse(guardarItem)
    setPokedex(pegarItem)
    }
      }

      useEffect(() =>{
        verificarItem()
      }, [])


  const context = {
    pokemons: pokemons,
    adicionaPokedex: adicionaPokedex,
    pokedex: pokedex,
    removeFromPokedex: removeFromPokedex,
  }

  return (

    <>
      <ChakraProvider theme={theme}>
        <GlobalStyle />
        <GlobalContext.Provider value={context}>
          <Router />
        </GlobalContext.Provider>
      </ChakraProvider>

    </>
  );
}

export default App;




