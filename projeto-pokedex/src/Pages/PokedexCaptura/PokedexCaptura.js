import { HeaderPagCap } from "../../Componentes/Header/HeaderPagCap/HeaderPagCap"
import Carddetalhe from "../../Componentes/PokemonCard/Carddetalhe"
import { PokedexCapCss } from "../PokedexLista/Style"
import { Body} from "./Style"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Text } from '@chakra-ui/react'


export const PokedexCaptura = (props) =>{



    return(
        <div>
        <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"/>
        <PokedexCapCss>
            <HeaderPagCap pokemons = {props.pokemons} setPokemons = {props.setPokemons} setPokemonsEstanosEscolhidos = {props.setPokemonsEstanosEscolhidos} pokemonEstanosescolhidos = {props.pokemonEstanosescolhidos} detalhe={props.detalhe} setDetalhe={props.setDetalhe} pokemonsEscolhidos = {props.pokemonsEscolhidos} setPokemonsEscolhidos = {props.setPokemonsEscolhidos}/>

            <Body>
            <Text ml='20px' color='#61ADAA' fontSize='50px' as='abbr'>Detalhes</Text>
                <Carddetalhe  detalhe = {props.detalhe} setDetalhe ={props.setDetalhe}/>
            </Body>
        </PokedexCapCss>
        </div>
    )
}