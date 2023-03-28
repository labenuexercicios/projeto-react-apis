import React, { useContext, useEffect } from 'react'
import { DetailCard } from '../../components/detailCard'
import { Context } from '../../context/createContext'
import { DetailContainer, Title } from './style'
import pokedex from '../../assets/pokedex.png'

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
      <Title>Detalhes</Title>
      <img className='PokedexDetail' src={pokedex} alt="" />
      <DetailCard details={details} />
    </DetailContainer>
  )
}