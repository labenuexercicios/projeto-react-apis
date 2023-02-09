import axios from "axios";
import { GlobalContext } from "./GlobalContext";
import { useEffect,useState } from "react";

export default function GlobalState(props) {

  const [Pokemons, setPokemons] = useState([])

  useEffect(() => {getPokemonApi()},[])

  function getPokemonApi() {
    axios.get(`https://pokeapi.co/api/v2/pokemon`)
      .then(response => {
        setPokemons(response.data.results)
      })
      .catch(error => console.log(error))
  }

  const context = {
    Pokemons: Pokemons
  }

  return(
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  )
}