import { Grid } from "@chakra-ui/react";
import { useContext } from "react";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { GlobalContext } from "../../contexts/GlobalContext";
import { ContainerPagina } from "./PokedexStyled";

export default function Pokedex(){
    const context = useContext(GlobalContext)

    const {pokedex,setPokedex,pokemons} = context;



    return(
    <ContainerPagina>
    <Header/>
            <Grid templateColumns={"repeat(4, 1fr)"} gap={6} paddingLeft={"130px"} paddingTop={"60px"} paddingBottom={"25px"}>
                {
                    pokedex.length > 0 ? pokedex.map((pokemon, index) => {
                        return (
                            <PokemonCard
                                key={index}
                                pokemon={pokemon}
                            />
                        )
                    }) : <p>Carregando</p>}
            </Grid>
    </ContainerPagina>
    )
}