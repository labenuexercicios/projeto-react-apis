import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext.js'
import Header from '../../Components/Header/Header.js'
import PokemonCard from "../../Components/PokemonCard/PokemonCard.js"
import BASE_URL from "../../dadosApiConstants/url.js"
import { Container, Title } from './PokedexPage.styled.js'
import {Flex} from "@chakra-ui/react"

function PokedexPage() {
  const context = useContext(GlobalContext)
  const { pokemonDex, removeFromPokedex } = context

  return (
    <div>
      <Header estaNaPokedexPage={true} />
      <Container>

        <Title>
          <div>Meus Pokemons</div>
        </Title>

        <Flex gap={"16px"} justifyContent={"center"} wrap={"wrap"} >

          {pokemonDex.map((pokemon) => (
            <PokemonCard
              key={pokemon.data?.name}
              url={`${BASE_URL}/${pokemon.data?.name}`}
              removeFromPokedex={removeFromPokedex}

            />
          ))}
        </Flex>

      </Container>


    </div >
  )
}

export default PokedexPage