import { useState, useEffect } from 'react'
import './CardMemory.css'
import { Box, Image, useColorMode, useBreakpointValue } from '@chakra-ui/react'
import mousePointerOK from '../../src/assets/mousePointerOK.png'
import mouseGrab from '../../src/assets/mouseGrab.png'
import CardBackImage from '../../src/assets/pokebolaError.png'

const CardMemory = ({
  card,
  handleChoice,
  flipped,
  disabled  
}) => {
  const { colorMode } = useColorMode()
  const transform = useBreakpointValue({ base: 'scale(0.8)', sm: 'scale(1)' })
  const hoverTransform = useBreakpointValue({
    base: 'scale(0.85)',
    sm: 'scale(1.03)'
  })
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card)
    }
  }

  const [shouldAnimate, setShouldAnimate] = useState(false)
  const [removingAnimation, setRemovingAnimation] = useState(false)

  useEffect(() => {
    if (card.matched) {
      setShouldAnimate(true)
      setTimeout(() => {
        setRemovingAnimation(true)
      }, 1000)
    } else {
      setRemovingAnimation(false)
      setShouldAnimate(false)
    }
  }, [card.matched])

  return (
    <Box
      position='relative'
      className={`card ${shouldAnimate ? 'animate' : ''} ${
        removingAnimation ? 'remove-animate' : ''
      }`}
    >
      <Box className={flipped ? 'flipped' : ''} w='10em'>
        <Image
          className='front'
          src={card.src}
          alt='Front Card'
          width='100%'
          display='block'
          borderRadius='xl'
          bg={colorMode === 'light' ? 'light.white' : 'dark.detalhesBG'}
        />
        <Image
          className='back'
          src={CardBackImage}
          alt='Back Card'
          onClick={handleClick}
          width='100%'
          display='block'
          borderRadius='xl'
          bg={colorMode === 'light' ? 'light.white' : 'dark.detalhesBG'}
          transform={transform}
          _hover={{
            transform: hoverTransform,
            bg: colorMode === 'light' ? 'dark.detalhesBG' : 'light.white'
          }}
          boxShadow='md'
          cursor={`url(${mousePointerOK}), auto`}
          _active={{ cursor: `url(${mouseGrab}), auto` }}
        />
      </Box>
    </Box>
  )
}

export default CardMemory
