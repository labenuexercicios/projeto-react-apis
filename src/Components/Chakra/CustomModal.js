import {
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure
} from "@chakra-ui/react";

export default function CustomModal(props) {

  const {
    isOpen,
    onClose,
    onOpen,
    title,
    subtitle
  } = props


  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <Center>
            <Text as={'b'} fontSize={'50px'}>{title}</Text>
          </Center>
          <Center>
            <Text as={'b'}>{subtitle}</Text>
          </Center>
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}