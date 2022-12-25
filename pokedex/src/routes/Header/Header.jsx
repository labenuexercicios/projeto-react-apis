import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../contexts/GlobalContext'
import {
  HeaderPage,
  ImgLogo,
  ButtonPokedex,
  ButtonHomePage,
  GridLogo,
  GridButtonPokedex,
  GridButtonHome,
  ButtonDetalhes,
  ButtonHomePage2,
} from './Header.styled'
import Logo from '../../assets/Logo.png'
import { useContext } from 'react'

const Header = (props) => {
  const navigate = useNavigate()
  const goToPokedex = () => {
    navigate("/pokedex")
  }
  const goToHomePage = () => {
    navigate("/")
  }
  const goToJogo = () => {
    navigate("/jogo")
  }
  const context = useContext(GlobalContext)
  const { pokedex, setPokedex, flow, setFlow, addToPokedex } = context
  const { isPokedex, isHomePage, isDetalhes, details } = props
  
  return (
    <>
      <HeaderPage>
        <GridButtonPokedex>
          {isHomePage && <h1 className='pageJogo' onClick={goToJogo}>🎮</h1>}
          {isPokedex && <ButtonPokedex onClick={goToHomePage}><span>{"<"}</span>Todos pokémons</ButtonPokedex>}
          {isDetalhes && <ButtonPokedex onClick={goToHomePage}><span>{"<"}</span>Todos pokémons</ButtonPokedex>}
        </GridButtonPokedex>
        <GridLogo><ImgLogo src={Logo} alt="logo" /></GridLogo>
        <GridButtonHome>{isHomePage && <ButtonHomePage onClick={goToPokedex}>Pokédex</ButtonHomePage>}
       {isDetalhes && flow === 1 && <ButtonDetalhes onClick={() => {
            const arrayPoke = pokedex.filter((card) =>
              card.name !== details.name
            )
            setPokedex(arrayPoke)
            const pokedexString = JSON.stringify(arrayPoke)
            window.localStorage.setItem("pokemon", pokedexString)
            setFlow(2)
          }}>Excluir da Pokédex</ButtonDetalhes>}
       {isDetalhes && flow === 2 && <ButtonHomePage2 onClick={()=>addToPokedex(details)}>Capturar</ButtonHomePage2>}
          </GridButtonHome>
      </HeaderPage>
    </>
  )
}

export default Header