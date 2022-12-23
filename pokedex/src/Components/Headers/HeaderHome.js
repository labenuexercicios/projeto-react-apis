import { useNavigate } from "react-router-dom"
import PokemonLogo from "../../Assets/PokemonLogo.svg"
import { Container, Image, Button } from "./styles"
import { goToPokedex } from "../../Router/coordinator"

function HeaderHome (props) {

    const navigate = useNavigate()

    return(
        <Container>
            <Image src={PokemonLogo} alt="PokemonLogo"></Image>
            <Button onClick={() => goToPokedex(navigate) && props.setActiveScreen("Pokédex")}>Pokédex</Button>
        </Container>
    )
}

export default HeaderHome
