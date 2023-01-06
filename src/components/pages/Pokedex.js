import React, { useContext, useState } from 'react'
import Header from "../Header/Header"
import Cards from '../Cards/Cards'
import { Box , Flex, Text, Stack, Img} from '@chakra-ui/react'
import { GlobalContext } from '../contexts/GlobalContext'
import ohnoimg from "../../assets/tohome.svg"


const Pokedex = () => {
  const context = useContext(GlobalContext)
  const { pokedex, ohNo, setOhNo } = context
  return (
    <Stack>
    <Header/>
    {ohNo &&
        <Img src={ohnoimg}
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
        h={"84.10vh"}
        overflow={"auto"}
      ><Text fontFamily={"poppins"} fontWeight={"700"} fontSize={"48"} color={"white"} paddingTop={"10px"}>Meus Pokémons</Text>
       <Flex
          flexWrap={"wrap"}
          flexDirection={"row"}
          justifyContent={"space-around"}
          paddingTop={"20px"}
        >
          {
            pokedex.map((pokemon) => {
              return <Cards pokemon={pokemon} isPokedex={true} key={pokemon.name} setOhNo={setOhNo}/>
            })
          }
        </Flex>
      </Box>
    </Stack>
  )
}

export default Pokedex