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
  RightContainer
} from './style'

export default function PokedexCard(props) {
  const {pokemon} = props
  const navigate = useNavigate()

  const context = useContext(GlobalContext)
  const{addToPokedex} = context;

  return(
    <CardContainer>
      <MainCardContainer>
        <LeftContainer>
          <Heading size='md'>#{pokemon.id}</Heading>
          <Heading>
          {(pokemon.name)}
          </Heading>
          {pokemon.types?.map(type => type.type.name)}
        </LeftContainer>

        <RightContainer>
          <img alt='' src={pokemon.sprites?.other["official-artwork"]["front_default"]}></img>
        </RightContainer>
        
      </MainCardContainer>
      

      <CardLink>
        <Heading size='md'>
          <button onClick={() => goToDetailsPage(navigate, pokemon.name)}>Detalhes</button>
        </Heading>
        <Button colorScheme='teal' onClick={() => addToPokedex(pokemon)} >Remover da Pokedex</Button>
      </CardLink>
      
      
    </CardContainer>
  )
}