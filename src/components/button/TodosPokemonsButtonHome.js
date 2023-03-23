import { useContext } from 'react'
import { Text, useColorMode, chakra, shouldForwardProp } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { motion, isValidMotionProp } from 'framer-motion'
import { AnimateContext } from '../../contexts/AnimateCoxtext'

const TodosPokemonsButtonHome = () => {
  const { colorMode } = useColorMode()
  const {
    todosPokemonsButtonHomeAnimated,
    setTodosPokemonsButtonHomeAnimated,
    todosPokemonsButtonHomeDisplay,
    setTodosPokemonsButtonHomeDisplay,
    setTodosPokemonsDisplay,
    shouldAnimate
  } = useContext(AnimateContext)
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
      initial={{
        color:
          shouldAnimate || todosPokemonsButtonHomeAnimated
            ? targetColor
            : initialColor,
        height: shouldAnimate || todosPokemonsButtonHomeAnimated ? '4em' : '2em'
      }}
      animate={{
        color: targetColor,
        height: '4em'
      }}
      transition={{
        duration: 0.5,
        ease: 'easeInOut'
      }}
      display={shouldAnimate ? 'none' : todosPokemonsButtonHomeDisplay}
      onAnimationComplete={() => {
        setTodosPokemonsButtonHomeAnimated(true)
        setTodosPokemonsButtonHomeDisplay('none')
        setTodosPokemonsDisplay('block')
      }}
      zIndex='dropdown'
      position='fixed'
      top='65px'
      left='20px'
    >
      <AnimateButton
        initial={{
          opacity: shouldAnimate || todosPokemonsButtonHomeAnimated ? 1 : 0
        }}
        animate={{ opacity: 0 }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut'
        }}
      >
        <ChevronLeftIcon boxSize={8} />
      </AnimateButton>

      <AnimateButton
        initial={{
          fontSize:
            shouldAnimate || todosPokemonsButtonHomeAnimated ? '48px' : '24px',
          y: shouldAnimate || todosPokemonsButtonHomeAnimated ? '179px' : '0',
          x: shouldAnimate || todosPokemonsButtonHomeAnimated ? '-12px' : '0',
          borderBottom:
            shouldAnimate || todosPokemonsButtonHomeAnimated
              ? 'solid 0px'
              : 'solid 3px',
          borderColor:
            shouldAnimate || todosPokemonsButtonHomeAnimated
              ? targetColor
              : initialColor
        }}
        animate={{
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
export default TodosPokemonsButtonHome
