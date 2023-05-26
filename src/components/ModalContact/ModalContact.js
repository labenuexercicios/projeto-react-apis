import { Flex, Heading, Image } from '@chakra-ui/react'
import Modal from 'react-modal'
import React, { useContext } from 'react'
import github from '../../assets/logogithub-removebg-preview.png'
import linkedin from '../../assets/LogoLinkedin.png'
import { GlobalContext } from '../../contexts/GlobalContext'

export const ModalContact = () => {

  const context = useContext(GlobalContext)
    const {isOpenContact, setIsOpenContact} = context

  function closeModalContact() {
    setIsOpenContact(false)
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
      <Modal isOpen={isOpenContact} onRequestClose={closeModalContact} style={customStyle}>
        <Flex
          justifyContent='center'
          flexDirection='column'
          alignItems='center'
          gap='16px'
          onClick={closeModalContact}
        >
          {
            isOpenContact ?
              <>
                <Heading>Contato:</Heading>
                <Flex>
                  <a href='https://github.com/lucasbreiafullstack'><Image height='9vh'width='4.8vw' src={github} alt='Github'/></a>
                  <a href='https://www.linkedin.com/in/lucas-breia/'><Image height='9vh'width='5vw' src={linkedin} alt='Linkedin'/></a>
                </Flex>
              </>:
              <></>
          }
        </Flex>
      </Modal>
    </>
  )
}