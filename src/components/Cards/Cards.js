import React, { useContext, useEffect, useState } from 'react'
import logopokebola from "../../assets/logopokebola.svg"
import {
  Card,
  CardBody,
  Img,
  Stack,
  Text,
  Flex,
  Button
} from '@chakra-ui/react'
import axios from 'axios'
import { colors } from "../../assets/characteristics"
import typeGrass from "../../assets/grass.svg"
import typePoison from "../../assets/poison.svg"
import typefire from "../../assets/fire.svg"
import typeWater from "../../assets/water.svg"
import typeBug from "../../assets/bug.svg"
import typeFlying from "../../assets/flying.svg"
import typeNormal from "../../assets/normal.svg"
import { GlobalContext } from '../contexts/GlobalContext'
import { useNavigate } from 'react-router-dom'
import { goToDetailsPage } from '../Router/coordinator'



const Cards = ({ pokemon, isPokedex,}) => {
  const navigate = useNavigate()
  const [pokemonInfo, setPokemonInfo] = useState("")
  const context = useContext(GlobalContext)
  const {
    pokemons,
    addToPokedex,
    removePokedex,
  } = context

  useEffect(() => {
    getInfo()
  }, [pokemons])


  const getInfo = () => {
    axios.get(pokemon.url)
      .then((res) => {
        setPokemonInfo(res.data)
        // console.log(pokemonInfo)
      }).catch((erro) => {
        console.log(erro)
      })
  }

  const getColor = (type) => {
    if (type?.length > 0) {
      const color = colors.find((color) => color.type === type[0].type.name)
      return color ? color['color'] : 'grey'
    }
    return 'grey'
  }

  const getImg = (type) => {
    if (type.type.name === "grass") {
      return <Img src={typeGrass} h={"30px"} w={"100px"} key={"grass"} ></Img>
    } else if (type.type.name === "poison") {
      return <Img src={typePoison} h={"30px"} w={"100px"} key={"poison"} ></Img>
    } else if (type.type.name === "fire") {
      return <Img src={typefire} h={"30px"} w={"100px"} key={"fire"}></Img>
    } else if (type.type.name === "water") {
      return <Img src={typeWater} h={"30px"} w={"100px"} key={"water"}></Img>
    } else if (type.type.name === "bug") {
      return <Img src={typeBug} h={"30px"} w={"100px"} key={"bug"} ></Img>
    } else if (type.type.name === "flying") {
      return <Img src={typeFlying} h={"30px"} w={"100px"} key={"flying"} ></Img>
    } else if (type.type.name === "normal") {
      return <Img src={typeNormal} h={"30px"} w={"100px"} key={"normal"} ></Img>
    }
  }

  let maiscName = pokemon.name?.[0].toUpperCase() + pokemon.name?.substring?.(1)

  return (
    <Card>
        <CardBody
          position={"relative"}
          h={"263px"}
          w={"440px"}
          bg={"#5d5d5d"}
          borderRadius={"20px"}
          flexDirection={"column"}
          paddingTop={"53px"}
          overflow={"hidden"}
        >
          <Img
            src={logopokebola}
            position={"absolute"}
            top={"0"}
            right={"-35px"}
            zIndex={"1000"}
          ></Img>
          <Img
            src={pokemonInfo.sprites?.other["official-artwork"].front_default}
            height={"193px"}
            width={"193px"}
            position={"absolute"}
            top={"7"}
            right={"10px"}
            zIndex={"1001"}
          ></Img>
          <Stack
            h={"210px"}
            w={"440px"}
            bg={() => getColor(pokemonInfo?.types)}
            borderRadius={"20px"}
            zIndex={"999"}
            padding={"20px"}
            color={"white"}
          >
            <Text
              fontFamily={"inter"}
              fontWeight={"700"}
              fontSize={"16px"}
            >#{pokemonInfo?.id > 10 ? pokemonInfo.id : `0${pokemonInfo.id}`}</Text>
            <Text
              position={"absolute"}
              top={"85px"}
              fontFamily={"inter"}
              fontWeight={"700"}
              fontSize={"32px"}
            >{maiscName}</Text>
            <Flex
              flexWrap={"wrap"}
              flexDirection={"row"}
              paddingTop={"35px"}
              justifyContent={"left"}
            >
              {pokemonInfo.types?.map((type) => {
                return getImg(type)
              })}
            </Flex>
            <Text
              position={"absolute"} bottom={"15px"}
              fontFamily={"poppins"}
              fontWeight={"700"}
              textDecorationLine={"underline"}
              fontSize={"16px"}
              cursor={"pointer"}
              _hover={{
                color: "#DEE2E6"
              }}
              onClick={() => goToDetailsPage(navigate, pokemonInfo.name)}
            >Detalhes</Text>
            {!isPokedex &&
              <Stack
                alignItems={"end"}
                paddingTop={"30px"}>
                <Button
                  borderRadius={"10px"}
                  w={"165px"}
                  h={"40px"}
                  color={"black"}
                  bg={'white'}
                  _hover={{ bg: "#E5E5E5" }}
                  _active={{ bg: '#D1D1D1' }}
                  zIndex={"1001"}
                  fontFamily={"poppins"}
                  fontWeight={"400"}
                  onClick={() => addToPokedex(pokemon)}
                >Capturar!</Button>
              </Stack>}
            {isPokedex &&
              <Stack
                alignItems={"end"}
                paddingTop={"30px"}>
                <Button
                  borderRadius={"10px"}
                  w={"165px"}
                  h={"40px"}
                  color={"White"}
                  bg={'#FF6262'}
                  _hover={{ bg: "#FF8686" }}
                  _active={{ bg: '#A64343' }}
                  zIndex={"1001"}
                  fontFamily={"poppins"}
                  fontWeight={"400"}
                  onClick={() => removePokedex(pokemon)}
                >Excluir</Button>
              </Stack>}
          </Stack>
        </CardBody>
    </Card>
  )
}

export default Cards