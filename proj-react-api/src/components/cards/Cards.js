
import Modal from "react-modal";
import '@fontsource/inter/700.css'
import '@fontsource/poppins/700.css'
import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  Box,
  VStack,
  position,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react';

import axios from 'axios';
import { GlobalContext } from '../../context/GlobalContext';
import React, { useContext, useEffect, useState } from 'react';
import { baseUrl } from '../utils/baseUrl';
import { useLocation, useNavigate } from 'react-router-dom';
import { getTypesPokemon } from '../../assets/pokemon-types/pokemons_types';
import { getColorCard } from '../../assets/pokemon-types/getColorCard';
import { goToPageDetails } from '../../router/coordinator';
import { useParams } from 'react-router-dom';
import ModalShow from "../modal/modal";


<style> @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Poppins:wght@700&display=swap');
   </style>
{/* <style>@import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap'); </style> */}
export default function Card(props) {
  const context = useContext(GlobalContext)
  const navigate = useNavigate()
  const location=useLocation()
  const params = useParams()
  const {onClose,onOpen}=useDisclosure()
  const { capturePokemon,
          pokedex,
          setPokedex,
          backPokemonHome,
          modalIsOpen,
          closeModal,
          modalIncludeDelete,
          isOpen,
          setIsOpen,
          isOpenDel,
          setIsOpenDel
                  } = context
  // const [openTheModal,setOpenTheModal]=useState(false)
  // const [pokedex,setPokedex]=useState([])
  // // useEffect(() => { getTypePokemons() }, [])
 
 
  // const capturePokemon = (pokemonCaptured)=>{
  //   const copyPokedex = [...pokedex]
  //   copyPokedex.push(pokemonCaptured)
  //   setPokedex(copyPokedex)
  //   console.log(pokemonCaptured)
  //   console.log(pokedex)
  // }
  // console.log(location)
  // console.log(props.pokedex.data.name)
  // function openModal(){
  //   setOpenTheModal(true)
  // }

  return(
   
    <>
    <Flex width="440px"
          height="210px"
          borderRadius="12px"
          marginTop={"36px"}
          bgColor={getColorCard(props.pokemon.data.types[0].type.name)} 
          gap="10px" 
          flexDirection={"row"}>
          {/* {getTypePokemons(props.pokemon.url) } */}
          <VStack fontFamily={'inter'} p="16px" align="flex-start" maxW="350px" minW="200px">
            {props.pokemon.data.id <=9?<Text color={"#FFFFFF"}>#0{props.pokemon.data.id}</Text>:<Text color={"#FFFFFF"}>#{props.pokemon.data.id}</Text>}
            
            <Heading color={"#FFFFFF"} fontSize={'2xl'} fontFamily='Inter'>
              {props.pokemon.data.name.charAt(0).toUpperCase() + props.pokemon.data.name.slice(1)}
            </Heading>
            {/* <Text fontSize={'xs'} fontWeight="medium">{}</Text> */}
            <Flex
              flexDirection={"row"}
              gap="8px"
            >

            <Image src={getTypesPokemon(props.pokemon.data.types[0].type.name)}></Image>
            <Image src={getTypesPokemon(props.pokemon.data.types[1]?.type.name)}></Image>
            </Flex>
            {/* <Text fontSize={'xs'} fontWeight="medium">{getTypesPokemon(props.pokemon.data.types[0].type.name)}</Text> */}
            {/* <Text fontSize={'xs'} fontWeight="medium">{props.pokemon.data.types[1]?.type.name}</Text> */}
           {/* {location.pathname === "/"? */}
           <Flex
            flexDirection={"row"}
            justifyContent="space-around"
            alignItems={"stretch"}
            border={"#000000"}
            marginTop={"0"}
           >

              <Link 
              color={"#FFFFFF"} 
              fontFamily='Poppins'
              marginTop={"21px"}
              onClick={()=>goToPageDetails(navigate,props.pokemon.data.name)}>Detalhes
              </Link>
              {/* <Link color={"#FFFFFF"} fontFamily='Poppins'onClick={()=>goToPageDetails(navigate,props.pokedex.data.name)}>Detalhes</Link> */}
            
            {/* } */}
            {location.pathname === "/"?
                          <Button
                          w={"10rem"}
                                  marginTop={"25px"}
                                  marginBottom={"1rem"}
                                  color={"#000000"}
                                  bgColor={"#ffffff"}
                                  marginLeft={"175px"}
                                  // fontFamily='poppins'
                                  fontWeight={"400"}
                                  lineHeight={"24px"}
                                  fontStyle="normal"
                                  fontSize={"16px"}
                                  // zIndex="101"
                                  onClick={() =>{ 
                                    capturePokemon(props.pokemon)
                                    setIsOpen(true)
                                  } }
                                  
                                  >
                                      Capturar!
                                  </Button>:
                                  <Button
                                  w={"10rem"}
                                  marginTop={"25px"}
                                  marginBottom={"1rem"}
                                  color={"#000000"}
                                  bgColor={"#ffffff"}
                                  marginLeft={"175px"}
                                  // zIndex="101"
                                  onClick={() => {
                                    backPokemonHome(props.pokemon)
                                    setIsOpenDel(true)}
                                  }
                                  >
                                  Excluir!
                          </Button>}
                    </Flex>
           
          </VStack>
          <Image
            // src={'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            src={props.pokemon.data.sprites.other["official-artwork"].front_default} 
            alt={"imagem"}
            position={"absolute"}
            marginLeft={"250px"}
            marginTop={"-40px"}
            // zIndex="100"
             maxH="200px"
              maxW="200px">

          </Image>
          <Image 
          marginLeft={"-200"} 
          src='../imgs/pokebola.png' >
          </Image>
          </Flex>
          
          {/* {isOpen ? <ModalShow></ModalShow> : <></>}
          {isOpenDel ? <ModalShow></ModalShow> : <></>} */}
          


        

</>
    
  )

  
}