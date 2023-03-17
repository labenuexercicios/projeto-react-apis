import {
  ModalOverlay,
  Modal,
  ModalContent,
  ModalBody,
  ModalHeader,
  Heading,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

export function AddModal({ isOpen, onClose, pokemon }) {
  const location = useLocation();
  const { pokedex } = useContext(GlobalContext);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="28.188rem" h="13.875rem" borderRadius="0.75rem">
          <>
            {location.pathname === "/" ||
            pokedex.find((item) => pokemon === item.data.id) ? (
              <>
                <ModalHeader>
                  <Heading
                    fontFamily="Poppins"
                    textAlign="center"
                    fontWeight="
                    43.75rem"
                    fontSize="3rem"
                    mt="3rem"
                  >
                    Gotcha!
                  </Heading>
                </ModalHeader>
                <ModalBody color={"black"} fontFamily="Poppins"
                    textAlign="center">
                  O Pokémon foi adicionado a sua Pokedéx
                </ModalBody>
              </>
            ) : (
              <>
                <ModalHeader> 
                <Heading
                    fontFamily="Poppins"
                    textAlign="center"
                    fontWeight="
                    43.75rem"
                    fontSize="3rem"
                    mt="3rem"
                  >
                    Oh, No!
                  </Heading>
                  </ModalHeader>
                <ModalBody color={"black"} fontFamily="Poppins"
                    textAlign="center">
                  O Pokémon foi removido da sua Pokedéx
                </ModalBody>
                
              </>
            )}
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
