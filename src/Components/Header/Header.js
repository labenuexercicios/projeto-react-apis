import { HeaderContainer } from "./HeaderStyle";
import imgLogo from "../../assets/img/logoimg.png";
import ClickMe from "../Chakra/ClickMe";
import { Navigate, useNavigate } from "react-router-dom";



function Header(props){


    const navigate = useNavigate()

    const goToPokedex = () => {
      navigate("/pokedex")
    }
    const goToHome = () => {
        navigate("/")
      }

    return(
        <HeaderContainer>
            <div className="navegar-home">
                <div></div>
            <div className="logo">
                <img onClick={goToHome} className="img-logo" src={imgLogo} alt="Logo icon"/>
            </div>
                <ClickMe onClick={goToPokedex} text={'Pokédex'}/>
            </div>
          
        </HeaderContainer>
    );

}

export default Header;
