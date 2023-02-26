import React from "react";
import { HeaderPagLista } from "../../Componentes/Header/HeaderPagLista/HeaderPagLista";
import { PokedexListaCss } from "../PokedexLista/Style";



export const Pokedexdetalhe = () =>{

    return(
        <PokedexListaCss>
            <HeaderPagLista/>
            <p>salve</p>
            {/* <CardStyle>
            <PokemonCard/>
            </CardStyle> */}
        </PokedexListaCss>
    )
}

export default Pokedexdetalhe;