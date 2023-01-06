import React, { useEffect, useState } from 'react'
import { GlobalContext } from '../Rotas/Context/GlobalContext'
import { useContext } from 'react'
import {
    Flex,
    Center,
    ChakraProvider,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
} from '@chakra-ui/react'

export const UsarModal = () => {

    const context = useContext(GlobalContext)



    const {
        arrayPokedex,
        setArrayPokedex,
        isOpen,
        setIsOpen,
        isOpenDel,
        setIsOpenDel
    } = context

    const closed = () => {
        setIsOpenDel(false)
        setIsOpen(false)
    }
    return (
        < ChakraProvider>

            <Modal isOpen={isOpen || isOpenDel} onClose={() => { closed() }} isCentered>

                <ModalOverlay
                />
                <ModalContent
                    w='60vw'
                    h='30vh'>

                    <ModalHeader></ModalHeader>
                    <ModalCloseButton />
                    { isOpen? 
                    <Flex
                     flexDirection='column'
                     >
                        <Center
                            fontFamily="'popins', sans-serif"
                            fontWeight='700'
                            fontSize='32px'
                            padding='14px'>
                            Gotcha!</Center>
                        <Center
                            fontWeight='800'
                            fontSize='18px'
                            fontFamily="'popins', sans-serif"
                        >O pokémon foi adicionado na sua pokédex!
                        </Center>
                    </Flex> 
                    :
                      <Flex>
                      <Center
                          fontFamily="'popins', sans-serif"
                          fontWeight='700'
                          fontSize='32px'>
                          Oh no!</Center>
                      <Center
                          fontWeight='800'
                          fontSize='18px'
                          fontFamily="'popins', sans-serif"
                      >O pokémon foi removido da sua pokédex!
                      </Center>
                  </Flex>
}

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={() => { setIsOpen(false) }}>
                            Fechar
                        </Button>

                    </ModalFooter>
                </ModalContent>
            </Modal>

        </ ChakraProvider>




    )
}