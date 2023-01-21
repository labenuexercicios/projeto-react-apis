import React from 'react'
import Header from '../../components/header'
import Pokemos from '../../components/pokemons'
import { Body, Main, SectionPokemons } from './styled'

const Desktop1 = (props) => {
    return (
        <Body>
            <Header />
            <Main>
                <div>
                    <h1>todos os pokemons</h1>
                </div>
                <SectionPokemons>
                    {
                        props.pokemons.map((pokemon, index) => (
                            <Pokemos key={index} pk={pokemon} index={index}
                                pokemons={props.pokemons} setPokemons={props.setPokemons} />
                        ))
                    }
                </SectionPokemons>
            </Main>
        </Body>
    )
}

export default Desktop1
