import { useNavigate } from "react-router-dom"
import PokemonLogo from "../../Assets/PokemonLogo.svg"
import { Container, Image, Link } from "./styles"
import { goToHomePage } from "../../Router/coordinator"

function HeaderPokedex () {

    const navigate = useNavigate()

    return(
        <Container>
            <Link onClick={() => goToHomePage(navigate)}>{"< Todos os Pokémons"}</Link>
            <Image src={PokemonLogo} alt="PokemonLogo"></Image>            
        </Container>
    )
}

export default HeaderPokedex