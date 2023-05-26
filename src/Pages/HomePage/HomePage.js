import { Flex, Image } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Header } from '../../components/Header/Header'
import { PokemonCard } from '../../components/PokemonCard/PokemonCard'
import { GlobalContext } from '../../contexts/GlobalContext'
import { ContainerHomePage, PokemonMain } from './HomePage.styles'
import pokebola from '../../assets/pokebola-go.png'

export const HomePage = () => {

  const context = useContext(GlobalContext)
  const { pokemons, pokedex, openContact} = context

  localStorage.setItem('pokedex', JSON.stringify(pokedex))
  console.log(pokedex)
  return (
    <>
      <Header />
      <ContainerHomePage>
        <h1>Todos Pokémons</h1>
        <PokemonMain>
          {pokemons
            .filter((pokemon) => {
              return !(pokedex.find((item) => item.name === pokemon.name))
            })
            .map((pokemon) => {
              return (<PokemonCard key={pokemon.name} pokemon={pokemon} />)
            })
          }
        </PokemonMain>
        <Flex
        position='fixed'
        height='100px'
        width='100px'
        bottom='2vh'
        right='8vw'
        >
        <Image src={pokebola} alt="Pokebola" onClick={()=>openContact()}/>
      </Flex>
      </ContainerHomePage>
    </>
  )
}