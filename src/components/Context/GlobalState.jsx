import axios from "axios";
import { GlobalContext } from "./GlobalContext";
import { useEffect,useState } from "react";

export default function GlobalState(props) {

  const [Pokemons, setPokemons] = useState([])

  useEffect(() => {getPokemonApi()},[])

  async function getPokemonApi() {

    for (let i = 1; i <= 20; i += 1) {
      await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(response => {
        const pokemonToAdd = [...Pokemons, response.data]
        setPokemons(pokemonToAdd)
        console.log(Pokemons)
      })
      .catch(err => console.log(err))
    }

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