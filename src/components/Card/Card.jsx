import axios from "axios"
import {CardContainer} from './style'
import { useEffect, useState } from "react"

export default function Card(props) {
  const url = props.url
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {getPokemonData(url)},[])
  
  // const getPokemonData = async url => {
  //   try {
  //     const response = await axios.get(url)
  //     setPokemon(response.data)
  //     console.log(pokemon['name'])
  //   }
  //   catch (err){
  //     console.log(err)
  //   }
  // }

  const getPokemonData = async url => {
    await axios.get(url)
      .then(response => {
        setPokemon(response.data)
        console.log(pokemon.types)
      })
      .catch(error => console.log(error))
  }

  return(
    <CardContainer>
      <h3>#{pokemon.id}</h3>
      <h1>{(pokemon.name)}</h1>

      {/* {pokemon.types[0].type.name} */}

      Detalhes: <br/>
      Capturar! <br/>
    </CardContainer>
  )
}