import { HeaderContainer } from "./HeaderStyle";
import imgLogo from "../../assets/img/logoimg.png";
function Header(props){

    return(
        <HeaderContainer>
            <div className="navegar-home">
            </div>
            <div className="logo">
                <img className="img-logo" src={imgLogo} alt="Logo icon"/>
            </div>
            <button>Pokedéx</button>
        </HeaderContainer>
    );

}


export default Header;