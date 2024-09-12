import { useNavigate } from "react-router-dom";
import Logo from "../../icons/logopokemon.jpg"
import { goToPokedexPage } from "../../routes/Coordinator";
import { Button, HeaderContainer } from "./style";


function Header () {

    const navigate = useNavigate();
    
    return (
        <HeaderContainer>
            <div className="div-logo">
                <img className="img" src={Logo} alt="image-logo" />
            </div>
            <Button className="button" onClick={()=> goToPokedexPage(navigate)}>
                Pokedex
            </Button>
        </HeaderContainer>
    )
}
export default Header;