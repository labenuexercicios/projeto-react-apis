import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import {goToHomePage} from '../../Routes/cordinator'

export default function Pokedex() {
  const navigate = useNavigate()
  return (
    <>
        <Button colorScheme='blue' onClick={() => goToHomePage(navigate)}>Ir para Pokemons</Button> 
        Pokedex
    </>
  )
}