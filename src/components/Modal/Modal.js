 import React from "react";
 import { ModalContainer, BackGround } from "./styled";
 
 function Modal({isOpen, children,  setIsClose}) {

  if(isOpen) {
  return (
    <BackGround onClick={setIsClose}>
    <ModalContainer>
      <div>
      {children}
      </div>
      </ModalContainer>
    </BackGround>
  )
  }
  return null
}
export default Modal;

