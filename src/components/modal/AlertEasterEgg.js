import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaviconContext } from '../../contexts/FaviconContext'
import { goToEasterEgg } from '../../routes/coordinator'
import {
  Text,
  Flex,
  Image,
  ModalOverlay,
  Modal,
  ModalContent,
  ModalFooter,
  Button,
  useColorMode
} from '@chakra-ui/react'
import pikachuDouble from '../../assets/pikachuDouble.gif'
import RotomDexIco from '../../assets/rotomDexIco.ico'

const AlertEasterEgg = ({ isOpen, onClose }) => {
  const { updateFavicon } = useContext(FaviconContext)
  const navigate = useNavigate()
  const { colorMode } = useColorMode()
  return (
    <>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        closeOnOverlayClick={false}
        closeOnEsc={false}
        ml='1em'
        mr='1em'
      >
        <ModalOverlay />
        <ModalContent minWidth='fit-content' objectFit='contain' p='1em'>
          <Flex
            align='center'
            justify='center'
            direction='column'
            borderRadius='12px'
            p='0.5em'
            fontFamily='poppins'
            fontStyle='bold'
            fontWeight='700'
            color={colorMode === 'light' ? 'light.white' : 'dark.pTitle'}
          >
            <Text fontSize='48px'>Parabéns!!</Text>
            <Text fontSize='20px'>Você capturou 10 Pokémons!</Text>
            <Image
              src={pikachuDouble}
              alt={'Pikachu comendo junto com outro Pikachu'}
              borderRadius='1em'
              maxH='20em'
              mt='1em'
            />
            <Flex
              fontWeight='700'
              fontSize='20px'
              fontFamily='poppins'
              fontStyle='bold'
              mt='1em'
              direction='column'
            >
              <Text textAlign='center'>
                O jogo de memória na Pokedéx foi desbloqueado!
              </Text>
              <Text textAlign='center'>Você quer jogar agora?</Text>
            </Flex>

            <ModalFooter mt='0.5em'>
              <Button
                fontWeight='400'
                bg='#1DA1F2'
                color='white'
                _hover={{
                  boxShadow: 'md',
                  color: 'white',
                  fontWeight: '600',
                  bg: '#1A94DA'
                }}
                mr={3}
                onClick={() => {
                  goToEasterEgg(navigate)
                  updateFavicon(RotomDexIco)
                  onClose()
                }}
              >
                Sim!
              </Button>

              <Button
                bg='#FF6262'
                color='white'
                fontWeight='400'
                _hover={{ boxShadow: 'md', fontWeight: '600', bg: '#ce424e' }}
                onClick={onClose}
              >
                Não!
              </Button>
            </ModalFooter>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  )
}
export default AlertEasterEgg
