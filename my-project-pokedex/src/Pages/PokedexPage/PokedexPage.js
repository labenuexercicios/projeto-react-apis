import React, { useContext, useEffect } from 'react'
import { Header } from '../../components/Header/Header'
import { GlobalContext } from '../../contexts/GlobalContext'
import { ContainerPokedex, PokedexMain } from './PokedexPage.styles'
import { PokemonCard } from '../../components/PokemonCard/PokemonCard'
import { Flex, Image } from '@chakra-ui/react'
import pokebola from '../../assets/pokebola-go.png'


export const PokedexPage = () => {

  const context = useContext(GlobalContext)
  const { setPokedex, pokedex, openContact } = context

  useEffect(() => {
    const pokemonPokedex = localStorage.getItem('pokedex')
    const myPokedex = JSON.parse(pokemonPokedex)
    setPokedex(myPokedex)
  }, [])

  return (
    <>
      <Header pokedex={pokedex} />
      <ContainerPokedex>
        <h1>Meus Pokémons</h1>
        <PokedexMain>
          {pokedex.map((pokedex) => {
            return (<PokemonCard key={pokedex.id} pokedex={pokedex}/>)
          })
          }
        </PokedexMain>
      </ContainerPokedex>
      <Flex
        position='fixed'
        height='100px'
        width='100px'
        bottom='2vh'
        right='8vw'
        >
        <Image src={pokebola} alt="Pokebola" onClick={()=>openContact()}/>
      </Flex>
    </>
  )
}