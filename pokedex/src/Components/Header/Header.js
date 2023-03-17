import { Button, Heading, Text, useConst } from "@chakra-ui/react"
import { StyledButton, StyledHeader, styledHeader, StyledImg, StyledP, StyledBack, StyledBackDiv, StyledDiv } from "./StyledHeader"
import Logo from "../../Assets/PokemonLogo.png"
import { useNavigate, useLocation } from "react-router-dom"
import { goToMyPokedexPage, goToPokedexPage } from "../../Routes/coordinator"
import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../Contexts/GlobalContext"


export const Header = () => {
    const navigate = useNavigate()

    const { render, setRender, capturados, idButton } = useContext(GlobalContext)

    const [color, setColor] = useState("#33A4F5")
    const [texto, setTexto] = useState("Pokedéx")
    const [size, setSize] = useState("24px")
    const [renderButton, setRenderButton] = useState(true)



    // const [location, setLocation] = useState(useLocation().pathname)//Fazer renderizção condicional do header com isso aqui

    const location = useLocation().pathname


    useEffect(() => {

        if (location === "/") {
            setRenderButton(true)
            setRender(false)
            setTexto("Pokedéx")
            setSize("24px")
            setColor("#33A4F5")
            console.log(render)
        }
        else {
            if (location === "/myPokedex" || location.includes("/detailsPage")) {
                setRender(true)
                console.log(render)
            }
        }
        if (location.includes("detailsPage")) {
            setRenderButton(true)
            console.log(capturados.find((pokemon) => { return (pokemon.id === idButton)}))
            if (capturados.find((pokemon) => { return (pokemon.id === idButton)}) === undefined) {
                setTexto("Pokedéx")
                setSize("24px")
                setColor("#33A4F5")
                console.log(color)
            }
            else if(capturados.find((pokemon) => { return (pokemon.id === idButton) !== undefined })) {
                setSize("16px")
                setTexto("Excluir da Pokédex")
                setColor("#FF6262")}
            }
        
        if (location === "/myPokedex") {
            setRenderButton(false)
        }
    }, [location]);


    return (
        <StyledHeader>
            {render && <StyledBack onClick={() => goToPokedexPage(navigate)}>{"<"}Todos Pokemons</StyledBack>}
            {!render && <StyledDiv />}
            <StyledImg src={Logo} />
            {renderButton && <StyledButton color={color} onClick={() => goToMyPokedexPage(navigate)}>

                <StyledP size={size}>{texto}</StyledP>
            </StyledButton>}
            {!renderButton && <StyledDiv />}

        </StyledHeader>
    )
}