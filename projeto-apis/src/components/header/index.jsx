import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../image/logo.png"
import { ContainerHeader } from './styled'
export const Header = () => {
  return (
    <ContainerHeader>
      <img src={logo}/>
      <Link to={"/pokedex"}>
      Pokedex
      </Link>
      <p/>
      <Link to={"/"}>
      Todos os Pokemons
      </Link>
    </ContainerHeader>
  )
}
