import Card3 from "./Card3"
import { Posicaodocard } from "./Style"


export const PokemonCard2 = (props) =>{

    return(
         <Posicaodocard>
            {props.pokemonsEscolhidos.map((pokemon, index) =>{
                return(
                    <Card3  detalhe = {props.detalhe} setDetalhe ={props.setDetalhe} setPokemonsEstanosEscolhidos = {props.setPokemonsEstanosEscolhidos} pokemonEstanosescolhidos = {props.pokemonEstanosescolhidos} key={index} pokemon = {pokemon} pokemonsEscolhidos= {props.pokemonsEscolhidos} setPokemonsEscolhidos = {props.setPokemonsEscolhidos} pokemons = {props.pokemons} setPokemons = {props.setPokemons}/>
                )
            })}
        </Posicaodocard>

    )
}