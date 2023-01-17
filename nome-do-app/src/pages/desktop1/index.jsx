import React from 'react'
import Header from '../../components/header'
import Pokemos from '../../components/pokemons'
import { Body, Main } from './styled'

const Desktop1 = (props) => {
    return (
        <Body>
            <Header />
            <Main>
                {
                    props.listPokemons.map((pokemon, index) => (
                        <Pokemos key={index} pokemon={pokemon} />
                    ))
                }
            </Main>
        </Body>
    )
}

export default Desktop1
