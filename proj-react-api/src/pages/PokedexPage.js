import React, { useContext, useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import { goToPageDetails } from '../router/coordinator'
import { GlobalContext } from '../context/GlobalContext'
import Card from '../components/cards/Cards'
import Header from '../components/header/Header'
import { Flex, Heading } from '@chakra-ui/react'

const PokedexPage = () => {
  const context = useContext(GlobalContext)
  const {pokedex,setCallPlace}=context
  const navigate = useNavigate()
  useEffect(()=>{setCallPlace(false)},[])
  return (
    <>
    <Header/>
    <Flex 
    bgColor={"#5E5E5E"}
    wrap={'wrap'}
    justifyContent={"space-around"}
    flexDirection={"row"}
    h="100vh">
      
      <Heading
      color={"white"}
      marginTop="20px"
      padding={"10px"}
      wrap={'wrap'}
      w={'100%'}>Meus Pokémons</Heading>

    {pokedex
    .sort((a,b)=>a.data.id > b.data.id? 1 : -1)
    .map((pokemon)=>{
      return(
        
        <Card pokemon={pokemon} key={pokemon.data.id} />
        )
      })}
      </Flex>
    </>
  )
}

export default PokedexPage