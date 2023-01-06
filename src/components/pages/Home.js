import { Box, Flex, Img, Stack, Text } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import Header from '../Header/Header'
import Cards from "../Cards/Cards"
import { GlobalContext } from '../contexts/GlobalContext'
import gotchaimg from "../../assets/topokedex.svg"


const Home = () => {
  const context = useContext(GlobalContext)

  const { pokemons, gotcha, setGotcha } = context

  useEffect(() => {

  }, [ pokemons ])

  return (
    <Stack
      position={"relative"}>
      <Header />
      {gotcha &&
        <Img src={gotchaimg}
          left={"40vw"}
          top={"100px"}
          position={"absolute"}
          zIndex={"1010"}
          alignItems={"center"}
        ></Img>
      }
      <Box
        bg={"#5d5d5d"}
        padding={"30px"}
        h={"84.26vh"}
        overflow={"auto"}
      ><Text
        fontFamily={"poppins"}
        fontWeight={"700"} fontSize={"48"}
        color={"white"} paddingTop={"10px"}
      >Todos os Pokemons</Text>
        <Flex
          flexWrap={"wrap"}
          flexDirection={"row"}
          justifyContent={"space-around"}
          paddingTop={"20px"}
        >
          {
            pokemons.map((pokemon) => {
              return <Cards pokemon={pokemon} key={pokemon.name} setGotcha={setGotcha} />
            })
          }
        </Flex>
      </Box>
    </Stack>
  )
}

export default Home