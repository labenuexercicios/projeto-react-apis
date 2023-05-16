import { Flex, Heading, Text } from '@chakra-ui/react'
import Modal from 'react-modal'
import React, { useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'

export const ModalConfirm = () => {

  const context = useContext(GlobalContext)
  const { isOpen, setIsOpen, isOpenDel, setIsOpenDel } = context

  function closeModal() {
    setIsOpen(false)
    setIsOpenDel(false)
  }

  const customStyle = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      borderRadius: '12px',
      width: '450px',
      height: '220px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: '1000'

    }
  }

  return (
    <>
      <Modal
        isOpen={isOpen || isOpenDel}
        onRequestClose={closeModal}
        style={customStyle}
      >
        <Flex
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
          onClick={closeModal}

        >
          {
            isOpenDel ?
              <>
                <Heading fontSize='48px' fontWeight='700'> Oh No!</Heading>
                <Text fontSize='16px' fontWeight='700' >O Pokemón foi removido da sua Pokedex!</Text>
              </> :
              <>
                <Heading fontSize='48px' fontWeight='700'> Gotcha!</Heading>
                <Text fontSize='16px' fontWeight='700'>O Pokemón foi adicionado a sua Pokedex!</Text>
              </>
          }
        </Flex>
      </Modal>
    </>
  )
}