import { HeaderContainer } from "./HeaderStyle";
import imgLogo from "../../assets/img/logoimg.png";
import ClickMe from "../Chakra/ClickMe";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { isDuplicated, PAGES, remove, add } from "../../utils";
import imgSeta from "../../assets/img/eva_arrow-ios-back-outline.png"
import CustomModal from "../Chakra/CustomModal";
import { useDisclosure } from "@chakra-ui/react";


function Header(props){
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const { isOpen: isRemoveOpen, onOpen: onRemoveOpen, onClose: onRemoveClose } = useDisclosure();
    const { isOpen: isAddOpen, onOpen: onAddOpen, onClose: onAddClose } = useDisclosure();

    const goToPokedex = () => {
      navigate("/pokedex")
    }
    const goToHome = () => {
        navigate("/")
    }

    const isRemoveValid = (id) => {
        return (page && page === PAGES.POKEMON_DETAILS) && isDuplicated(id);
    }

    const isAddValid = (id) => {
        return (page && page === PAGES.POKEMON_DETAILS) && !isDuplicated(id);
    }

    function removePokemon(id){
        remove(id);
        onRemoveOpen();
        setTimeout(()=>{
            onRemoveClose();
            goToPokedex();
        },2500);
    }

    function addPokemon(id){
        console.log('ENTREI PRA ADICIONAR: '+id)
        if(!isDuplicated(id)){
            console.log('É VALIDO: '+id)
            console.log('OBJ: ',JSON.parse(localStorage.getItem('pokemon')))
            add(JSON.parse(localStorage.getItem('pokemon')));
            onAddOpen();
            setTimeout(()=>{
                onAddClose();
                goToPokedex();
            },2500);
        }
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
            <CustomModal 
                isOpen={isAddOpen}
                onOpen={onAddOpen}
                onClose={onAddClose}
                title={'Gotcha!'}
                subtitle={'O Pokémon foi adicionado a sua Pokédex'}
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
                isRemoveValid(id) && <ClickMe className="button-excluir" onClick={()=>{ removePokemon(id) }} text={'Excluir da Pokédex'}/>
            }

            {
                isAddValid(id) && <ClickMe onClick={()=>{ addPokemon(id) }} text={'Capturar'}/>
            }
                
            </div>
          
        </HeaderContainer>
    );

}

export default Header;
