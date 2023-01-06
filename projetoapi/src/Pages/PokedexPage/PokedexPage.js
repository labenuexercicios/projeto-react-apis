
import React, { useContext } from 'react'
import Header from '../../Components/Header/Header';
import { GlobalContext } from '../../Components/contexts/GlobalContext';
import PokemonCard from '../../Components/PokemonCard/PokemonCard';
import { Container, ContainerCard } from "./Style";


export const PokedexPage = () => {

  const context = useContext(GlobalContext)
  const { pokedex,removeFromPokedex } = context

  return (
    <>
      <Header />
      <Container>
      <ContainerCard>
        {pokedex.map((pokemon) => {
          return (
            <PokemonCard key={pokemon.id}
            pokemonUrl={`${"https://pokeapi.co/api/v2/pokemon"}/${pokemon.id}`}
            removeFromPokedex = {removeFromPokedex}
            
            />
          )
        })}
      </ContainerCard>
      </Container>
    </>
  )
}
