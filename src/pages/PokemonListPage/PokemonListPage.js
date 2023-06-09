import React, { useContext } from 'react'
import HeaderPokedex from "../../components/HeaderPokedex/HeaderPokedex"
import PokemonCard from '../../components/PokemonCard/pokemonCard';
import { GlobalContext } from '../../context/GlobalContext';
import { CardsContainer } from '../HomePage/style';

const PokedexPage = () => {

  const context = useContext(GlobalContext)
  const { pokedex } = context;

  return (
    <div>
      <HeaderPokedex />
      <CardsContainer>
        <h1 className='title'> Meus Pokémons </h1>

        {pokedex && pokedex.map((pokemon2) => {

          return <PokemonCard
            key={pokemon2.data.name}
            pokemon2={pokemon2} />
        })}
      </CardsContainer>
    </div>
  )
}

export default PokedexPage;