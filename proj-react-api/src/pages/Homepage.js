import React, { useContext, useEffect, useState } from 'react'
import {useLocation, useNavigate} from "react-router-dom"
import { goToPokedexPage } from '../router/coordinator'
import Header from "../components/header/Header"
import Card from '../components/cards/Cards'
import axios from 'axios'
import { baseUrl } from '../components/utils/baseUrl'
import { GlobalContext } from '../context/GlobalContext'
import { Flex, Heading } from '@chakra-ui/react'


const Homepage = () => {
    const navigate = useNavigate()
    
    const context = useContext(GlobalContext)
    const {pokemons, setPokemons, getPokemons,setCallPlace}=context
    useEffect(()=>{setCallPlace(1)},[])
    
    
  

  // const getPokemons = async () => {
  //   try {
  //     const response = await axios.get(`${baseUrl}/pokemon/`)
  //     setPokemons(response.data.results)
  //   } catch (error) {
  //     console.log(error)

  //   }
  // }

    // const getPokemons = ()=>{
    //   var endpoints = []
    //   for (let i=1; i<=21; i++){
    //     endpoints.push(`${baseUrl}/pokemon/${i}/`);
    //   }
    //   let response= axios.all(endpoints.map((endpoint)=>axios.get(endpoint)))
    //   .then((res)=>{setPokemons(res)
    //   })
    //   .catch((error)=>{console.log(error)})
    // }

    const location=useLocation()
    
  return (
    <>
    <Header/>
    <Flex 
    bgColor={"#5E5E5E"}
    wrap={'wrap'}
    justifyContent={"space-around"}
    flexDirection={"row"}>
      
      <Heading
      color={"white"}
      marginTop="20px"
      padding={"10px"}
      w={'100%'}>Todos os Pokémons</Heading>
     
      {pokemons
      .sort((a,b)=>a.data.id > b.data.id? 1 : -1)
      .map((pokemon)=>{
        return(
          <Card pokemon={pokemon} key={pokemon.data.id} justifyContent="space-between"/>
          )
        })
      }
    </Flex>
    </>
  )
}

export default Homepage