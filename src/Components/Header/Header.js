import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { goToHomePage, goToPokedex } from '../../router/coordinates'
import Pokemon from "../../assets/images/pokemon.png"
import Pokedex from '../../assets/images/pokedex.svg'
import Excluir from "../../assets/images/excluir.svg"
import { Container, Image, Button, Button2 } from './HeaderStyle'

const Header = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const params = useParams()

  const threeHeaders = () => {
    switch (location.pathname) {
      case "/":
        return (
          <>
            <Button onClick={() => goToPokedex(navigate)}><img src={Pokedex}></img></Button>
            <Image src={Pokemon}></Image>
          </>

        )
      case "/pokedex":
        return (
          <>
            <Button2 onClick={() => goToHomePage(navigate)}>Todos Pokémons</Button2>
            <Image src={Pokemon}></Image>
          </>

        )
      case `/details/${params.bananinha}`:
        return (
          <>
            <Button2 onClick={() => goToHomePage(navigate)}>Todos Pokémons</Button2>
            <Image src={Pokemon}></Image>
            <Button><img src={Excluir}></img></Button>
          </>

        )
      default:
        return (
          <Button onClick={() => goToHomePage(navigate)}>Página Inicial</Button>
        )
    }
  }

  return (

    <Container>
      {threeHeaders()}

    </Container>

  )
}

export default Header