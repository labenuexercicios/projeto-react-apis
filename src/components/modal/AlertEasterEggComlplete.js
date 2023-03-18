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
import PikachuHappy from '../../assets/pikachuHappy.gif'

const AlertEasterEggComlplete = ({
  isOpen,
  onClose,
  shuffleCards,
  backHome
}) => {
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
          >
            <Text
              fontSize='48px'
              color='black'
            >
              Parabéns!!
            </Text>
            <Text
              fontSize='20px'
              color='black'
            >
              Você venceu!
            </Text>
            <Image
              src={PikachuHappy}
              alt={'Pikachu feliz'}
              borderRadius='1em'
              maxH='10em'
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
              <Text
                textAlign='center'
                color='black'
              >
                Jogar de novo?
              </Text>
            </Flex>

            <ModalFooter mt='0.5em'>
              <Button
                fontWeight='400'
                color= 'white'
                bg='#1DA1F2'
                _hover={{
                  boxShadow: 'md',
                  color: 'white',
                  fontWeight: '600',
                  bg: '#1A94DA'
                }}
                mr={3}
                onClick={() => {
                  onClose()
                  shuffleCards()
                }}
              >
                Sim!
              </Button>

              <Button
                bg='#FF6262'
                color='white'
                fontWeight='400'
                _hover={{ boxShadow: 'md', fontWeight: '600', bg: '#ce424e' }}
                onClick={backHome}
              >
                <Text>Não</Text>
              </Button>
            </ModalFooter>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  )
}
export default AlertEasterEggComlplete
