import { Button, Heading, Text, useConst } from "@chakra-ui/react"
import { StyledButton, StyledHeader, styledHeader, StyledImg, StyledP, StyledBack, StyledBackDiv, StyledDiv } from "./StyledHeader"
import Logo from "../../Assets/PokemonLogo.png"
import { useNavigate, useLocation } from "react-router-dom"
import { goToMyPokedexPage, goToPokedexPage } from "../../Routes/coordinator"
import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../Contexts/GlobalContext"
import { PopUp } from "../PopUp/PopUp"


export const Header = () => {
    const navigate = useNavigate()

    const { pokemons, render, setRender, capturados, setCapturados, idButton, capturar, gotcha, setGotcha, myPokedex, setMyPokedex } = useContext(GlobalContext)

    const [color, setColor] = useState("")
    const [texto, setTexto] = useState("Pokedéx")
    const [textoButton, setTextoButton] = useState("")
    const [size, setSize] = useState("24px")
    const [renderButton, setRenderButton] = useState(true)


    const idToBeUsed = JSON.parse(localStorage.getItem("idButton"))

    // console.log(idToBeUsed)


    useEffect(()=>{
        
        if(location.includes("/detailsPage")){
            if (capturados.find((pokemon) => { return (pokemon.id === idToBeUsed) !== undefined })) {
                setSize("16px")
                setTexto("Excluir da Pokedéx")
                setColor("#FF6262")
                
            }
        }
    },[color])


    // const [location, setLocation] = useState(useLocation().pathname)//Fazer renderizção condicional do header com isso aqui

    const location = useLocation().pathname

    useEffect(() => {

        if (location === "/") {
            setRenderButton(true)
            setRender(false)
            setTexto("Pokedéx")
            setSize("24px")
            setColor("#33A4F5")
        }
        else {
            if (location === "/myPokedex" || location.includes("/detailsPage")) {
                setRender(true)
            }
        }
        if (location.includes("detailsPage")) {
            setRenderButton(true)
            // console.log(capturados.find((pokemon) => { return (pokemon.id === idButton) }))
            if (capturados != [] && capturados.find((pokemon) => { return (pokemon.id === idButton) }) === undefined) {
                setTexto("Adicionar na Pokedéx")
                setSize("16px")
                setColor("#33A4F5")
            }
            else if (capturados.find((pokemon) => { return (pokemon.id === idButton) !== undefined })) {
                setSize("16px")
                setTexto("Excluir da Pokedéx")
                setColor("#FF6262")
            }
        }

        if (location === "/myPokedex") {
            setRenderButton(false)
        }
    }, [location]);

    const handleClick = () => {

        if (location === "/") {
            goToMyPokedexPage(navigate)
            setGotcha(false)
        }
        else {
            if (color === "#33A4F5") {
                const capturando = pokemons.find((pokemon) => { return (pokemon.id === idButton) })
                setCapturados([...capturados, capturando])
                setMyPokedex([...myPokedex, capturando])
                setGotcha(true)
                setTexto("Excluir da Pokedéx")
                setColor("#FF6262")
                setTimeout(() => setGotcha(false), 3000)
                console.log(capturando)
            }
            if (color === "#FF6262") {
                const capturando = capturados.find((pokemon) => { return (pokemon.id === idButton) })
                setCapturados(capturados.filter((pokemon) => { return (pokemon.id) != capturando.id }))
                setMyPokedex(capturados.filter((pokemon) => { return (pokemon.id) != capturando.id }))
                setGotcha(true)
                setTexto("Adicionar na Pokedéx")
                setColor("#33A4F5")
                setTimeout(() => setGotcha(false), 3000)
                console.log(capturando)
            }

        }
    }


    return (
        <StyledHeader>
            {gotcha && color === "#FF6262" && <PopUp texto={"Gotcha!"} descricao={"O Pokémon foi adicionado a sua Pokédex"} />}
            {gotcha && color === "#33A4F5" && <PopUp texto={"Oh, No!"} descricao={"O Pokémon foi removido da sua Pokedéx"} />}
            {render && <StyledBack onClick={() => { goToPokedexPage(navigate); setGotcha(false) }
            }>{"<"}Todos Pokemons</StyledBack>}
            {!render && <StyledDiv />}
            <StyledImg src={Logo} />
            {renderButton && <StyledButton color={color} onClick={handleClick}>
                <StyledP size={size}>{texto}</StyledP>
            </StyledButton>}
            {!renderButton && <StyledDiv />}

        </StyledHeader>
    )
}