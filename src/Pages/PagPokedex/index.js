import Header from "../../Components/Header"
import { Inicio } from "./style"
import { usePokemon } from "../../Contexts/pokedexContext"
import PokemonCard from "../../Components/PokemonCard"

const PagPokedex = () => {
  const {pokemons} = usePokemon()
  return (
    <>
      <Header MostrarTodosPokemons/>
        <h1>Meus Pokémons</h1>
      <Inicio>
          {pokemons && (
            pokemons.map(pokemon => (
              <PokemonCard
                key={pokemon}
                name={pokemon}
                showExcluirPokemon={true}
              />
            ))
          )}
      </Inicio>
    </>
  )
}

export default PagPokedex