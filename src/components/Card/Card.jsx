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
  const{addToPokedex} = context;
  const navigate = useNavigate()
  const url = props.url
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {getPokemonData(url)},[])
  

  const getPokemonData = async url => {
    await axios.get(url)
      .then(response => {
        setPokemon(response.data)
        // console.log(pokemon.name)
      })
      .catch(error => console.log(error))
  }

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
          {/* <img alt='' src={pokebola}/> */}
        </RightContainer>
        
      </MainCardContainer>
      

      <CardLink>
        <Heading size='md'>
          <button onClick={() => goToDetailsPage(navigate, pokemon.name)}>Detalhes</button>
        </Heading>
        <Button colorScheme='teal' onClick={() => addToPokedex(pokemon)} >Capturar!</Button>
      </CardLink>
      
      
    </CardContainer>
  )
}