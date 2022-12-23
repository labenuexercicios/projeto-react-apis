import { useNavigate } from "react-router-dom"
import PokemonLogo from "../../Assets/PokemonLogo.svg"
import { Container, Image, Link } from "./styles"
import { goToHomePage } from "../../Router/coordinator"

function HeaderPokedex (props) {

    const navigate = useNavigate()

    return(
        <Container>
            <Link onClick={() => goToHomePage(navigate) && props.setActiveScreen("HomePage")}>{"< Todos os Pokémons"}</Link>
            <Image src={PokemonLogo} alt="PokemonLogo"></Image>            
        </Container>
    )
}

export default HeaderPokedex