import { HeaderContainer } from "./HeaderStyle";
import imgLogo from "../../assets/img/logoimg.png";
import ClickMe from "../Chakra/ClickMe";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { isDuplicated, PAGES, remove } from "../../utils";
import imgSeta from "../../assets/img/eva_arrow-ios-back-outline.png"
import CustomModal from "../Chakra/CustomModal";
import { useDisclosure } from "@chakra-ui/react";


function Header(props){
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const { isOpen: isRemoveOpen, onOpen: onRemoveOpen, onClose: onRemoveClose } = useDisclosure();

    const goToPokedex = () => {
      navigate("/pokedex")
    }
    const goToHome = () => {
        navigate("/")
    }

    const isRemoveValid = (id) => {
        console.log(isDuplicated(id))
        return (page && page === PAGES.POKEMON_DETAILS) && isDuplicated(id);
    }

    function removePokemon(id){
        remove(id);
        onRemoveOpen();
        setTimeout(()=>{
            onRemoveClose();
            goToPokedex();
        },2500);
    }
    

    const { page } = props;

    return(
        <HeaderContainer>
            <CustomModal 
                isOpen={isRemoveOpen}
                onOpen={onRemoveOpen}
                onClose={onRemoveClose}
                title={'Oh, no!'}
                subtitle={'O Pokémon foi removido da sua Pokédex'}
            />
            <div className="navegar-home">
           
                <div className="link">
                    {
                        page && page !== PAGES.POKEMON_LIST_PAGE  && <button onClick={goToHome} className="button-todos-pokemons"> <img  className="img-seta" src={imgSeta} alt="seta icon"/>Todos os Pokémons </button>
                    }
                </div>

            <div className="logo">
                <img onClick={goToHome} className="img-logo" src={imgLogo} alt="Logo icon"/>
            </div>
            {
                page && page === PAGES.POKEMON_LIST_PAGE && <ClickMe onClick={goToPokedex} text={'Pokédex'}/>
            }

            {
                isRemoveValid(id) && <ClickMe className="button-excluir"onClick={()=>{ removePokemon(id) }} text={'Excluir da Pokédex'}/>
            }
                
            </div>
          
        </HeaderContainer>
    );

}

export default Header;
