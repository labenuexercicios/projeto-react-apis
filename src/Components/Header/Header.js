import { HeaderStyle, PokedexButton, PokemonLogo, VoltaHomePage, ButtonExcluirPokedex } from "./headerStyle";
import pokemonlogo from "../../assets/image 1.jpg";
import { goToPokedexPage, goToPokemonsListPage } from "../../routes/coordinator";
import { useLocation, useNavigate } from "react-router-dom";




export default function Header() {
   
    const location = useLocation()

    const navigate = useNavigate()

    const renderizaHeader = () => {
        switch (location.pathname) {
            case "/":
                return (
                    <>
                        <PokedexButton
                            onClick={() => goToPokedexPage(navigate)}>
                            <h1>
                                Pokédex
                            </h1>
                        </PokedexButton>
                        <PokemonLogo src={pokemonlogo} alt="pokemonlogo" />
                    </>

                )
            case "/pokedex":
                return (
                    <>
                        <VoltaHomePage onClick={() => goToPokemonsListPage(navigate)}>
                            <p>
                                Todos Pokémons
                            </p>
                        </VoltaHomePage>
                        <PokemonLogo src={pokemonlogo} alt="pokemonlogo" />

                    </>

                )

            default:
                return (
                    <>
                        <VoltaHomePage onClick={() => goToPokemonsListPage(navigate)}>
                            <p>
                                Todos Pokémons
                            </p>
                        </VoltaHomePage>

                        <ButtonExcluirPokedex  onClick={() => goToPokedexPage(navigate)}>
                            <h1>
                                Excluir da Pokédex
                            </h1>
                            
                        </ButtonExcluirPokedex>
                    </>
                )
        }
    }
    return (
        <>
            <HeaderStyle>{renderizaHeader()}</HeaderStyle>
        </>

    )
}

