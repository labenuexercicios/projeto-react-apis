import React from 'react'
import { Header } from '../../Components/Header/Header'
import { Main } from './styled'
import { PokemonCard } from '../../Components/PokemonCard/PokemonCard'
import { BASE_URL } from "../../constants/url";
import { useContext } from "react";
import { GlobalContext } from '../../contexts/GlobalContext';

export function PokedexPage() {
    const context = useContext(GlobalContext)
    const { pokedex, removeFromPokedex } = context;

    return (
        <>
            <Header currentPage="pokedex" />
            <Main>
                {pokedex.map((pokemon) => (
                    <PokemonCard
                        key={pokemon.name}                    
                        pokemonUrl={`${BASE_URL}/${pokemon.name}`}
                        removeFromPokedex={removeFromPokedex}
                    />
                ))}
            </Main>
        </>
    )
}