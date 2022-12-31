import React, { useContext, useEffect, useState } from 'react'
import {useLocation, useNavigate} from "react-router-dom"
// import { goToPokedexPage } from '../router/coordinator'
import Header from "../components/header/Header"
import Card from '../components/cards/Cards'
// import axios from 'axios'
import { baseUrl } from '../components/utils/baseUrl'
import { GlobalContext } from '../context/GlobalContext'
import { Flex, Heading } from '@chakra-ui/react'
import ModalShow from '../components/modal/modal'


const Homepage = () => {
    const navigate = useNavigate()
    
    const context = useContext(GlobalContext)
    const {pokemons, setPokemons, getPokemons,setCallPlace, isOpen,pokedex}=context
    useEffect(()=>{setCallPlace(1)},[])
    
  const location=useLocation()
  // const filterPokemonsHome=()=>{
  //   pokemons.filter((pokemonHome)=>!pokedex.find((pokemonInPokedex)=>pokemonHome.data.name === pokemonInPokedex.data.name))
  // }

    
  return (
    <>
    <Header/>
    <Flex 
    bgColor={"#5E5E5E"}
    wrap={'wrap'}
    justifyContent={"space-around"}
    flexDirection={"row"}
    >
      
      <Heading
      color={"white"}
      marginTop="20px"
      padding={"10px"}
      w={'100%'}>Todos os Pokémons</Heading>
     
      {pokemons && pokemons
      .filter((pokemonHome)=>!pokedex
      .find((pokemonInPokedex)=>pokemonHome.data.name === pokemonInPokedex.data.name))
      .sort((a,b)=>a.data.id > b.data.id? 1 : -1)
      .map((pokemon)=>{
        return(
          <Card pokemon={pokemon} key={pokemon.data.id} justifyContent="space-between"/>
          )
        })
      }
    </Flex>
    {/* {isOpen?<ModalShow></ModalShow>: <></>} */}
    </>
  )
}

export default Homepage