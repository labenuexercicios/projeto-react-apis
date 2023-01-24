import React from 'react'
import { SectionPoke } from '../sectionPokemons/styled'
import { useContext } from 'react'
import { PokedexContext } from '../Context/Pokedex'
import Pokemos from '../pokemons'

const SectionPokedex = () => {

    const estadoPokemom = useContext(PokedexContext)
    const { pokedex, setPokedex } = estadoPokemom

    return (
        <SectionPoke>
            {pokedex.map((pokemon, index) => (
                <Pokemos
                    key={index} pk={pokemon} index={index}
                />
            ))}
        </SectionPoke>
    )
}

export default SectionPokedex
