import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useContext } from "react"
import { GlobalContext } from "../../Context/GlobalContext"
import {goToHomePage} from '../../Routes/cordinator'
import Card from '../Card/Card'
// import PokedexCard from '../PokedexCard/PokedexCard'
import {DetailsMain, DetailsNav, DetaisContent} from './PokedexStyle'

export default function Pokedex() {
  const context = useContext(GlobalContext)
  const {Pokedex, setLocation} = context;
  const navigate = useNavigate()
  
  return (
    <DetailsMain>
      {setLocation(1)}
      <DetailsNav>
        <Button colorScheme='teal' onClick={() => goToHomePage(navigate)}>Ir para Pokemons</Button>
      </DetailsNav>

      <DetaisContent>
        {Pokedex.map(pokemon => <Card key={pokemon.name} name={pokemon.name} url={pokemon.url}/>)}
      </DetaisContent>
    </DetailsMain>
  )
}