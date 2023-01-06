import { HeaderContainer } from "./HeaderStyle";
import imgLogo from "../../assets/img/logoimg.png";
import ClickMe from "../Chakra/ClickMe";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { PAGES } from "../../utils";
import imgSeta from "../../assets/img/eva_arrow-ios-back-outline.png"



function Header(props){
    const location = useLocation();
    const navigate = useNavigate()

    const goToPokedex = () => {
      navigate("/pokedex")
    }
    const goToHome = () => {
        navigate("/")
    }

    const { page } = props;

    return(
        <HeaderContainer>
            <div className="navegar-home">
           
                <div className="link">
                    {
                        page && page !== PAGES.POKEMON_LIST_PAGE  && <button onClick={goToPokedex} className="button-todos-pokemons"> <img  className="img-seta" src={imgSeta} alt="seta icon"/>Todos os Pokémons </button>
                    }
                </div>

            <div className="logo">
                <img onClick={goToHome} className="img-logo" src={imgLogo} alt="Logo icon"/>
            </div>
            {
                page && page === PAGES.POKEMON_LIST_PAGE && <ClickMe onClick={goToPokedex} text={'Pokédex'}/>
            }

            {
                page && page === PAGES.POKEMON_DETAILS &&  <ClickMe className="button-excluir"onClick={goToPokedex} text={'Excluir da Pokédex'}/>
            }
                
            </div>
          
        </HeaderContainer>
    );

}

export default Header;
