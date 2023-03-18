import { useContext } from 'react'
import { PokedexContext } from '../../contexts/PokedexContext'
import { AnimateContext } from '../../contexts/AnimateCoxtext'
import {
  Button,
  Text,
  Box,
  useColorMode,
  chakra,
  shouldForwardProp
} from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'

const PokedexButtonAnimate = () => {
  const { colorMode } = useColorMode()
  const { pokemonAmount, pokedexIcon } = useContext(PokedexContext)
  const { animatePokedexDisplay, setAnimatePokedexDisplay } =
    useContext(AnimateContext)

  const AnimateBox = chakra(motion.div, {
    shouldForwardProp: prop =>
      isValidMotionProp(prop) || shouldForwardProp(prop)
  })

  return (
    <AnimateBox
      initial={{ scaleX: '100%', transformOrigin: 'right' }}
      animate={{ scaleX: '0%' }}
      transition={{
        duration: 0.5,
        ease: 'easeInOut'
      }}
      display={animatePokedexDisplay}
      onAnimationComplete={() => setAnimatePokedexDisplay('none')}
    >
      <Button
        bg='#1DA1F2'
        _hover={{ bg: '#1A94DA' }}
        size='lg'
        borderStyle='none'
        w='16em'
        h='4em'
      >
        {pokedexIcon()}
        <Text
          fontSize='24px'
          fontWeight='bold'
          fontFamily='poppins'
          color={colorMode === 'light' ? 'light.white' : 'dark.button'}
        >
          Pokedéx
        </Text>
        <Box
          ml='1em'
          borderRadius='.3em'
          fontSize='16px'
          p='.4em'
          fontFamily='poppins'
          bg={colorMode === 'light' ? 'light.white' : 'dark.button'}
          color='#1DA1F2'
          fontWeight='bold'
        >
          {pokemonAmount}
        </Box>
      </Button>
    </AnimateBox>
  )
}
export default PokedexButtonAnimate
