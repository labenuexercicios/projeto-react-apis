import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import { Container, Image, Stats, Moves, Selection, Main, Pokemon, Pokebola } from './DetailsPageStyle'
import Header from '../../Components/Header/Header'
import axios from 'axios'
import BASE_URL from "../../dadosApiConstants/url"
import { getPokemonType } from '../../Components/PokemonCard/TypePokemon'
import {ChakraProvider} from "@chakra-ui/react"
import {Progress} from "@chakra-ui/react"

function DetailPage() {

  const params = useParams()
  const navigate = useNavigate()

  const [pokemonDetails, setPokemonDetails] = useState([])

  const getPokemon = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/${params.pokemonName}`)
      setPokemonDetails(response)
      console.log(response)
    } catch  (error){
      console.log(error)
    }
  }

  useEffect(() =>{
    getPokemon()
    console.log(params)
  }, [])

  const type = () =>{
    if(pokemonDetails?.data?.types[1]) {
      return (
        <>
        <img src={getPokemonType(pokemonDetails?.data?.types[0]?.type?.name)}/>
        <img src={getPokemonType(pokemonDetails?.data?.types[1]?.type?.name)}/>
        </>
      )
    }
    return(
     <img src={getPokemonType(pokemonDetails?.data?.types[0]?.type?.name)}/>
 
    )
  }

  let valueTotal = 0



  return (
    <div>
      <Header />
      <ChakraProvider>



      </ChakraProvider>


    </div>
  )
}

export default DetailPage