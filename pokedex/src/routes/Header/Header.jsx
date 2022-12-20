import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../contexts/GlobalContext'
import {HeaderPage,
   ImgLogo, 
   ButtonPokedex, 
   ButtonHomePage,
   GridLogo,
   GridButtonPokedex,
   GridButtonHome
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
  const context = useContext(GlobalContext)
  const {pokedex, setPokedex, removeFromPokedex} = context
  const {isPokedex, isHomePage, isDetalhes} = props
  
  return (
    <>
    <HeaderPage>
      <GridButtonPokedex>{isPokedex && <ButtonPokedex onClick={goToHomePage}>Todos pokémons</ButtonPokedex>}</GridButtonPokedex>
      <GridLogo><ImgLogo src={Logo} alt="logo"/></GridLogo>
      <GridButtonHome>{isHomePage && <ButtonHomePage onClick={goToPokedex}>Pokédex</ButtonHomePage>}</GridButtonHome>
     {pokedex.map((pokemon)=>{
       return (<div className='buttonDetalhes'>{isDetalhes && pokedex && <ButtonHomePage key={pokemon.id} onClick={()=> removeFromPokedex(pokemon)}>{pokemon.name}</ButtonHomePage>}</div>)
     })} 
    </HeaderPage>
    </>
  )
}

export default Header