import React from 'react'
import { Container, ContainerImagens, ContainerNameMoves, ContainerStats } from './styled'
import { useContext } from 'react'
import { PokeContext } from '../Context/Pokedex'
const CardDetails = () => {


    const contextPokemomDetails = useContext(PokeContext)
    const { pokemonDetails, setPokemonDetais } = contextPokemomDetails



    return (
        <Container bgColor='#729F92'>
            <img src={pokemonDetails.image} alt="nome do pokemon" />
            <ContainerImagens>
                <div>
                    <img src={pokemonDetails.front_default} alt="front" />
                </div>
                <div>
                    <img src={pokemonDetails.back_default} alt="costas" />
                </div>
            </ContainerImagens>
            <ContainerStats>
                <ul>
                    <li>bases</li>
                    {pokemonDetails.stats.map((status, index) => (
                        <li key={index} >{status.stat.name}</li>
                    ))}
                </ul>
            </ContainerStats>
            <ContainerNameMoves>
                <div>
                    <p>{pokemonDetails.id}</p>
                    <p>{pokemonDetails.name}</p>
                    <ul>
                        {pokemonDetails.tipo.map((tipo, index) => (
                            < li key={index} > {tipo.type.name}</li>
                        ))}
                    </ul>
                </div>
                <ul>
                    {pokemonDetails.moves.map((move, index) => {
                        return <li key={index}></li>
                    })}
                </ul>
            </ContainerNameMoves>
        </Container>
    )
}

export default CardDetails
