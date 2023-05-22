import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { ModalStyled } from "./Modal.styled";

const Modal = () => {
const { closeModal, isAddPokemon } = useContext(GlobalContext);



  return (
    <ModalStyled onClick={closeModal}>
    {isAddPokemon === true && (
      <section className="modal">
        <h1>Gotcha!</h1>
        <p>O Pokemon foi adicionado à Pokédex!</p>
      </section>
    )}
    {isAddPokemon === false && (
      <section className="modal">
        <h1>Oh, no!</h1>
        <p>O Pokemon foi removido da sua Pokédex!</p>
      </section>
    )}
  </ModalStyled>
  )
}

export default Modal