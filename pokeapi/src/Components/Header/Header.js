import React from 'react'
import Logo from './logo.png'
import { ButtonPokedex, ContainerHeader, LogoStyle } from './styledHeader'
import { useNavigate, useLocation } from 'react-router-dom'

export const Header = () =>{
    const navigate = useNavigate()
    const location = useLocation()

    const buttonLabel = location.pathname === '/list/pokedex' ? 'Home' : 'Pokédex'

    const handleClick = () => {
        if (location.pathname === '/list/pokedex') {
            navigate('/')
        } else {
            navigate('/list/pokedex')
        }
    }

    return(
        <ContainerHeader>
            <LogoStyle src={Logo}></LogoStyle>
            <ButtonPokedex onClick={handleClick}>{buttonLabel}</ButtonPokedex>
        </ContainerHeader>
    )
}