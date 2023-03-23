import { useContext, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { goToHome } from '../routes/coordinator'
import { FaviconContext } from '../contexts/FaviconContext'
import { SearchContext } from '../contexts/SearchContext'
import { AnimateContext } from '../contexts/AnimateCoxtext'
import { PokedexContext } from '../contexts/PokedexContext'
import {
  Image,
  Grid,
  GridItem,
  useBreakpointValue,
  useColorMode,
  Button,
  Box,
  Center,
  Tooltip,
  chakra,
  shouldForwardProp,  
  useDisclosure
} from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'
import InputName from './search/InputName'
import InputNameAnimate from './search/InputNameAnimate'
import PokedexButton from './button/PokedexButton'
import PokedexButtonAnimate from './button/PokedexButtonAnimate'
import logo from '../assets/logo.png'
import TodosPokemonsButtonLeaveHome from './button/TodosPokemonsButtonLeaveHome'
import TodosPokemonsButton from './button/TodosPokemonsButton'
import TodosPokemonsButtonHome from './button/TodosPokemonsButtonHome'
import defaultFavicon from '../assets/favicon.ico'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import mousePointerOK from '../assets/mousePointerOK.png'
import mouseGrab from '../assets/mouseGrab.png'
import mouseDefault from '../assets/mouseDefault.png'
import AlertEasterEgg from './modal/AlertEasterEgg'

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isPokedex = location.pathname === '/pokedex'
  const isDetalhes = /^\/pokemon\/.+/.test(location.pathname)
  const isEasterEgg = location.pathname === '/easterEgg'
  const navigate = useNavigate()
  const { updateFavicon } = useContext(FaviconContext)
  const { resetFilterByName, resetTypesSort, setCurrentPage } =
    useContext(SearchContext)

  const isLgScreen = useBreakpointValue({ base: false, lg: true })
  const AnimateBox = chakra(motion.div, {
    shouldForwardProp: prop =>
      isValidMotionProp(prop) || shouldForwardProp(prop)
  })

  const {
    setOpacityHome,
    displayInputName,
    setDisplayInputName,
    displayInputNameOk,
    setDisplayInputNameOK,
    animationPlayed,
    setAnimationPlayed,
    animationPlayedPokeButton,
    setAnimationPlayedPokeButton,
    pokedexDisplay,
    setAnimatePokedexTitle,
    animateInputName,
    setAnimateInputName,
    animateInputNameP,
    setAnimateInputNameP,
    displayInputNameP,
    setDisplayInputNameP,
    displayInputNameOkP,
    setDisplayInputNameOKP,
    animateTodosPokesButtonDetalhes,
    setAnimateTodosPokesButtonDetalhes,
    setTextAnimationComplete,
    todosPokesButtonDisplay,
    backToHome,
    setIsAnimeted
  } = useContext(AnimateContext)

  const backHome = () => {
    updateFavicon(defaultFavicon)
    backToHome(isDetalhes, isPokedex, () => goToHome(navigate))
    resetTypesSort()
    resetFilterByName()
    setCurrentPage(1)
  }

  const { isOpen, onOpen, onClose } = useDisclosure()

  const { pokemonAmount } = useContext(PokedexContext)

  useEffect(() => {
    if (!isPokedex && !isEasterEgg && pokemonAmount === 10) {
      return onOpen()
    }
  }, [pokemonAmount])

  return (
    <Box display={isHome || isPokedex || isDetalhes ? 'block' : 'none'}>
      <AlertEasterEgg isOpen={isOpen} onClose={onClose} />
      <Box display={{ base: 'none', lg: 'block' }}>
        <TodosPokemonsButtonHome />
        <TodosPokemonsButtonLeaveHome />
      </Box>
      <Grid
        gap='0px'
        justifyItems='center'
        align='center'
        alignItems='center'
        h='160px'
        bg={colorMode === 'light' ? 'light.white' : 'dark.header'}
        templateColumns='0.8fr 3fr 1fr'
        templateRows='1fr'
        gridTemplateAreas="'left mid right '"
      >
        <GridItem
          area={'left'}
          justifySelf='start'
          pl='2em'
          display={{ base: 'none', lg: 'block' }}
        >
          {isHome ? (
            <Box>
              <AnimateBox
                initial={{
                  scaleX: animateInputName ? '100%' : 0,
                  transformOrigin: 'left'
                }}
                animate={{ scaleX: '100%' }}
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut'
                }}
                border={colorMode === 'light' ? '1px solid #b1d9f6' : 'none'}
                borderRadius={7}
                w='fit-content'
                h='fit-content'
                onAnimationComplete={() => {
                  setAnimateInputName(true)
                  setDisplayInputName('none')
                  setDisplayInputNameOK('block')
                }}
                display={displayInputName}
              >
                <InputName />
              </AnimateBox>

              <Box
                border={colorMode === 'light' ? '1px solid #b1d9f6' : 'none'}
                borderRadius={7}
                w='fit-content'
                h='fit-content'
                display={displayInputNameOk}
              >
                <InputName />
              </Box>

              <InputNameAnimate />
            </Box>
          ) : (
            <AnimateBox
              initial={{
                scaleX: animateTodosPokesButtonDetalhes ? '100%' : 0,
                transformOrigin: 'left'
              }}
              animate={{ scaleX: '100%' }}
              transition={{
                duration: 0.5,
                ease: 'easeInOut'
              }}
              onAnimationComplete={() =>
                setAnimateTodosPokesButtonDetalhes(true)
              }
              display={todosPokesButtonDisplay}
            >
              <TodosPokemonsButton />
            </AnimateBox>
          )}
        </GridItem>

        <GridItem area={'mid'}>
          <Image
            src={logo}
            alt='Pokemon logo'
            cursor={
              isHome || isLgScreen
                ? `url(${mouseDefault}), auto`
                : `url(${mousePointerOK}), auto`
            }
            _active={{ cursor: `url(${mouseGrab}), auto` }}
            onClick={isHome || isLgScreen ? null : backHome}
          />
        </GridItem>

        <GridItem area={'right'} justifySelf='end' pr='1em'>
          <Center gap='1.5em'>
            <Box display={{ base: 'none', lg: 'block' }}>
              {!isPokedex ? (
                <Box>
                  <AnimateBox
                    initial={{
                      scaleX: animationPlayedPokeButton ? '100%' : 0,
                      transformOrigin: 'right'
                    }}
                    animate={{ scaleX: '100%' }}
                    transition={{
                      duration: 0.5,
                      ease: 'easeInOut'
                    }}
                    onAnimationComplete={() => {
                      setAnimationPlayedPokeButton(true)
                    }}
                    display={pokedexDisplay}
                  >
                    <PokedexButton />
                  </AnimateBox>
                  <PokedexButtonAnimate />
                </Box>
              ) : (
                <Box>
                  <AnimateBox
                    initial={{
                      scaleX: animateInputNameP ? '100%' : 0,
                      transformOrigin: 'right'
                    }}
                    animate={{ scaleX: '100%' }}
                    transition={{
                      duration: 0.5,
                      ease: 'easeInOut'
                    }}
                    border={
                      colorMode === 'light' ? '1px solid #b1d9f6' : 'none'
                    }
                    borderRadius={7}
                    w='fit-content'
                    h='fit-content'
                    onAnimationComplete={() => {
                      setAnimateInputNameP(true)
                      setDisplayInputNameP('none')
                      setDisplayInputNameOKP('block')
                      setAnimatePokedexTitle(true)
                    }}
                    display={displayInputNameP}
                  >
                    <InputName />
                  </AnimateBox>

                  <Box
                    border={
                      colorMode === 'light' ? '1px solid #b1d9f6' : 'none'
                    }
                    borderRadius={7}
                    w='fit-content'
                    h='fit-content'
                    display={displayInputNameOkP}
                  >
                    <InputName />
                  </Box>

                  <InputNameAnimate />
                </Box>
              )}
            </Box>

            <Tooltip
              hasArrow
              bg={colorMode === 'light' ? '#FAC705' : 'dark.inputName'}
              label={colorMode === 'light' ? 'light' : 'dark'}
              color='white'
              placement='top'
            >
              <AnimateBox
                initial={{ scale: animationPlayed ? '100%' : 0 }}
                animate={{ scale: '100%' }}
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut'
                }}
                onAnimationComplete={() => {
                  setAnimationPlayed(true)
                  setOpacityHome(true)
                  setTextAnimationComplete(true)
                  setIsAnimeted(true)
                }}
              >
                <Button
                  onClick={toggleColorMode}
                  bg={colorMode === 'light' ? '#fcf0c1' : 'dark.inputName'}
                  color={colorMode === 'light' ? '#C29905' : 'dark.pTitle'}
                  _hover={{
                    bg: `${
                      colorMode === 'light' ? '#FAC705' : 'dark.buttonHover'
                    }`,
                    color: `${colorMode === 'light' ? 'white' : 'dark.pTitle'}`
                  }}
                >
                  {colorMode === 'light' ? (
                    <SunIcon
                      cursor={`url(${mousePointerOK}), auto`}
                      _active={{ cursor: `url(${mouseGrab}), auto` }}
                    />
                  ) : (
                    <MoonIcon
                      cursor={`url(${mousePointerOK}), auto`}
                      _active={{ cursor: `url(${mouseGrab}), auto` }}
                    />
                  )}
                </Button>
              </AnimateBox>
            </Tooltip>
          </Center>
        </GridItem>
      </Grid>
    </Box>
  )
}
export default Header
