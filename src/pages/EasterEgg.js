import { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHome } from '../routes/coordinator'
import { FaviconContext } from '../contexts/FaviconContext'
import { AnimateContext } from '../contexts/AnimateCoxtext'
import { PokedexContext } from '../contexts/PokedexContext'
import { PokemonContext } from '../contexts/PokemonContext'
import CardMemory from '../components/CardMemory'
import {
  Text,
  Flex,
  Box,
  useColorMode,
  Button,
  useDisclosure
} from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import defaultFavicon from '../assets/favicon.ico'
import mousePointerOK from '../../src/assets/mousePointerOK.png'
import mouseGrab from '../../src/assets/mouseGrab.png'
import PokedexButton from '../components/button/PokedexButton'
import AlertEasterEggComlplete from '../components/modal/AlertEasterEggComlplete'

const EasterEgg = () => {
  const { colorMode } = useColorMode()
  const navigate = useNavigate()
  const { updateFavicon } = useContext(FaviconContext)
  const { backToHome } = useContext(AnimateContext)
  const { pokemonAmount, pokedex } = useContext(PokedexContext)
  const { pokemonsCopytoDetahes } = useContext(PokemonContext)

  const backHome = () => {
    updateFavicon(defaultFavicon)
    backToHome(false, false, () => goToHome(navigate))
    goToHome(navigate)
  }

  useEffect(() => {
    if (pokemonAmount < 10) {
      backHome()
    }
  }, [pokemonAmount])

  const pokedexNames = pokedex.map(pokemon => pokemon.name)
  const maxItems = Math.min(
    10,
    pokemonsCopytoDetahes.filter(pokemon => pokedexNames.includes(pokemon.name))
      .length
  )
  const minItems = 3
  const randomItems = Math.round(
    Math.random() * (maxItems - minItems) + minItems
  )

  const pokemonsToCard = pokemonsCopytoDetahes
    .filter(pokemon => pokedexNames.includes(pokemon.name))
    .map(({ name, id, sprites }) => ({
      name,
      id,
      src: sprites.other['official-artwork'].front_default,
      matched: false
    }))
    .sort(() => Math.random() - 0.5)
    .slice(0, randomItems)

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)

  const shuffleCards = () => {
    const shuffledCards = [...pokemonsToCard, ...pokemonsToCard]
      .sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, id: Math.random() }))
    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
  }

  const handleChoice = card => {
    choiceOne && choiceOne !== card ? setChoiceTwo(card) : setChoiceOne(card)
  }

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.name === choiceTwo.name) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.name === choiceOne.name) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1000)
      }
    }
    if (cards.length > 0 && cards.every(card => card.matched)) {
      setTimeout(() => {
        onOpen()
      }, 500)
    }
  }, [choiceOne, choiceTwo, cards])

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }
  useEffect(() => {
    shuffleCards()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box
      minH='100vh'
      bg={colorMode === 'light' ? 'light.background' : 'dark.background'}
    >
      <AlertEasterEggComlplete
        isOpen={isOpen}
        onClose={onClose}
        shuffleCards={shuffleCards}
        backHome={backHome}
      />
      <Flex pt='1em' pl='2em' pr='1em' align='center' justify='space-between'>
        <Flex
          color={colorMode === 'light' ? 'light.white' : 'dark.pTitle'}
          onClick={backHome}
          _hover={{ bg: 'none', opacity: 1, textDecoration: 'underline' }}
          opacity={0.3}
          cursor={`url(${mousePointerOK}), auto`}
          _active={{ cursor: `url(${mouseGrab}), auto` }}
        >
          <ChevronLeftIcon
            boxSize={8}
            mt='0.5'
            cursor={`url(${mousePointerOK}), auto`}
            _active={{ cursor: `url(${mouseGrab}), auto` }}
          />
          <Text
            fontSize='24px'
            fontWeight='bold'
            fontFamily='poppins'
            cursor={`url(${mousePointerOK}), auto`}
            _active={{ cursor: `url(${mouseGrab}), auto` }}
          >
            Voltar pra Home!
          </Text>
        </Flex>
        <Flex align='center' justify='center'>
          <Text
            fontSize='16px'
            color={colorMode === 'light' ? 'light.white' : 'dark.pTitle'}
            fontFamily='poppins'
            fontWeight='bold'
          >
            Moves: {turns}
          </Text>
          <PokedexButton />
        </Flex>
      </Flex>

      <Flex
        align='center'
        direction='column'
        gap='0.5em'
        justify='center'
        fontWeight='bold'
        fontFamily='poppins'
        textAlign='center'
      >
        <Button
          color='#C29905'
          bg='#FAC705'
          _hover={{
            color: 'white',
            bg: '#C29905',
            fontWeight: 'bold'
          }}
          mt={{ base: '2em', lg: '-3em' }}
          mb='2em'
          onClick={shuffleCards}
        >
          Resetar
        </Button>
        <Text fontSize='42px' color='#FF6262'>
          {' '}
          Jogo de memória
        </Text>
        <Text
          fontSize='16px'
          mb='2em'
          color={colorMode === 'light' ? 'light.white' : 'dark.pTitle'}
        >
          Selecione as cartas, o objetivo é encontrar os mesmos Pokémons e
          formar pares.
        </Text>

        <Flex
          flexWrap='wrap'
          maxW='90vw'
          align='center'
          justify='center'
          gap={4}
        >
          {cards.map((card, index) => (
            <CardMemory
              key={index}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          ))}
        </Flex>
      </Flex>
    </Box>
  )
}
export default EasterEgg
