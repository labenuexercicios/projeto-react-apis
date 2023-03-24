import React, { useContext, useEffect } from 'react'
import { PokemonsPokedex } from '../../components/cardPokemonsPokedex'
import { Context } from '../../context/createContext'
import { PokedexContainer, Title } from './style'

export const Pokedex = () => {
  const { pokemons, setButtonAllPokemons, setButtonPokedex, setButtonHeaderDetail } = useContext(Context)

  const buttonsHeader = () => {
    setButtonAllPokemons(true)
    setButtonPokedex(false)
    setButtonHeaderDetail()
  }

  useEffect(() => {
    buttonsHeader()
  }, [])

  if (pokemons.length === 0) {
    return (
      <PokedexContainer>
        <Title />
      </PokedexContainer>
    )
  }

  return (
    <PokedexContainer>
      <div className='ContainerPokedex'>
        {pokemons.map(pokemon => {
          return (
            <PokemonsPokedex pokemon={pokemon} />
          )
        })}
      </div>
    </PokedexContainer>
  )
}
