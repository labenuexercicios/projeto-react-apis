import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import CardPokemon from '../cardPokemon'

const SectionPokedex = () => {
    const context = useContext(GlobalContext)
    const { pokedex } = context
    return (
        <>
            {pokedex.map((pokemon, index) => (
                <CardPokemon key={index} pokemon={pokemon} />
            ))}
        </>
    )
}

export default SectionPokedex
