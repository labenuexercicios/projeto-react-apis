import { PokemonCard } from "../../Components/PokemonCard/PokemonCard"
import { StyledCard } from "../../Components/PokemonCard/StyledPokemonCard"
import { StyledMain, StyledP, StyledContainer } from "./StyledPokedex"
import { useCompletePokemons, useRequestData } from "../../Hooks/UseRequestData"
import { useContext, useEffect } from "react"
import { GlobalContext } from "../../Contexts/GlobalContext"
import { PopUp } from "../../Components/PopUp/PopUp"
import { StyledGotcha } from "../../Components/PopUp/StyledPopUp"




export const PokedexPage = () => {

    const {pokemons, capturados, setCapturados,myPokedex, capturar, gotcha, setGotcha, colorToPass} = useContext(GlobalContext)

    useEffect(()=>{ if(myPokedex.lenght !== 0) {
        setCapturados(myPokedex)
    }}, [])

    // const popUpHandler = () => {
    //     if(gotcha === 2 || gotcha === 3){
    //         setGotcha(true)
    //     }
    //     else{
    //         setGotcha(false)
    //     }

    //     return(gotcha)
    // }
    
    return (
        <StyledMain>

            <StyledP>Todos Pokémons</StyledP>
            {gotcha && colorToPass === "white" && <PopUp texto={"Gotcha!"} descricao={"O Pokémon foi adicionado a sua Pokédex"}/>}
            {/* <PopUp/> */}
            <StyledContainer>
                {pokemons ? (
                    pokemons.map((pokemon) => (
                        <PokemonCard key={pokemon.id} pokemon={pokemon} name={pokemon.name} id={pokemon.id} sprite={pokemon.sprites.other["official-artwork"].front_default} types={pokemon.types} capturar={capturar} bgColor = {"white"} textoBotao={"Capturar!"}/>
                    ))
                ) : (
                    <p>Carregando...</p>
                )}
            </StyledContainer>
            {/* <PokemonCard /> */}
        </StyledMain>

    )
}