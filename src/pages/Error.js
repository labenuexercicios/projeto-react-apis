import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHome } from '../routes/coordinator'
import { FaviconContext } from '../contexts/FaviconContext'
import { AnimateContext } from '../contexts/AnimateCoxtext'
import { Text, Flex, Box, Image, useColorMode, Center } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import wingBG from '../assets/pngwing3.png'
import PokebolaPichu from '../assets/PokebolaPichu.gif'
import pokebolaError from '../assets/pokebolaError.png'
import defaultFavicon from '../assets/favicon.ico'
import mousePointerOK from '../../src/assets/mousePointerOK.png'
import mouseGrab from '../../src/assets/mouseGrab.png'

const Error = () => {
  const { colorMode } = useColorMode()
  const navigate = useNavigate()
  const { updateFavicon } = useContext(FaviconContext)
  const { backToHome } = useContext(AnimateContext)

  const backHome = () => {
    updateFavicon(defaultFavicon)
    backToHome(false, false, () => goToHome(navigate))
    goToHome(navigate)
  }

  return (
    <Box
      minH='100vh'
      bg={colorMode === 'light' ? 'light.background' : 'dark.background'}
      bgSize='cover'
      bgImage={wingBG}
      bgRepeat='no-repeat'
      backgroundSize='125vh'
      bgPosition='center'
    >
      <Flex
        align='center'
        pb='6em'
        minH='100vh'
        direction='column'
        gap='1em'
        justify='center'
      >
        <Text
          fontSize='24px'
          fontWeight='bold'
          fontFamily='poppins'
          mb='-0.8em'
          color='#FF6262'
        >
          Error
        </Text>
        <Flex
          align='center'
          justify='center'
          fontSize='80px'
          fontWeight='bold'
          fontFamily='poppins'
          color='#FF6262'
          gap={0.5}
          mb='-0.1em'
          transform='scale(1.5)'
        >
          <Text> 4 </Text>
          <Image w={16} h={16} src={pokebolaError}></Image>
          <Text> 4 </Text>
        </Flex>
        <Center bg='white' borderRadius='100%' h='24em' w='24em'>
          <Image
            ml='1em'
            src={PokebolaPichu}
            alt='Página não encontrada'
          ></Image>
        </Center>
        <Text
          fontSize='42px'
          fontWeight='bold'
          fontFamily='poppins'
          color='white'
          textAlign='center'
        >
          Página não encontrada!!
        </Text>

        <Flex
          color='white'
          onClick={backHome}
          _hover={{ bg: 'none', opacity: 1, textDecoration: 'underline' }}
          opacity={0.3}
          cursor={`url(${mousePointerOK}), auto`}
          _active={{ cursor: `url(${mouseGrab}), auto` }}
        >
          <ChevronLeftIcon
            boxSize={8}
            mt='0.5'
            cursor={`url(${mousePointerOK}), auto`}
            _active={{ cursor: `url(${mouseGrab}), auto` }}
          />
          <Text
            fontSize='24px'
            fontWeight='bold'
            fontFamily='poppins'
            cursor={`url(${mousePointerOK}), auto`}
            _active={{ cursor: `url(${mouseGrab}), auto` }}
          >
            Voltar pra Home!
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}
export default Error
