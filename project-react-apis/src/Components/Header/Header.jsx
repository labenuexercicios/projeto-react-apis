import React from 'react'
import { Container, ImgLogo, BtnPokedex, Link, Span, BtnDel} from './styled'
import Pokelogo from '../../assets/img/poke-logo.png'
import { useNavigate } from 'react-router-dom'
import { goToHome, goToPokedex } from '../../routes/coordinator'

export function Header({ currentPage }) {

    const navigate = useNavigate()

    return(
        <>
            <Container>
                    {currentPage === 'pokedex' && (
                        <Link onClick={()=>{goToHome(navigate)}}><Span>&#60;</Span> Todos os Pokemons</Link>
                    )}
                    {currentPage === 'details' && (
                        <Link onClick={()=>{goToHome(navigate)}}><Span>&#60;</Span> Todos os Pokemons </Link>
                    )}
                    
                    <ImgLogo src={Pokelogo} className={currentPage === 'pokedex' || currentPage === 'details' ? 'pokedex' : 'list'}></ImgLogo>

                    {currentPage === 'list' && (                  
                            <BtnPokedex onClick={()=>{goToPokedex(navigate)}}>Pokedex</BtnPokedex>
                    )}

                    {currentPage === 'details' && (                  
                            <BtnDel>Excluir da Pokedex</BtnDel>
                    )}
                    
            </Container>
        </>
    )
}