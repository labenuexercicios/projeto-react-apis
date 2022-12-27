import React, { useContext, useEffect } from 'react'
import { Wrap, Box, Center, WrapItem, Image, Stack, Progress, Text, Flex } from '@chakra-ui/react'
import Header from '../components/header/Header'
import { GlobalContext } from '../context/GlobalContext'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { getTypesPokemon } from '../assets/pokemon-types/pokemons_types'
import { ContainerDetails } from './PageDetails.styled'
import { getColorCard } from '../assets/pokemon-types/getColorCard'
const PageDetails = (props) => {
  const context = useContext(GlobalContext)
  const { pokedex, pokemons, setDeletePokemonPokedex, backPokemonHome,
     deletePokemonPokedex, pokemonFromPageDetails, callBackPokemonHome, 
     setCallPlace,pokemonShow,setPokemonShow } = context
  console.log(pokemons)
  console.log(props)
  const params = useParams()
  console.log(params)
  // const pokemonShow = []
  const [cor, setCor] = useState("")
  let totalStats = 0
  
  useEffect(() => {
    setPokemonShow([])
    setCor(getColorCard(pokemonShow[0]?.data.types[0].type.name))

  }, [])
  {
    for (let i of pokemons) {
      if (i.data.name === params.pokemonName) {
        pokemonShow.push(i)
      } else {
        for (let j of pokedex) {
          if (j.data.name === params.pokemonName) {
            pokemonShow.push(j)
          }
        }
      }

    }
  }
  console.log(cor)
  console.log(pokemonShow)

  return (
    <>
      <Header />

      <ContainerDetails>
        <text className='textDetailsOverall'>Detalhes</text>
        <div className='Container' cor={cor}>
          <div className='Div1'>
            <div className='img'>
              <img className='imgPokemon' src={pokemonShow[0].data.sprites.other["official-artwork"].front_default}></img>
            </div>
            <div className='img'>
              <img className='imgPokemon' src={pokemonShow[0].data.sprites.back_shiny}></img>
            </div>
          </div>
          <div className='Div2'>
            {/* <div> */}
              <text className='textBaseStats'>Base stats</text>
              <div className='infoStats'>
                {pokemonShow[0]?.data.stats?.map((stat) => {
                  {totalStats+= stat.base_stat}
                  return (
                    <text className='textStats'>
                      {`${stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}${" "}`} 
                      <text className='textValue'>{`${" "} ${stat.base_stat} `}</text>
                      <Progress 
                      className='Progress' 
                      marginLeft={'70px'} 
                      borderRadius='4px'
                      outline='none' 
                      w='150px' 
                      colorScheme={stat.base_stat < 50 ? "orange" : stat.base_stat < 80 ? "yellow" : "green"} 
                      size='md' 
                      value={stat.base_stat}  
                      spacing='10px'>

                      </Progress>
                    </text>
                  )
                })}

                <text className='textTotal'>Total<text className='valueTotal'>{totalStats}</text></text>
                

              {/* </div> */}
            </div>
          </div>
          <div className='Div3'>
            <div className='Details'>
              <p className='idText'>#0{pokemonShow[0].data.id}</p>
              <p className='idName'>{pokemonShow[0].data.name.charAt(0).toUpperCase() + pokemonShow[0].data.name.slice(1)}</p>
              <div className='Types'>
                <Image src={getTypesPokemon(pokemonShow[0].data.types[0].type.name)}></Image>
                <Image src={getTypesPokemon(pokemonShow[0].data.types[1]?.type.name)}></Image>
              </div>
            </div>
            <div className='Moves'>
              <text>Moves:</text>
              {pokemonShow[0]?.data.moves?.filter((move, index) => index < 4).map((move) => {
                return (
                  //   <WrapItem>
                  // <Center w='292px' h='292px' bg='blue.200'>
                  <label>{move.move.name.charAt(0).toUpperCase() + move.move.name.slice(1)}</label>
                  // </Center>
                  // </WrapItem>
                )
              })}
            </div>
          </div>
          <div className='Div4'>
            <img className='imgPokemonBig' src={pokemonShow[0].data.sprites.other["official-artwork"].front_default}></img>

          </div>
        </div>
      </ContainerDetails>

    </>
  )
}

export default PageDetails