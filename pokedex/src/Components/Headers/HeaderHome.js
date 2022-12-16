import { useNavigate } from "react-router-dom"
import PokemonLogo from "../../Assets/PokemonLogo.svg"
import { Container, Image, Button } from "./styles"
import { goToPokedex } from "../../Router/coordinator"

function HeaderHome () {

    const navigate = useNavigate()

    return(
        <Container>
            <Image src={PokemonLogo} alt="PokemonLogo"></Image>
            <Button onClick={() => goToPokedex(navigate)}>Pokédex</Button>
        </Container>
    )
}

export default HeaderHome
