import { useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { goToHome } from '../../routes/coordinator'
import { FaviconContext } from '../../contexts/FaviconContext'
import { SearchContext } from '../../contexts/SearchContext'
import { AnimateContext } from '../../contexts/AnimateCoxtext'
import { Text, Flex, useColorMode } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import defaultFavicon from '../../../src/assets/favicon.ico'
import mousePointerOK from '../../../src/assets/mousePointerOK.png'
import mouseGrab from '../../../src/assets/mouseGrab.png'

const TodosPokemonsButton = () => {
  const location = useLocation()
  const isPokedex = location.pathname === '/pokedex'
  const isDetalhes = /^\/pokemon\/.+/.test(location.pathname)
  const navigate = useNavigate()
  const { updateFavicon } = useContext(FaviconContext)
  const { resetFilterByName, resetTypesSort, setCurrentPage } =
    useContext(SearchContext)

  const { backToHome } = useContext(AnimateContext)

  const backHome = () => {
    updateFavicon(defaultFavicon)
    backToHome(isDetalhes, isPokedex, () => goToHome(navigate))
    resetTypesSort()
    resetFilterByName()
    setCurrentPage(1)
  }

  const { colorMode } = useColorMode()
  return (
    <Flex
      onClick={backHome}
      color={colorMode === 'light' ? 'black' : 'dark.pTitle'}
      _hover={{ color: '#1DA1F2' }}
    >
      <ChevronLeftIcon boxSize={8} />
      <Text
        cursor={`url(${mousePointerOK}), auto`}
        _active={{ cursor: `url(${mouseGrab}), auto` }}
        fontSize='24px'
        fontWeight='bold'
        fontFamily='poppins'
        textDecoration='underline'
      >
        Todos Pokémons
      </Text>
    </Flex>
  )
}
export default TodosPokemonsButton
