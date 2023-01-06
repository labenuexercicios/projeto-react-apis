import React, { useContext, useEffect, useState } from 'react'
import { Box, Stack, Text, Img } from '@chakra-ui/react'
import Header from '../Header/Header'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { DetailsCard } from '../Cards/DetailsCard'
import { GlobalContext } from '../contexts/GlobalContext'
import gotchaimg from "../../assets/topokedex.svg"
import ohnoimg from "../../assets/tohome.svg"

const Detalhes = () => {
  const [pokeDetails, setPokeDetails] = useState([])
  const pokemonsName = useParams()
  const context = useContext(GlobalContext)

  const {gotcha, ohNo} = context

  useEffect(() => {
    getPokemonById()
  }, [])

  const getPokemonById = async () => {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonsName.name}/`)
      setPokeDetails(res.data)
    }
    catch (erro) {
      console.log(erro)
    }
  }
  return (
    <Stack>
      <Header pokeDetails={pokeDetails}/>
      {gotcha &&
        <Img src={gotchaimg}
          left={"40vw"}
          top={"100px"}
          position={"absolute"}
          zIndex={"1010"}
          alignItems={"center"}
        ></Img>
      }
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
        h={"84.15vh"}
        overflow={"auto"}
      ><Text fontFamily={"poppins"} fontWeight={"700"} fontSize={"48"} color={"white"} paddingTop={"10px"}>Detalhes</Text>
        <DetailsCard pokeDetails={pokeDetails} key={pokeDetails.id}/>
      </Box>
    </Stack>
  )
}

export default Detalhes