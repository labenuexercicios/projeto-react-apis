import { useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { goToHome, goToEasterEgg } from '../routes/coordinator'
import { PokedexContext } from '../contexts/PokedexContext'
import { SearchContext } from '../contexts/SearchContext'
import { PokemonContext } from '../contexts/PokemonContext'
import { AnimateContext } from '../contexts/AnimateCoxtext'
import { FaviconContext } from '../contexts/FaviconContext'
import {
  useDisclosure,
  Text,
  Box,
  Flex,
  Tooltip,
  Button,
  Image,
  useColorMode,
  useBreakpointValue,
  chakra,
  shouldForwardProp
} from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'
import { DeleteIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import CustomTab from '../components/CustomTab'
import InputName from '../components/search/InputName'
import TypeOrdem from '../components/search/TypeOrdem'
import AlertExcluirAll from '../components/modal/AlertExcluirAll'
import noPokes from '../assets/noPokes.gif'
import mouseWarning from '../../src/assets/mouseWarning.gif'
import mouseWarning2 from '../../src/assets/mouseWarning2.gif'
import mousePointerOK from '../../src/assets/mousePointerOK.png'
import mouseDetalhes from '../../src/assets/mouseDetalhes.gif'
import mouseDetalhesActive from '../../src/assets/mouseDetalhesActive.gif'
import mouseGrab from '../../src/assets/mouseGrab.png'
import rotomDex from '../../src/assets/rotomDex.gif'
import RotomDexIco from '../../src/assets/rotomDexIco.ico'

const Pokedex = () => {
  const { colorMode } = useColorMode()
  const navigate = useNavigate()
  const location = useLocation()
  const isPokedex = location.pathname === '/pokedex'
  const isDetalhes = /^\/pokemon\/.+/.test(location.pathname)
  const { pokemonAmount, pokedex } = useContext(PokedexContext)
  const { pokemonsCopytoDetahes } = useContext(PokemonContext)
  const { updateFavicon } = useContext(FaviconContext)

  const {
    backToHome,
    animatePokedexTitle,
    setAnimatePokedexTitle,
    pokedexTitle,
    pokedexTitleAnimate,
    shouldAnimate
  } = useContext(AnimateContext)

  const {
    filterByName,
    filterByType,
    order,
    sortPokes,
    currentPage,
    setCurrentPage,
    resetFilterByName,
    resetTypesSort
  } = useContext(SearchContext)

  const backHome = () => {
    backToHome(isDetalhes, isPokedex, () => goToHome(navigate))
    resetTypesSort()
    resetFilterByName()
    setCurrentPage(1)
  }

  const pokedexNames = pokedex.map(pokemon => pokemon.name)
  const newPokedex = pokemonsCopytoDetahes.filter(pokemon => {
    return pokedexNames.includes(pokemon.name)
  })

  const filteredPokedex = newPokedex
    .filter(filterByName)
    .filter(filterByType)
    .sort(sortPokes(order))

  const { isOpen, onOpen, onClose } = useDisclosure()

  let labelText = 'Exclui todos Pokémons!'
  if (newPokedex.length === 0) {
    labelText = 'Você não tem nenhum Pokémon'
  } else if (newPokedex.length === 1) {
    labelText = 'Você só tem 1 Pokémon'
  }
  const verificaLenght = () => {
    if (newPokedex.length > 1) {
      onOpen()
    }
  }
  const AnimateText = chakra(motion.div, {
    shouldForwardProp: prop =>
      isValidMotionProp(prop) || shouldForwardProp(prop)
  })

  const textAnimationInitial = useBreakpointValue({
    base: {
      opacity: animatePokedexTitle ? 1 : 0
    },
    lg: {
      opacity: animatePokedexTitle ? 1 : 0,
      scaleX: animatePokedexTitle ? '100%' : 0,
      transformOrigin: 'left'
    }
  })

  const textAnimation = useBreakpointValue({
    base: {
      opacity: 1
    },
    lg: {
      opacity: 1,
      scaleX: '100%'
    }
  })

  const transitionD = useBreakpointValue({
    base: {
      duration: 1,
      ease: 'easeInOut'
    },
    lg: {
      duration: 0.5,
      ease: 'easeInOut'
    }
  })

  return (
    <Box
      minH={{
        base: '110vh',
        sm: '105vh',
        smm: '100vh',
        lg: pokemonAmount === 0 ? '90vh' : '75vh'
      }}
      bg={colorMode === 'light' ? 'light.background' : 'dark.background'}
      bgSize='cover'
    >
      <Flex
        justify='space-between'
        align='center'
        pr={{ base: '0px', sm: '40px' }}
        pt='79px'
        ml={{ base: '0px', sm: '40px' }}
        mb='35px'
        direction={{
          base: 'column',
          lg: 'row'
        }}
      >
        <AlertExcluirAll onClose={onClose} onOpen={onOpen} isOpen={isOpen} />
        <AnimateText
          initial={textAnimationInitial}
          animate={textAnimation}
          transition={transitionD}
          onAnimationComplete={() => {
            setAnimatePokedexTitle(true)
          }}
          display={pokedexTitle}
        >
          <Flex
            align='center'
            justify='center'
            gap={3}
            fontWeight='bold'
            fontFamily='poppins'
            color={colorMode === 'light' ? 'light.white' : 'dark.pTitle'}
            transform={{ base: 'scale(0.9)', sm: 'scale(1)' }}
          >
            <Text fontSize='48px' mb='0.5em'>
              Pokedex
            </Text>
            <Text fontSize='24px' mt='.3em' mb='1em'>
              ( {pokemonAmount} )
            </Text>

            <Tooltip
              hasArrow
              bg='#ce424e'
              label={labelText}
              placement='bottom-start'
            >
              <Button
                color='white'
                bg='none'
                _hover={{ bg: 'none', opacity: 1, color: '#ce424e' }}
                opacity={0.2}
                onClick={verificaLenght}
                cursor={`url(${mouseWarning}), auto`}
                _active={{ cursor: `url(${mouseWarning2}), auto` }}
                ml='-1em'
                zIndex='docked'
              >
                <DeleteIcon boxSize={6} mt='.3em' mb='1.5em' />
              </Button>
            </Tooltip>
          </Flex>
        </AnimateText>

        <AnimateText
          initial={{
            opacity: 1,
            scaleY: '100%',
            scaleX: '100%',
            transformOrigin: shouldAnimate ? 'left' : 'bottom'
          }}
          animate={{
            opacity: 0,
            scaleY: shouldAnimate ? '100%' : 0,
            scaleX: shouldAnimate ? 0 : '100%'
          }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut'
          }}
          display={pokedexTitleAnimate}
        >
          <Flex
            align='center'
            justify='center'
            gap={3}
            fontWeight='bold'
            fontFamily='poppins'
            color={colorMode === 'light' ? 'light.white' : 'dark.pTitle'}
            display={{
              base: 'none',
              lg: 'flex'
            }}
          >
            <Text fontSize='48px' mb='0.5em'>
              Pokedex
            </Text>
            <Text fontSize='24px' mt='.3em' mb='1em'>
              ( {pokemonAmount} )
            </Text>
            <Button
              color='white'
              bg='none'
              _hover={{ bg: 'none' }}
              opacity={0.2}
              ml='-1em'
            >
              <DeleteIcon boxSize={6} mt='.3em' mb='1.5em' />
            </Button>
          </Flex>
        </AnimateText>

        <Box
          display={pokemonAmount >= 10 ? 'block' : 'none'}
          cursor={`url(${mouseDetalhes}), auto`}
          _active={{ cursor: `url(${mouseDetalhesActive}), auto` }}
          mb='1em'
        >
          <Tooltip
            hasArrow
            bg='#1DA1F2'
            label={'Olá, você quer ir pro jogo de memória?'}
            placement='top'
          >
            <Image
              h='5em'
              src={rotomDex}
              alt='Rotom Dex'
              cursor={`url(${mouseDetalhes}), auto`}
              _active={{ cursor: `url(${mouseDetalhesActive}), auto` }}
              onClick={() => {
                goToEasterEgg(navigate)
                updateFavicon(RotomDexIco)
              }}
            />
          </Tooltip>
        </Box>

        <Box
          bg={colorMode === 'light' ? 'light.white' : 'dark.inputName'}
          rounded={5}
          mb='1em'
          display={{ base: 'block', lg: 'none' }}
        >
          <InputName />
        </Box>
        <TypeOrdem pokemons={newPokedex} />
      </Flex>
      {pokemonAmount === 0 ? (
        <Flex align='center' justify='center' direction='column' gap='1em'>
          <Text
            fontWeight='bold'
            fontFamily='poppins'
            color={colorMode === 'light' ? 'light.white' : 'dark.pTitle'}
            fontSize='32px'
          >
            Sem Pokémons!
          </Text>
          <Image src={noPokes} borderRadius='1em' />
          <Flex
            color={colorMode === 'light' ? 'light.white' : 'dark.pTitle'}
            onClick={backHome}
            cursor={`url(${mousePointerOK}), auto`}
            _hover={{ bg: 'none', opacity: 1, textDecoration: 'underline' }}
            opacity={0.3}
          >
            <ChevronLeftIcon boxSize={8} mt='0.5' />
            <Text fontSize='24px' fontWeight='bold' fontFamily='poppins'
            cursor={`url(${mousePointerOK}), auto`}
            _active={{ cursor: `url(${mouseGrab}), auto` }}
            >
              Voltar e capturar pokemóns!
            </Text>
          </Flex>
        </Flex>
      ) : (
        <CustomTab
          filteredPokemons={filteredPokedex}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </Box>
  )
}
export default Pokedex
