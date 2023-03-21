import {
  Text,
  Flex,
  Button,
  Image,
  ModalOverlay,
  Modal,
  ModalContent,
  ModalHeader
} from '@chakra-ui/react'
import { BarLoader, BeatLoader } from 'react-spinners'
import pokeballCapturar from '../../assets/pokeballCapturar.gif'

const AlertCapturar = ({
  isOpen,
  onClose,
  showSecondModalCapturar,
  setShowSecondModalCapturar,
  name,
  imageForAlertCapturar,
  cardColor,
  capture_rate,
  showSecondModalCapturarFail,
  setShowSecondModalCapturarFail,
  catchChance
}) => {
  catchChance = Math.round(catchChance)
  return (
    <>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        closeOnOverlayClick={false}
        closeOnEsc={false}
      >
        <ModalOverlay />
        <ModalContent
          minWidth='fit-content'
          objectFit='contain'
          borderRadius='xl'
          p='0.5em'
          fontFamily='poppins'
          bg='white'
        >
          <Flex align='center' justify='center' direction='column'>
            <ModalHeader>
              <Image src={pokeballCapturar} />
              <BarLoader
                color={cardColor}
                height='0.35em'
                cssOverride={{ borderRadius: '10em' }}
                speedMultiplier={0.56}
                width='100%'
              />
            </ModalHeader>

            <Flex align='center' justify='center'>
              <Image src={imageForAlertCapturar} alt={name} mr='0.2em' />
              <Text
                fontWeight='700'
                fontSize='18px'
                mr='0.5em'
                fontFamily='poppins'
                fontStyle='bold'
                color='black'
              >
                Capturando
              </Text>
              <Text
                fontWeight='700'
                color={cardColor}
                fontSize='18px'
                textTransform='capitalize'
                fontFamily='poppins'
                fontStyle='bold'
              >
                {name}
              </Text>
              <Button
                ml='1em'
                isLoading
                spinner={<BeatLoader size={10} color={cardColor} />}
              />
            </Flex>
          </Flex>
        </ModalContent>
      </Modal>

      <Modal
        onClose={() => setShowSecondModalCapturar(false)}
        isOpen={showSecondModalCapturar}
        isCentered
        closeOnOverlayClick={false}
        closeOnEsc={false}
      >
        <ModalOverlay />
        <ModalContent
          minWidth='fit-content'
          objectFit='contain'
          p='1em'
          bg='white'
        >
          <Flex
            align='center'
            justify='center'
            direction='column'
            borderRadius='12px'
            h='222px'
            p='0.5em'
          >
            <Text
              fontWeight='700'
              fontSize='48px'
              fontFamily='poppins'
              fontStyle='bold'
              color='black'
            >
              Gotcha!
            </Text>

            <Flex
              fontWeight='700'
              fontSize='20px'
              fontFamily='poppins'
              fontStyle='bold'
            >
              <Text color={cardColor} mr='0.5em' textTransform='capitalize'>
                {name}
              </Text>
              <Text color='black'>foi adicionado a sua Pokédex!</Text>
            </Flex>
          </Flex>
        </ModalContent>
      </Modal>

      <Modal
        onClose={() => setShowSecondModalCapturarFail(false)}
        isOpen={showSecondModalCapturarFail}
        isCentered
        closeOnOverlayClick={false}
        closeOnEsc={false}
      >
        <ModalOverlay minWidth='fit-content' objectFit='contain' />
        <ModalContent bg='white'>
          <Flex
            align='center'
            justify='center'
            direction='column'
            borderRadius='12px'
            w='451px'
            h='222px'
          >
            <Text
              fontWeight='700'
              fontSize='32px'
              fontFamily='poppins'
              fontStyle='bold'
              color='black'
            >
              Falhou em capturar
            </Text>
            <Flex
              fontWeight='700'
              fontSize='16px'
              fontFamily='poppins'
              fontStyle='bold'
              color='black'
            >
              <Text mr='0.5em'>A taxa de captura é</Text>
              <Text color={cardColor}>{capture_rate}</Text>
              <Text mr='0.5em'>, você tem</Text>
              <Text color={cardColor}>{catchChance}</Text>
              <Text>% de chance.</Text>
            </Flex>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  )
}
export default AlertCapturar
