import React from 'react'
import { Header } from '../../Components/Header/Header'
import { Main, Local, Text } from './styled'
import { PokemonCard } from '../../Components/PokemonCard/PokemonCard'
import { GlobalContext } from '../../contexts/GlobalContext'
import { useContext } from 'react'

export function PokemonsListPage() {
  const context = useContext(GlobalContext)
  const { pokelist, addToPokedex, pokedex } = context;
  
  // não mostrar pokemons que estão na pokedex
  const filteredPokelist = () =>
    pokelist.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );
  
    return(
        <>
            <Header currentPage="list"/>
            <Local>
                  <Text>Todos Pokémons</Text>
            </Local>
            <Main>
                {filteredPokelist().map((pokemon)=>{
                  return <PokemonCard 
                          key={pokemon.url} pokemonUrl={pokemon.url} 
                          addToPokedex={addToPokedex}/>
                })}            
            </Main>
        </>
    )
}