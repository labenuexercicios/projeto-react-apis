import React, { useContext } from 'react'
import { PokedexContext, PokemonsContext } from '../Context/Pokedex'
import Pokemons from "../pokemons/index"
import { SectionPoke } from './styled'


const SectionPokemons = () => {
    const estadoPokemon = useContext(PokemonsContext)
    const estadoPokedex = useContext(PokedexContext)

    const { pokemons, setPokemons } = estadoPokemon
    const { pokedex, setPokedex } = estadoPokedex
    return (
        <SectionPoke>
            {pokemons.map((pokemon, index) => (
                <Pokemons
                    key={index} pk={pokemon} index={index}
                />
            ))
            }
        </SectionPoke>
    )
}

export default SectionPokemons
