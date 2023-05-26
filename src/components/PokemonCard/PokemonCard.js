import { Button, Container } from '@chakra-ui/react'
import React, { useEffect, useState, useContext } from 'react'
import { InfoCard, ImageButton, TypeCard } from './PokemonCard.styled'
import axios from 'axios'
import pokebolaBackground from '../../assets/pokebolaFundoCard.png'
import { typesPokemon } from '../../constants/typesPokemon'
import { GlobalContext } from '../../contexts/GlobalContext'
import { useLocation, useNavigate } from 'react-router-dom'
import { goToDetailsPage } from '../../Router/coordinator'

export const PokemonCard = (props) => {
  const { pokemon, pokedex } = props

  const context = useContext(GlobalContext)
  const location = useLocation()
  const navigate = useNavigate()

  const { addPokedex, removePokedex, setFlow, setIsOpen, setIsOpenDel } = context

  const [cardPokemon, setCardPokemon] = useState({})
  const [typeApi, setTypeApi] = useState({})

  useEffect(() => {
    const poke = JSON.parse(localStorage.getItem("pokemons"));
    if (poke !== null) {
      return
    } else {
      getPokemonByName()
    }

  }, []);


  const getPokemonByName = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      setCardPokemon(response.data)
      setTypeApi(response.data.types[0].type.name)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPokemonByName()
  }, [])

  const capitalizeFistLetter = (string) => {
    return string && string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      {
        location.pathname === '/' &&
        <Container
          borderRadius='12px'
          width='440px'
          height='210px'
          display='flex'
          justifyContent='space-between'
          bg={typeApi && typesPokemon[typeApi]?.color}
          backgroundImage={pokebolaBackground}
          backgroundRepeat='no-repeat'
          backgroundPosition='180px'
        >
          <InfoCard>
            {
              cardPokemon.id < 10 ?
                <h3>#0{cardPokemon.id}</h3> :
                <h3>#{cardPokemon.id}</h3>
            }
            <h2>{capitalizeFistLetter(cardPokemon.name)}</h2>
            <TypeCard>
              {cardPokemon.types?.map((typePokemon) => {
                return <img src={typesPokemon[typePokemon.type.name].image} alt='img' />
              })}
            </TypeCard>
            <Button
              position='absolute'
              bottom='5px'
              fontFamily="'Poppins', sans-serif"
              fontSize='16px'
              fontWeight='700'
              textDecoration='underline'
              padding='0px'
              margin='0px'
              backgroundColor='transparent'
              onClick={() => {
                goToDetailsPage(navigate, cardPokemon.name)
                setFlow(2)
              }}
            >Detalhes</Button>
          </InfoCard>
          <ImageButton>
            <img src={cardPokemon.sprites?.other["official-artwork"].front_default} alt='Imagem Pokémon' />
            <Button
              backgroundColor='#FFFFFF'
              color='#0F0F0F'
              width='146px'
              height='38px'
              position='absolute'
              bottom='13px'
              borderRadius='8px'
              border='1px dashed rgba(255, 255, 255, 0.47)'
              onClick={() => {
                addPokedex(cardPokemon)
                setIsOpen(true)
              }}
            >Capturar!</Button>
          </ImageButton>
        </Container>
      }
      {
        location.pathname === '/pokedex' &&
        <Container
          borderRadius='12px'
          width='440px'
          height='210px'
          display='flex'
          justifyContent='space-between'
          bg={pokedex.types[0]?.type.name && typesPokemon[pokedex.types[0].type.name]?.color}
          backgroundImage={pokebolaBackground}
          backgroundRepeat='no-repeat'
          backgroundPosition='180px'
        >
          <InfoCard>
            <h3>#{pokedex.id}</h3>
            <h2>{capitalizeFistLetter(pokedex.name)}</h2>
            <TypeCard>
              {pokedex.types?.map((typePokemon) => {
                return <img key={typePokemon.id} src={typesPokemon[typePokemon.type.name].image} alt='img' />
              })}
            </TypeCard>
            <Button
              position='absolute'
              bottom='5px'
              fontFamily="'Poppins', sans-serif"
              fontSize='16px'
              fontWeight='700'
              textDecoration='underline'
              padding='0px'
              margin='0px'
              backgroundColor='transparent'
              onClick={() => {
                goToDetailsPage(navigate, pokedex.name)
                setFlow(1)
              }}
            >Detalhes</Button>
          </InfoCard>
          <ImageButton>
            <img src={pokedex.sprites?.other["official-artwork"].front_default} alt='Imagem Pokémon' />
            <Button
              backgroundColor='#FF6262'
              color='#0F0F0F'
              width='146px'
              height='38px'
              position='absolute'
              bottom='13px'
              borderRadius='8px'
              border='1px dashed rgba(255, 255, 255, 0.47)'
              onClick={() => {
                removePokedex(pokedex)
                setIsOpenDel(true)
              }}
            >Excluir!</Button>
          </ImageButton>
        </Container>
      }
    </>
  )
}