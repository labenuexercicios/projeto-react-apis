import PokemonLogo from "../../Assets/PokemonLogo.svg"
import { Container, Image, Button } from "./styles"

function Header () {
    return(
        <Container>
            <Image src={PokemonLogo} alt="PokemonLogo"></Image>
            <Button>Pokédex</Button>
        </Container>
    )
}

export default Header
