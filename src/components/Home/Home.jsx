import { MainContainer, Navbar, PokemonContainer } from "./HomeStyle"
import Card from "../Card/Card"
import { useContext } from "react"
import { GlobalContext } from "../../Context/GlobalContext"
import { Button } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"
import {goToPokedexPage} from '../../Routes/cordinator'


export default function Home () {
  const context = useContext(GlobalContext)
  const {Pokemons, setLocation} = context;
  const navigate = useNavigate();
  
  return (
    <MainContainer>
      {setLocation(0)}
      <Navbar>
        <Button colorScheme='blue' onClick={() => goToPokedexPage(navigate)}>Ir para Pokedex</Button>
      </Navbar>
      <PokemonContainer>
        {Pokemons.map(pokemon => <Card key={pokemon.name} name={pokemon.name} url={pokemon.url}/>)}
      </PokemonContainer>
      
    </MainContainer>
  )
}