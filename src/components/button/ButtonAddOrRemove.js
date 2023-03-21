import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { goToError } from '../../routes/coordinator'
import { PokedexContext } from '../../contexts/PokedexContext'
import { PokemonContext } from '../../contexts/PokemonContext'
import { ColorContext } from '../../contexts/ColorContext'
import { useDisclosure, Button, Text } from '@chakra-ui/react'
import AlertCapturar from '../modal/AlertCapturar'
import AlertExcluir from '../modal/AlertExcluir'
import mousePointer from '../../../src/assets/mousePointer.png'
import mouseGrab from '../../../src/assets/mouseGrab.png'

const ButtonAddOrRemove = () => {
  const { name } = useParams()
  const navigate = useNavigate()
  const { removeFromPokemon, addToPokemon, calculateCatchChance } =
    useContext(PokemonContext)

  const { addToPokedex, removeFromPokedex } = useContext(PokedexContext)
  const { getColors } = useContext(ColorContext)

  const [pokemons, setPokemons] = useState('')
  const [pokeId, setPokeId] = useState('')
  const [pokemonPokedex, setPokemonPokedex] = useState(false)

  const [iconUrl, setIconUrl] = useState('')
  const [imageForAlertCapturar, setImageForAlertCapturar] = useState('')
  const [imageForAlertExcluir, setImageForAlertExcluir] = useState('')
  const [cardColor, setCardColor] = useState('')
  const [captureRate, setCaptureRate] = useState('')
  const [catchChance, setCatchChance] = useState('')
  const [isCaptured, setIsCaptured] = useState('')

  useEffect(() => {
    searchPoke()
  }, [])

  const searchPoke = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}/`
      )
      const speciesResponse = await axios.get(response.data.species.url)
      const species = await speciesResponse.data
      const updatedData = {
        ...response.data,
        capture_rate: species.capture_rate
      }
      setPokemons(updatedData)
      setPokeId(response.data.id)
      setIconUrl(
        response.data.sprites.versions['generation-vii'].icons.front_default
      )
      setImageForAlertCapturar(
        response.data.sprites.versions['generation-iv']['heartgold-soulsilver']
          .front_default ||
          response.data.sprites.versions['generation-v']['black-white']
            .front_default
      )
      setImageForAlertExcluir(
        response.data.sprites.versions['generation-iv']['heartgold-soulsilver']
          .back_default ||
          response.data.sprites.versions['generation-v']['black-white']
            .back_default
      )

      setCardColor(getColors(response.data.types[0].type.name))
      const capture_rate = updatedData.capture_rate
      const catchChance = calculateCatchChance(capture_rate)
      const isCaptured = Math.random() * 100 <= catchChance
      setCaptureRate(capture_rate)
      setCatchChance(catchChance)
      setIsCaptured(isCaptured)

      const savedPokedex = localStorage.getItem('pokedex')
      if (savedPokedex) {
        const pokedex = JSON.parse(savedPokedex)
        const filteredData = pokedex.filter(p => p.name === response.data.name)
        if (
          filteredData.length > 0 &&
          filteredData[0].name === response.data.name
        ) {
          setPokemonPokedex(true)
        }
      }
    } catch (error) {
      goToError(navigate)
    }
  }

  const { isOpen, onOpen, onClose } = useDisclosure()

  const [showSecondModalCapturar, setShowSecondModalCapturar] = useState(false)
  const [showSecondModalCapturarFail, setShowSecondModalCapturarFail] =
    useState(false)
  const [showSecondModalExcluir, setShowSecondModalExcluir] = useState(false)

  const addToPokedexRemoveFromPokemon = () => {
    onOpen()
    setTimeout(() => {
      onClose()
      if (isCaptured) {
        setShowSecondModalCapturar(true)
        setTimeout(() => {
          setShowSecondModalCapturar(false)
          addToPokedex(pokemons, pokeId)
          removeFromPokemon(pokeId)
          setPokemonPokedex(true)
        }, 1000)
      } else {
        setShowSecondModalCapturarFail(true)
        setTimeout(() => {
          setShowSecondModalCapturarFail(false)
        }, 1000)
      }
    }, 2000)
  }

  const removeFromPokedexAddToPokemon = () => {
    onOpen()
    setTimeout(() => {
      onClose()
      setShowSecondModalExcluir(true)
      setTimeout(() => {
        setShowSecondModalExcluir(false)
        addToPokemon(pokemons)
        removeFromPokedex(pokeId)
        setPokemonPokedex(false)
      }, 1000)
    }, 2000)
  }

  return (
    <>
      {pokemonPokedex === true ? (
        <Button
          color='white'
          bg='#FF6262'
          _hover={{
            bg: '#ce424e',
            fontWeight: 'bold'
          }}
          size='lg'
          w={{ base: '12.5em', md: '6em', lg: '12.5em' }}
          h='3em'
          fontWeight='normal'
          fontSize='18px'
          fontFamily='poppins'
          onClick={removeFromPokedexAddToPokemon}
          cursor={`url(${iconUrl}), auto`}
          _active={{ cursor: `url(${mousePointer}), auto` }}
        >
          <Text
            display={{ base: 'block', md: 'none', lg: 'block' }}
            cursor={`url(${iconUrl}), auto`}
            _active={{ cursor: `url(${mousePointer}), auto` }}
          >
            Excluir da Pokédex
          </Text>
          <Text
            display={{ base: 'none', md: 'block', lg: 'none' }}
            cursor={`url(${iconUrl}), auto`}
            _active={{ cursor: `url(${mousePointer}), auto` }}
          >
            Excluir
          </Text>
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
      ) : (
        <Button
          color='#C29905'
          bg='#FAC705'
          _hover={{
            color: 'white',
            bg: '#C29905',
            fontWeight: 'bold'
          }}
          size='lg'
          w={{ base: '12.5em', md: '6em', lg: '12.5em' }}
          h='3em'
          fontWeight='normal'
          fontSize='18px'
          fontFamily='poppins'
          onClick={addToPokedexRemoveFromPokemon}
          textTransform='capitalize'
          cursor={`url(${iconUrl}), auto`}
          _active={{ cursor: `url(${mouseGrab}), auto` }}
        >
          {name.length > 15 ? (
            <Text
              display={{ base: 'block', md: 'none', lg: 'block' }}
              cursor={`url(${iconUrl}), auto`}
              _active={{ cursor: `url(${mouseGrab}), auto` }}
            >
              Capturar
            </Text>
          ) : name.length > 10 ? (
            <Text
              display={{ base: 'block', md: 'none', lg: 'block' }}
              fontSize='15px'
              cursor={`url(${iconUrl}), auto`}
              _active={{ cursor: `url(${mouseGrab}), auto` }}
            >
              Capturar {name}
            </Text>
          ) : (
            <Text
              display={{ base: 'block', md: 'none', lg: 'block' }}
              cursor={`url(${iconUrl}), auto`}
              _active={{ cursor: `url(${mouseGrab}), auto` }}
            >
              Capturar {name}
            </Text>
          )}
          <Text
            display={{ base: 'none', md: 'block', lg: 'none' }}
            cursor={`url(${iconUrl}), auto`}
            _active={{ cursor: `url(${mouseGrab}), auto` }}
          >
            Capturar
          </Text>
          <AlertCapturar
            name={name}
            capture_rate={captureRate}
            catchChance={catchChance}
            imageForAlertCapturar={imageForAlertCapturar}
            cardColor={cardColor}
            isOpen={isOpen}
            onClose={onClose}
            showSecondModalCapturar={showSecondModalCapturar}
            setShowSecondModalCapturar={setShowSecondModalCapturar}
            showSecondModalCapturarFail={showSecondModalCapturarFail}
            setShowSecondModalCapturarFail={setShowSecondModalCapturarFail}
          />
        </Button>
      )}
    </>
  )
}
export default ButtonAddOrRemove
