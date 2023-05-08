import React from 'react'
import { Container, ImgLogo, BtnPokedex, Link, Span, BtnAdd, BtnDel } from './styled'
import Pokelogo from '../../assets/img/poke-logo.png'
import { useNavigate } from 'react-router-dom'
import { goToHome, goToPokedex } from '../../routes/coordinator'
import { useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'

export function Header({ currentPage, pokemon, name }) {

    const navigate = useNavigate()
    const context = useContext(GlobalContext)
    const { addToPokedex, removeFromPokedex, pokedex } = context;
    const isPokemonInPokedex = pokedex.some((p) => p.name === name)

    return (
        <>
            <Container>
                {currentPage === 'pokedex' && (
                    <Link onClick={() => { goToHome(navigate) }}><Span >&#60;</Span> Todos os Pokemons</Link>
                )}
                {currentPage === 'details' && (
                    <Link onClick={() => { goToHome(navigate) }}><Span>&#60;</Span> Todos os Pokemons </Link>
                )}

                <ImgLogo src={Pokelogo} className={currentPage === 'pokedex' || currentPage === 'details' ? 'pokedex' : 'list'}></ImgLogo>

                {currentPage === 'list' && (
                    <BtnPokedex onClick={() => { goToPokedex(navigate) }}>Pokedex</BtnPokedex>
                )}

                {currentPage === "details" && (
                    <>
                        {isPokemonInPokedex ? (
                            <BtnDel onClick={() => removeFromPokedex(pokemon)}>Remover da Pokedex</BtnDel>
                        ) : (
                            <BtnAdd onClick={() => addToPokedex(pokemon)}>Adicionar a Pokedéx</BtnAdd>
                        )}
                    </>
                )}

            </Container>
        </>
    )
}