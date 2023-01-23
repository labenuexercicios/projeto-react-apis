import React from 'react'
import Pokemons from "../pokemons/index"
import { SectionPoke } from './styled'

const SectionPokemons = (props) => {
    return (
        <SectionPoke>
            {props.showCart ? (
                <SectionPoke>
                    {
                        props.pokedex.map((pokemon, index) => (
                            <Pokemons key={index} pk={pokemon} index={index}
                                pokemons={props.pokemons} setPokemons={props.setPokemons}
                                pokedex={props.pokedex} setPokedex={props.setPokedex} showCart={props.showCart} setShowCart={props.setShowCart} />
                        ))
                    }
                </SectionPoke>
            ) : (
                <SectionPoke>
                    {
                        props.pokemons.map((pokemon, index) => (
                            <Pokemons key={index} pk={pokemon} index={index}
                                pokemons={props.pokemons} setPokemons={props.setPokemons}
                                pokedex={props.pokedex} setPokedex={props.setPokedex} showCart={props.showCart} setShowCart={props.setShowCart} />
                        ))
                    }
                </SectionPoke>
            )}
        </SectionPoke>
    )
}

export default SectionPokemons
