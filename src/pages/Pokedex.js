import React, { useContext } from 'react'
import Header from '../components/header/Header'
import { Box, Grid, Heading } from '@chakra-ui/react'
import {Card} from '../components/card/Card'
import { GlobalContext } from '../context/GlobalContext'
import { getColors } from '../utils/ReturnCardColor'
import { AddModal } from '../components/modal/AddModal'
import { useDisclosure } from '@chakra-ui/react'

export default function Pokedex() {

  const {pokedex, removePokemon, addPokemon} = useContext(GlobalContext)
 
  const {isOpen, onOpen, onClose} = useDisclosure()
  return (
    <>
      <Header/>
      <Box minH={"62.5rem"} bg='#5E5E5E' w="100%">
      <Heading m='2.25rem' pt='0.3rem' color="white">Meus Pokémons</Heading>
      <Grid templateColumns='repeat(3, 1fr)' gap={"0.6rem"}>
        {pokedex.map((pokemon)=>{
          return(
            <Card
            key={pokemon.data.id}
            pokemon={pokemon}
            image={pokemon.data.sprites.other["official-artwork"].front_default}
            name={pokemon.data.name}
            id={pokemon.data.id}
            types={pokemon.data.types[0].type.name}
            cardColor={getColors(pokemon.data.types[0].type.name)}
            addPokemon={addPokemon}
            removePokemon={removePokemon}
            pokedex={pokedex}
          />
          )
         
        })}
      </Grid>
      <AddModal onClose={onClose} isOpen={isOpen}/>
      </Box>
    </>
  )
}
