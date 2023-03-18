import { useContext } from 'react'
import { PokemonContext } from '../contexts/PokemonContext'
import { SearchContext } from '../contexts/SearchContext'
import { AnimateContext } from '../contexts/AnimateCoxtext'
import {
  Text,
  Flex,
  Box,
  useColorMode,
  chakra,
  shouldForwardProp
} from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'
import CustomTab from '../components/CustomTab'
import TypeOrdem from '../components/search/TypeOrdem'
import InputName from '../components/search/InputName'
import PokedexButton from '../components/button/PokedexButton'

const Home = () => {
  const { pokemons } = useContext(PokemonContext)
  const {
    filterByName,
    filterByType,
    order,
    sortPokes,
    currentPage,
    setCurrentPage
  } = useContext(SearchContext)

  const filteredPokemons = pokemons
    .filter(filterByName)
    .filter(filterByType)
    .sort(sortPokes(order))

  const { colorMode } = useColorMode()

  const AnimateText = chakra(motion.div, {
    shouldForwardProp: prop =>
      isValidMotionProp(prop) || shouldForwardProp(prop)
  })

  const { opacityHome, setOpacityHome, todosPokemonsDisplay } =
    useContext(AnimateContext)

  return (
    <Box
      minH='75vh'
      bg={colorMode === 'light' ? 'light.background' : 'dark.background'}
      bgSize='cover'
    >
      <Flex
        justify='space-between'
        align='center'
        pr='40px'
        pt='84px'
        ml='40px'
        mb='35px'
        direction={{
          base: 'column',
          lg: 'row'
        }}
        position='relative'
      >
        <Box display={{ base: 'none', lg: 'block' }}>
          <Text
            fontSize='48px'
            fontWeight='bold'
            fontFamily='poppins'
            color={colorMode === 'light' ? 'light.white' : 'dark.pTitle'}
            mb='0.5em'
            display={todosPokemonsDisplay}
          >
            Todos Pokémons
          </Text>
        </Box>

        <AnimateText
          initial={{ opacity: opacityHome ? 1 : 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            ease: 'easeInOut'
          }}
          onAnimationComplete={() => setOpacityHome(true)}
          display={{ base: 'block', lg: 'none' }}
        >
          <Text
            fontSize={{
              base: '32px',
              sm: '44px',
              smm: '48px'
            }}
            fontWeight='bold'
            fontFamily='poppins'
            color={colorMode === 'light' ? 'light.white' : 'dark.pTitle'}
            mb={{ base: '0.5em' }}
          >
            Todos Pokémons
          </Text>
        </AnimateText>

        <Box
          display={{ base: 'block', lg: 'none' }}
          position='absolute'
          top='1'
          left={'-5'}
        >
          <PokedexButton />
        </Box>

        <Box
          bg={colorMode === 'light' ? 'light.white' : 'dark.inputName'}
          rounded={5}
          mb='1em'
          display={{ base: 'block', lg: 'none' }}
        >
          <InputName />
        </Box>

        <TypeOrdem pokemons={pokemons} />
      </Flex>
      <CustomTab
        filteredPokemons={filteredPokemons}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Box>
  )
}
export default Home
