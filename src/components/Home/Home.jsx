import { MainContainer, Navbar, PokemonContainer } from "./HomeStyle"
import Card from "../Card/Card"
import { useContext } from "react"
import { GlobalContext } from "../Context/GlobalContext"

export default function Home () {
  const context = useContext(GlobalContext)
  const {Pokemons} = context;
  
  return (
    <MainContainer>
      <Navbar>
        <h2>Todos os Pokemóns</h2>
        <h2>Ir para Pokedex</h2>
      </Navbar>
      <PokemonContainer>
        {/* {console.log(Pokemons)} */}
        {Pokemons.map(pokemon => <Card key={pokemon.name} name={pokemon.name} url={pokemon.url}/>)}
      </PokemonContainer>
      
    </MainContainer>
  )
}