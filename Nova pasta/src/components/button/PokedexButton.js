import { useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { goToPokedex } from '../../routes/coordinator'
import { FaviconContext } from '../../contexts/FaviconContext'
import { PokedexContext } from '../../contexts/PokedexContext'
import { SearchContext } from '../../contexts/SearchContext'
import { AnimateContext } from '../../contexts/AnimateCoxtext'
import {
  Button,
  Text,
  Box,
  Tooltip,
  useBreakpointValue,
  useColorMode
} from '@chakra-ui/react'
import mousePointerOK from '../../../src/assets/mousePointerOK.png'
import mouseGrab from '../../../src/assets/mouseGrab.png'
import defaultFavicon from '../../../src/assets/favicon.ico'

const PokedexButton = () => {
  const location = useLocation()
  const isDetalhes = /^\/pokemon\/.+/.test(location.pathname)
  const isEasterEgg = location.pathname === '/easterEgg'
  const navigate = useNavigate()
  const { colorMode } = useColorMode()
  const { pokemonAmount, pokedexIcon } = useContext(PokedexContext)
  const { goPokedexAnimate } = useContext(AnimateContext)
  const { resetFilterByName, resetTypesSort, setCurrentPage } =
    useContext(SearchContext)
  const { updateFavicon } = useContext(FaviconContext)

  const label = isEasterEgg
    ? 'Voltar pra Pokedéx!'
    : pokemonAmount === 0
    ? 'Você não capturou nenhum pokémon!'
    : pokemonAmount === 1
    ? `Você só capturou ${pokemonAmount} pokémon!`
    : `Você capturou (${pokemonAmount}) pokémons!!`

  const color = pokemonAmount === 0 ? '#FF6262' : '#1DA1F2'

  const hoverBG = useBreakpointValue({
    base: 'none',
    lg: isEasterEgg ? 'none' : '#1A94DA'
  })
  const placement = useBreakpointValue({
    base: 'right',
    lg: isEasterEgg ? 'bottom-end' : 'bottom-start'
  })

  const goToPokedexResetTypesSort = () => {
    updateFavicon(defaultFavicon)
    resetTypesSort()
    resetFilterByName()
    setCurrentPage(1)
    goPokedexAnimate(isDetalhes, () => goToPokedex(navigate))
  }

  return (
    <Tooltip
      hasArrow
      bg={color}
      label={label}
      placement={placement}
      ml={{ base: '0em', lg: isEasterEgg ? '0' : '12.5em' }}
    >
      <Button
        onClick={goToPokedexResetTypesSort}
        bg={{ base: 'none', lg: isEasterEgg ? 'none' : '#1DA1F2' }}
        _hover={{ bg: hoverBG }}
        size='lg'
        borderStyle='none'
        w={{ base: '6em', lg: isEasterEgg ? '6em' : '16em' }}
        h='4em'
        zIndex='docked'
        cursor={`url(${mousePointerOK}), auto`}
        _active={{ cursor: `url(${mouseGrab}), auto` }}
      >
        {pokedexIcon(mousePointerOK, mouseGrab)}
        <Text
          fontSize='24px'
          fontWeight='bold'
          fontFamily='poppins'
          color={colorMode === 'light' ? 'light.white' : 'dark.button'}
          display={{ base: 'none', lg: isEasterEgg ? 'none' : 'block' }}
          cursor={`url(${mousePointerOK}), auto`}
          _active={{ cursor: `url(${mouseGrab}), auto` }}
        >
          Pokedéx
        </Text>
        <Box
          ml={{ base: '-0.5em', lg: isEasterEgg ? '-0.5em' : '1em' }}
          borderRadius='.3em'
          fontSize='16px'
          p='.4em'
          fontFamily='poppins'
          bg={colorMode === 'light' ? 'light.white' : 'dark.button'}
          color='#1DA1F2'
          fontWeight='bold'
          cursor={`url(${mousePointerOK}), auto`}
          _active={{ cursor: `url(${mouseGrab}), auto` }}
          display={isEasterEgg ? 'none' : 'block'}
        >
          {pokemonAmount}
        </Box>
      </Button>
    </Tooltip>
  )
}
export default PokedexButton
