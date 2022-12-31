import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Flex,
    Heading,
    Text
} from '@chakra-ui/react'
import { GlobalContext } from '../../context/GlobalContext'
import { useContext } from 'react'


function ModalShow() {

    const context = useContext(GlobalContext)
    const { isOpen, setIsOpen, isOpenDel, setIsOpenDel } = context
    return (
        <>
            <Modal isOpen={isOpen || isOpenDel} onClose={() => {
                setIsOpen(false)
                setIsOpenDel(false)
            } }
                   
            >
                <ModalOverlay position={"absolute"}/>
                <ModalContent left={"225px"}>
                    <ModalBody >
                        <Flex
                            w={"450px"}
                            h={"220px"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            flexDirection={"column"}
                            
                        >
                            {isOpenDel ?
                                <>
                                    <Heading>Oh,no!</Heading>
                                    <Text fontWeight={"bold"}>
                                        O Pokémon foi removido da sua Pokédex
                                    </Text>
                                </>
                                : <>
                                    <Heading>Gotcha!</Heading>
                                    <Text fontWeight={"bold"}>
                                        O Pokémon foi adicionado a sua Pokédex
                                    </Text>

                                </>}
                        </Flex>
                    </ModalBody>

                </ModalContent>
            </Modal>
        </>
    )
}
export default ModalShow