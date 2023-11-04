import { useEffect } from "react"
import { Background, ModalContainer, Title, Text } from "./ModalStyle"


export const Modal = ({ openModal, setOpenModal, isFunctionCatch}) => {
    
    useEffect(()=>{
        const closePopUp = (e) => {
            if(e.key === 'Escape' && openModal){
                setOpenModal()
            }
        }

        window.addEventListener('keydown', closePopUp);
        return () => window.removeEventListener('keydown', closePopUp);
    }, [openModal]);
    

    if(openModal && isFunctionCatch){
        return(
            <Background onClick={setOpenModal}>
                <ModalContainer>
                    <Title>Gotcha!</Title>
                    <Text>O Pokémon foi adicionado a sua Pokédex</Text>
                </ModalContainer>
            </Background>
        )
    }else if(openModal && !isFunctionCatch){
        return( 
            <Background onClick={setOpenModal}>
                <ModalContainer removedPokemon={true} >
                    <Title>Oh, no!</Title>
                    <Text>O Pokémon foi removido da sua Pokédex</Text>
                </ModalContainer>
            </Background>
        )
    };
}

export default Modal