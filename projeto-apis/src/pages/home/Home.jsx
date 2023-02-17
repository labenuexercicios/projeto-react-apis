import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Cardpokemon from "../../components/cardPokemon/Cardpokemon"
import { ContainerHome } from "./styled"
export const Home=()=> {
  const [pokemons, setPokemons]= useState([])

  const requiApi = axios.create({
    baseURL:'https://pokeapi.co/api/v2/pokemon'
  })
  const pokemonReq = async() => {
    const response = await requiApi.get()
    const dados = await response.data.results
    setPokemons(dados)
  }
  useEffect(()=>{
    pokemonReq()
  },[])
  // console.log(pokemons)
  return (
    <ContainerHome>
      
      {pokemons.map((pokemon)=>{
        return <Cardpokemon 
        pokemon={pokemon}
        key={pokemon.name}
        />
      })}
    </ContainerHome>
  )
}
