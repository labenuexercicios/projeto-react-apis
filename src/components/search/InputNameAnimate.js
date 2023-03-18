import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimateContext } from '../../contexts/AnimateCoxtext'
import { useColorMode, chakra, shouldForwardProp } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'
import InputName from './InputName'

const InputNameAnimate = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const { colorMode } = useColorMode()
  const AnimateBox = chakra(motion.div, {
    shouldForwardProp: prop =>
      isValidMotionProp(prop) || shouldForwardProp(prop)
  })

  const {
    displayInputNameReverse,
    setDisplayInputNameReverse,
    displayInputNameReverseP,
    setDisplayInputNameReverseP
  } = useContext(AnimateContext)

  return (
    <AnimateBox
      border={colorMode === 'light' ? '1px solid #b1d9f6' : 'none'}
      borderRadius={7}
      w='fit-content'
      h='fit-content'
      initial={{ scaleX: '100%', transformOrigin: isHome ? 'left' : 'right' }}
      animate={{ scaleX: '0%' }}
      transition={{
        duration: 0.5,
        ease: 'easeInOut'
      }}
      display={isHome ? displayInputNameReverse : displayInputNameReverseP}
      onAnimationComplete={() => {
        isHome
          ? setDisplayInputNameReverse('none')
          : setDisplayInputNameReverseP('none')
      }}
    >
      <InputName />
    </AnimateBox>
  )
}
export default InputNameAnimate
