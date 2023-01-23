import React from 'react'
import Header from '../../components/header'
import SectionPokemons from '../../components/sectionPokemons'
import TxtMain from '../../components/txtMain'
import Desktop3 from '../desktop3'
import { Body, Main } from './styled'

const Desktop1 = ({ pokedex, pokemons, setPokedex, setPokemons, showCart, setShowCart }) => {




    return (
        <Body>
            <Header
                showCart={showCart} setShowCart={setShowCart}
            />
            <Main>
                <TxtMain />
                <SectionPokemons
                    pokemons={pokemons} pokedex={pokedex}
                    setPokedex={setPokedex} setPokemons={setPokemons}
                    showCart={showCart} setShowCart={setShowCart}

                />
            </Main>
        </Body>
    )
}

export default Desktop1
