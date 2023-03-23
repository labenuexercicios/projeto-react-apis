import React, { useContext, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { goToDetalhes } from '../routes/coordinator'
import { TypeReturnContext } from '../contexts/TypeReturnContext'
import { PokedexContext } from '../contexts/PokedexContext'
import { PokemonContext } from '../contexts/PokemonContext'
import { AnimateContext } from '../contexts/AnimateCoxtext'
import { ColorContext } from '../contexts/ColorContext'
import {
  Text,
  Flex,
  Button,
  Image,
  useDisclosure,
  useColorMode
} from '@chakra-ui/react'
import AlertCapturar from './modal/AlertCapturar'
import AlertExcluir from './modal/AlertExcluir'
import wing from '../assets/pngwing1.png'
import useNameSize from '../hooks/useNameSize'
import mouseDetalhes from '../../src/assets/mouseDetalhes.gif'
import mouseDetalhesActive from '../../src/assets/mouseDetalhesActive.gif'
import mousePointer from '../../src/assets/mousePointer.png'
import mouseGrab from '../../src/assets/mouseGrab.png'

const Cards = ({ pokemon, cardColor, select, setSelectAnimate }) => {
  const { goToDetalhesAnimatePokedex } = useContext(AnimateContext)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isPokedex = location.pathname === '/pokedex'
  const { colorMode } = useColorMode()
  const { getColorsType } = useContext(ColorContext)
  const navigate = useNavigate()
  const { name, id, capture_rate } = pokemon
  const { getTypes } = useContext(TypeReturnContext)

  const { addToPokedex, removeFromPokedex } = useContext(PokedexContext)
  const { pokemons, removeFromPokemon, addToPokemon, calculateCatchChance } =
    useContext(PokemonContext)

  const pokemonHome = pokemons.find(p => p.name === name)

  const catchChance = calculateCatchChance(capture_rate)
  const isCaptured = Math.random() * 100 <= catchChance

  const { isOpen, onOpen, onClose } = useDisclosure()

  const [showSecondModalCapturar, setShowSecondModalCapturar] = useState(false)
  const [showSecondModalCapturarFail, setShowSecondModalCapturarFail] =
    useState(false)

  const addToPokedexRemoveFromPokemon = () => {    
    onOpen()
    setTimeout(() => {
      onClose()
      if (isCaptured) {
        setShowSecondModalCapturar(true)
        setTimeout(() => {
          setShowSecondModalCapturar(false)
          addToPokedex(pokemon, id)    
          removeFromPokemon(id)
        }, 1000)
      } else {
        setShowSecondModalCapturarFail(true)
        setTimeout(() => {
          setShowSecondModalCapturarFail(false)
        }, 1000)
      }
    }, 2000)
  }

  const [showSecondModalExcluir, setShowSecondModalExcluir] = useState(false)

  const removeFromPokedexAddToPokemon = () => {
    onOpen()
    setTimeout(() => {
      onClose()
      setShowSecondModalExcluir(true)
      setTimeout(() => {
        setShowSecondModalExcluir(false)
        addToPokemon(pokemon)
        removeFromPokedex(id)
      }, 1000)
    }, 2000)
  }

  const iconUrl = pokemon.sprites.versions['generation-vii'].icons.front_default

  const buttonAddOrRemove = () => {
    if (pokemonHome) {
      return (
        <Button
          bg='white'
          w='9.125em'
          h='2.375em'
          zIndex='dropdown'
          color='black'
          fontFamily='poppins'
          fontWeight='400'
          right='.5em'
          top='-.5em'
          cursor={`url(${iconUrl}), auto`}
          _active={{ cursor: `url(${mouseGrab}), auto` }}
          _hover={{
            bg: `${colorMode === 'light' ? '#FAC705' : '#C29905'}`,
            boxShadow: 'md',
            color: 'white',
            fontWeight: 'bold'
          }}
          onClick={addToPokedexRemoveFromPokemon}
        >
          Capturar!
          <AlertCapturar
            name={name}
            imageForAlertCapturar={imageForAlertCapturar}
            cardColor={cardColor}
            capture_rate={capture_rate}
            catchChance={catchChance}
            isOpen={isOpen}
            onClose={onClose}
            showSecondModalCapturar={showSecondModalCapturar}
            setShowSecondModalCapturar={setShowSecondModalCapturar}
            showSecondModalCapturarFail={showSecondModalCapturarFail}
            setShowSecondModalCapturarFail={setShowSecondModalCapturarFail}
          />
        </Button>
      )
    } else {
      return (
        <Button
          w='9.125em'
          h='2.375em'
          bg='#FF6262'
          zIndex='dropdown'
          color='white'
          fontFamily='poppins'
          fontWeight='400'
          right='.5em'
          top='-.5em'
          cursor={`url(${iconUrl}), auto`}
          _active={{ cursor: `url(${mousePointer}), auto` }}
          _hover={{ boxShadow: 'md', fontWeight: '600', bg: '#ce424e' }}
          onClick={removeFromPokedexAddToPokemon}
        >
          Excluir
          <AlertExcluir
            name={name}
            imageForAlertExcluir={imageForAlertExcluir}
            cardColor={cardColor}
            isOpen={isOpen}
            onClose={onClose}
            showSecondModalExcluir={showSecondModalExcluir}
            setShowSecondModalExcluir={setShowSecondModalExcluir}
          />
        </Button>
      )
    }
  }

  const types = pokemon.types
  const imageSrc = pokemon.sprites.other['official-artwork'].front_default

  const imageForAlertCapturar =
    pokemon.sprites.versions['generation-iv']['heartgold-soulsilver']
      .front_default ||
    pokemon.sprites.versions['generation-v']['black-white'].front_default

  const imageForAlertExcluir =
    pokemon.sprites.versions['generation-iv']['heartgold-soulsilver']
      .back_default ||
    pokemon.sprites.versions['generation-v']['black-white'].back_default

  return (
    <Flex
      position='relative'
      boxShadow='md'
      _hover={{ boxShadow: 'lg' }}
      borderRadius='xl'
    >
      <Flex
        bg={cardColor}
        w='440px'
        h='210px'
        borderRadius='xl'
        pt='1.5em'
        pl='1.375em'
        pr='1.375em'
        pb='.5em'
        color={colorMode === 'light' ? 'light.white' : 'dark.button'}
        direction='column'
        justify='space-between'
        alignSelf='flex-end'
      >
        <Flex direction='column'>
          <Text fontFamily='inter' fontWeight='700' fontSize='16px'>
            #{id < 10 ? `0${id}` : id}
          </Text>
          <Text
            fontFamily='inter'
            fontWeight='700'
            fontSize={useNameSize(
              name.length,
              name.charAt(0),
              '32px',
              '30px',
              '26px',
              '22px',
              '22px',
              '27px'
            )}
            textTransform='capitalize'
            mt='-.2em'
          >
            {name}
          </Text>
        </Flex>
        <Flex gap='.5em' mt='-2em'>
          {types.map(type => {
            return (
              <Flex
                borderRadius='8px'
                border='1px dashed'
                borderColor={
                  colorMode === 'light' ? 'light.white' : 'dark.button'
                }
                p='10px'
                align='center'
                justify='center'
                maxWidth='fit-content'
                w='107px'
                gap='0.7em'
                h='31px'
                bg={getColorsType(type.type.name)}
                key={type.type.name}
              >
                <Image
                  zIndex='docked'
                  src={getTypes(type.type.name)}
                  alt={type.type.name}
                />

                <Text
                  fontFamily='poppins'
                  fontSize='14'
                  fontWeight='400'
                  textTransform='capitalize'
                  color={colorMode === 'light' ? 'light.white' : 'dark.button'}
                >
                  {type.type.name}
                </Text>
              </Flex>
            )
          })}
        </Flex>
        <Flex align='center' justify='space-between'>
          <Text
            onClick={() => {
              setSelectAnimate(true)
              select()
              goToDetalhesAnimatePokedex(isHome, isPokedex, () =>
                goToDetalhes(navigate, name)
              )
              window.scrollTo(0, 0)
            }}
            fontFamily='poppins'
            fontWeight='700'
            fontSize='16px'
            textDecoration='underline'
            cursor={`url(${mouseDetalhes}), auto`}
            _active={{ cursor: `url(${mouseDetalhesActive}), auto` }}
            _hover={{ color: getColorsType(types[0].type.name) }}
          >
            Detalhes
          </Text>
          {buttonAddOrRemove()}
        </Flex>
      </Flex>

      <Image
        src={imageSrc}
        alt={name}
        maxW='12em'
        position='absolute'
        right='2'
        bottom='4em'
        zIndex='docked'
      />
      <Image src={wing} position='absolute' right='0' />
    </Flex>
  )
}

export default Cards
