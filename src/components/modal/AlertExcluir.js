import {
  Text,
  Flex,
  Image,
  ModalOverlay,
  Modal,
  ModalContent,
  ModalHeader
} from '@chakra-ui/react'
import { SyncLoader } from 'react-spinners'

const AlertExcluir = ({
  isOpen,
  onClose,
  showSecondModalExcluir,
  setShowSecondModalExcluir,
  name,
  imageForAlertExcluir,
  cardColor
}) => {
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
          borderRadius='xl'
          p='0.5em'
          minWidth='fit-content'
          objectFit='contain'
          bg='white'
        >
          <ModalHeader>
            <Flex align='center' justify='center' direction='column'>
              <Flex
                align='center'
                justify='center'
                fontWeight='700'
                fontSize='24px'
                borderRadius='12px'
                color='black'
              >
                <Text mr='0.3em' fontFamily='poppins' fontStyle='bold'>
                  Adeus
                </Text>
                <Text color={cardColor} textTransform='capitalize'>
                  {name}
                </Text>
                <Text>!</Text>
              </Flex>
              <Flex align='center' justify='center' gap='0.6em'>
                <SyncLoader color={cardColor} size={12} />
                <Image src={imageForAlertExcluir} alt={name} />
              </Flex>
            </Flex>
          </ModalHeader>
        </ModalContent>
      </Modal>

      <Modal
        onClose={() => setShowSecondModalExcluir(false)}
        isOpen={showSecondModalExcluir}
        isCentered
        closeOnOverlayClick={false}
        closeOnEsc={false}
      >
        <ModalOverlay />
        <ModalContent minWidth='fit-content' objectFit='contain' p='1em' bg='white'>
          <Flex
            align='center'
            justify='center'
            direction='column'
            borderRadius='12px'
            h='222px'
            color='black'
          >
            <Text
              fontWeight='700'
              fontSize='48px'
              fontFamily='poppins'
              fontStyle='bold'
            >
              Oh, no!
            </Text>
            <Flex
              fontWeight='700'
              fontSize='20px'
              fontFamily='poppins'
              fontStyle='bold'
              w='100%'
              align='center'
              justify='center'
            >
              <Text color={cardColor} mr='0.5em' textTransform='capitalize'>
                {name}
              </Text>
              <Text fontFamily='poppins' fontStyle='bold'>
                foi removido da sua Pokedéx!
              </Text>
            </Flex>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  )
}
export default AlertExcluir
