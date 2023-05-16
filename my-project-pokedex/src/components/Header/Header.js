import React, { useContext, useEffect, useState } from 'react'
import { ContainerHeader, AllPokemons, ImageLogo, LinkReturn, ButtonHeader } from './Header.styled'
import { Button } from '@chakra-ui/react'
import logoPokemon from '../../assets/logoPokemon.png'
import setaIcon from '../../assets/setaIcon.svg'
import { goToPokedexPage, goToHomePage } from '../../Router/coordinator'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { GlobalContext } from '../../contexts/GlobalContext'
import { ModalConfirm } from '../ModalConfirm/ModalConfirm'
import axios from 'axios'

export const Header = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const context = useContext(GlobalContext)
  const params = useParams()

  const [pokemonHeader, setPokemonHeader] = useState()

  useEffect(() => {
    getPokemonHeaderByName()
  }, [])

  const getPokemonHeaderByName = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
      setPokemonHeader(response.data)
    } catch (error) {
      console.log(error)
    }
  }


  console.log(params)

  const { pokemons, flow, removePokedex, addPokedex, isOpen, isOpenDel, pokedex } = context

  // console.log(pokemons)

  return (
    <>
      <ContainerHeader>
        {location.pathname === '/' &&
          <>
            <ImageLogo src={logoPokemon} alt='Logo Pokemon' onClick={() => goToHomePage(navigate)} />
            <ButtonHeader onClick={() => goToPokedexPage(navigate)}>Pokedex</ButtonHeader>
          </>}
        {location.pathname === '/pokedex' &&
          <>
            <AllPokemons>
              <img src={setaIcon} alt='Seta Icon' />
              <LinkReturn onClick={() => goToHomePage(navigate)}>Todos os Pokemóns</LinkReturn>
            </AllPokemons>
            <ImageLogo src={logoPokemon} alt='Logo Pokemon' onClick={() => goToHomePage(navigate)} />
          </>}
        {
          location.pathname === `/details/${params.name}` &&
          <>
            <ImageLogo src={logoPokemon} alt='Logo Pokemon' onClick={() => goToHomePage(navigate)} />
            {flow === 1 &&
              <Button
                bg="#FF6262"
                width='13vw'
                height='6.5vh'
                fontSize='16px'
                borderRadius='8px'
                fontFamily="'Poppins', sans-serif"
                fontWeight='400'
                lineHeight='24px'
                color='#FFFFFF'
                onClick={() => removePokedex(pokemonHeader)}
              >Excluir da Pokedex</Button>
            }
            {flow === 2 &&
              <Button
                bg="#33A4F5"
                width='13vw'
                height='6.5vh'
                fontSize='16px'
                borderRadius='8px'
                fontFamily="'Poppins', sans-serif"
                fontWeight='400'
                lineHeight='24px'
                color='#FFFFFF'
                onClick={() => addPokedex(pokemonHeader)}
              >Adicionar a Pokedex</Button>
            }
          </>
        }
      </ContainerHeader>
      {isOpen ? <ModalConfirm></ModalConfirm> : <></>}
      {isOpenDel ? <ModalConfirm></ModalConfirm> : <></>}
    </>
  )
}