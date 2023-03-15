import axios from "axios"
import { useEffect, useState, useContext } from "react"
import { GlobalContext } from "../../Context/GlobalContext"
import { useNavigate } from "react-router-dom"
import {goToDetailsPage} from '../../Routes/cordinator'
import { Button, Heading } from '@chakra-ui/react'
import {
  CardContainer,
  CardLink,
  MainCardContainer,
  LeftContainer,
  RightContainer,
  Types
} from './style'
import {getColors} from '../../utils/returnCardColor'
import {getTypes} from '../../utils/returnType'

export default function Card(props) {
  const context = useContext(GlobalContext)
  const{addToPokedex, removeFromPokedex} = context;
  const navigate = useNavigate()
  const url = props.url
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {getPokemonData(url)},[])
  

  const getPokemonData = async url => {
    if(url) {
      await axios.get(url)
      .then(response => {
        setPokemon(response.data)
      })
      .catch(error => console.log(error))
    } else {
      await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
      .then(response => {
        setPokemon(response.data)
      })
      .catch(error => console.err(error))
    }
  }

  const location = window.location.href

  return(
    <CardContainer style={{backgroundColor: `${getColors(pokemon.types?.[0].type.name)}`}}>
      <MainCardContainer>
        <LeftContainer>
          <Heading size='md'>#{pokemon.id}</Heading>
          <Heading>{(pokemon.name)}</Heading>

          {/* Getting types */}
          <Types>
            {pokemon.types?.map(types => {
                  const type = getTypes(types.type.name)
                  return (
                    <img key={types.type.name} src={type} alt={types.type.name}/>
                  )
            })}
          </Types>
          
        </LeftContainer>

        <RightContainer>
          <img alt='' src={pokemon.sprites?.other["official-artwork"]["front_default"]}></img>
        </RightContainer>
        
      </MainCardContainer>
      

      <CardLink>
        <Heading size='md'>
          <button onClick={() => goToDetailsPage(navigate, pokemon.name)}>Detalhes</button>
        </Heading>
        {
          location.includes('pokedex')
          ? <Button colorScheme='teal' onClick={() => removeFromPokedex(pokemon)} >Remover!</Button>
          : <Button colorScheme='teal' onClick={() => addToPokedex(pokemon)} >Capturar!</Button>
        }
      </CardLink>
      
      
    </CardContainer>
  )
}