import { useEffect, useState } from "react"
import Header from "../../Components/Header"
import PokemonCard from "../../Components/PokemonCard"
import api from "../../Services/api"
import { Inicio } from "./style"

const PagListaPokemon = () => {
  const [pokemons, setPokemons] = useState([])


  useEffect(() => {
    async function ConsumePokeApi() {
      const response = await api.get(`/pokemon`)
      setPokemons(response.data.results)
    }


    ConsumePokeApi()
  }, [])

  return (
    <>
      <Header showPokedexBtn />
      <Inicio>
        {pokemons && (
          pokemons.map(pokemon => (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              showCapturarPokemon ={true}
            />
          ))
        )}
      </Inicio>
    </>

  )
}

export default PagListaPokemon