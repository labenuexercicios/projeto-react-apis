import { useContext } from 'react'
import { AnimateContext } from '../../contexts/AnimateCoxtext'
import { Text, useColorMode, chakra, shouldForwardProp } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'
import { ChevronLeftIcon } from '@chakra-ui/icons'

const TodosPokemonsButton = () => {
  const { colorMode } = useColorMode()
  const { todosPokemonsButtonLeaveHomeDisplay, shouldAnimate } =
    useContext(AnimateContext)

  const AnimateButton = chakra(motion.div, {
    shouldForwardProp: prop =>
      isValidMotionProp(prop) || shouldForwardProp(prop)
  })
  const colors = {
    light: { initial: '#000', target: '#FFFFFF' },
    dark: { initial: '#A6ADBB', target: '#A6ADBB' }
  }
  const initialColor = colors[colorMode].initial
  const targetColor = colors[colorMode].target

  return (
    <AnimateButton
      animate={{
        color: shouldAnimate ? targetColor : initialColor,
        height: '2em'
      }}
      initial={{
        color: targetColor,
        height: '4em'
      }}
      transition={{
        duration: 0.5,
        ease: 'easeInOut'
      }}
      display={shouldAnimate ? 'none' : todosPokemonsButtonLeaveHomeDisplay}
      zIndex='dropdown'
      position='fixed'
      top='61px'
      left='32px'
    >
      <AnimateButton
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut'
        }}
      >
        <ChevronLeftIcon boxSize={8} />
      </AnimateButton>

      <AnimateButton
        animate={{
          fontSize: shouldAnimate ? '48px' : '24px',
          y: shouldAnimate ? '179px' : '0',
          x: shouldAnimate ? '-12px' : '0',
          borderBottom: shouldAnimate ? '0px' : 'solid 3px',
          borderColor: shouldAnimate ? targetColor : initialColor
        }}
        initial={{
          fontSize: '48px',
          y: '179px',
          x: '-12px',
          borderBottomWidth: 0,
          borderColor: targetColor
        }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut'
        }}
      >
        <Text fontWeight='bold' fontFamily='poppins'>
          Todos Pokémons
        </Text>
      </AnimateButton>
    </AnimateButton>
  )
}
export default TodosPokemonsButton
