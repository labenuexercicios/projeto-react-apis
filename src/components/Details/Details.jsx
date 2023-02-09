import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { goToHomePage } from "../../Routes/cordinator"
import { Button } from '@chakra-ui/react'
import {DetailsMain, DetailsNav, DetaisContent} from './Style'

export default function Details() {
  const navigate = useNavigate()
  const url = useParams().name

  const [pokemonDetails, setPokemonDetais] = useState([])
  useEffect(() => {getPokemonData(url)},[])
  

  const getPokemonData = async url => {
    await axios.get(`https://pokeapi.co/api/v2/pokemon/${url}`)
      .then(response => {
        setPokemonDetais(response.data)
        // console.log(pokemonDetails)
      })
      .catch(error => console.log(error))
  }

  return(
    <>
      <DetailsMain>
        <DetailsNav>
          <Button colorScheme='teal' onClick={() => goToHomePage(navigate)}>Ir para Pokemons</Button>
        </DetailsNav>

        <DetaisContent>
        {pokemonDetails.name}
        </DetaisContent>
      </DetailsMain>
    </>
  )
}