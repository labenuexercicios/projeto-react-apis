import { HeaderContainer } from "./HeaderStyle";
import imgLogo from "../../assets/img/logoimg.png";
import ClickMe from "../Chakra/ClickMe";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { PAGES } from "../../utils";



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
                <div></div>
            <div className="logo">
                <img onClick={goToHome} className="img-logo" src={imgLogo} alt="Logo icon"/>
            </div>
            {
                page && page === PAGES.POKEMON_LIST_PAGE && <ClickMe onClick={goToPokedex} text={'Pokédex'}/>
            }

            {
                page && page === PAGES.POKEMON_DETAILS &&  <ClickMe onClick={goToPokedex} text={'Excluir da Pokedex'}/>
            }
                
            </div>
          
        </HeaderContainer>
    );

}

export default Header;
