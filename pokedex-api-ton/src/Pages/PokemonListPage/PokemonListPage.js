
import { useContext } from "react"
import Header from "../../Components/Header/Header"

import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import { GlobalContext } from "../../contexts/GlobalContext"
import { StyleH1, StyleList } from "./PokemonListStyle"



export const PokemonListPage = () => {

    

    return(
        <>
            <Header/>
            <StyleList>
                <PokemonCard />
                <StyleH1>Todos Pokemons</StyleH1>
            </StyleList>
        </>
    )
}