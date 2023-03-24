import React, { useContext, useEffect } from 'react'
import { DetailCard } from '../../components/detailCard'
import { Context } from '../../context/createContext'
import { DetailContainer } from './style'

export const DetailsPokemon = () => {
  const {details, setButtonAllPokemons, setButtonPokedex, setButtonHeaderDetail, pokemons} = useContext(Context)

  const detail = details !== undefined && details

  const isPokemonInArray = pokemons.includes(detail);

  useEffect(() => {
    setButtonHeaderDetail(isPokemonInArray);
  }, [isPokemonInArray, setButtonHeaderDetail]);

  const buttonsHeader = () => {
    setButtonAllPokemons(true)
    setButtonPokedex(false)
  }

  useEffect(() => {
    buttonsHeader()
  }, [])


  return (
    <DetailContainer>
      <DetailCard details={details} />
    </DetailContainer>
  )
}
