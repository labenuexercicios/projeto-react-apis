import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";
import { MainModal } from "./styleModal"

function Modal(props){
const context = useContext(GlobalContext)

const renderModal = ()=>{

switch (props.action) {
    case 'add':
        return <>
                <h2>Gotcha!</h2>
                <p>Pokemon capturado!</p>
</>
            
            case 'remove':
                return <>
                <h2>Oh, no!</h2>
                <p>O Pokemon removido da Pokedex</p>
                </>       
            default:
                return <>
                <h2>Ops!</h2>
                <p>Algo deu errado! Verifique.</p>
                </>                
        }
    }
    return(
        <>
        <MainModal onClick={()=>{context.setShowModal(false)}}>
            {renderModal()}
        </MainModal>
        </>
    )
}

export default Modal