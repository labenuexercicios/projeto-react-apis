import { HeaderPagCap } from "../../Componentes/Header/HeaderPagCap/HeaderPagCap"
import { HeaderPagListaCss2 } from "../../Componentes/Header/HeaderPagLista/Style"
import Carddetalhe from "../../Componentes/PokemonCard/Carddetalhe"
import { PokedexCapCss, PokedexListaCss } from "../PokedexLista/Style"
import { Body, CssdoCarddetalhe } from "./Style"



export const PokedexCaptura = (props) =>{

    // console.log(props)

    return(
        <PokedexCapCss>
            <HeaderPagCap pokemons = {props.pokemons} setPokemons = {props.setPokemons} setPokemonsEstanosEscolhidos = {props.setPokemonsEstanosEscolhidos} pokemonEstanosescolhidos = {props.pokemonEstanosescolhidos} detalhe={props.detalhe} setDetalhe={props.setDetalhe} pokemonsEscolhidos = {props.pokemonsEscolhidos} setPokemonsEscolhidos = {props.setPokemonsEscolhidos}/>
            {/* <HeaderPagListaCss2>
                Opa
            </HeaderPagListaCss2> */}
            <Body>
                <p>Detalhes</p>
                {/* <CssdoCarddetalhe> */}
                <Carddetalhe  detalhe = {props.detalhe} setDetalhe ={props.setDetalhe}/>
                {/* </CssdoCarddetalhe> */}
            </Body>
        </PokedexCapCss>
    )
}