import Card2 from "./Card2"
import { Posicaodocard } from "./Style"


export const PokemonCard = (props) =>{


    const {pokemons} =props 
    return(
         <Posicaodocard>
            {pokemons.map((pokemon, index) =>{
                return(
                    <Card2 setPokemonsEstanosEscolhidos = {props.setPokemonsEstanosEscolhidos} pokemonEstanosescolhidos = {props.pokemonEstanosescolhidos} pokemons = {props.pokemons} setPokemons = {props.setPokemons} detalhe = {props.detalhe} setDetalhe ={props.setDetalhe} key={index} pokemon = {pokemon} pokemonsEscolhidos= {props.pokemonsEscolhidos} setPokemonsEscolhidos = {props.setPokemonsEscolhidos}/>
                )
            })}
        </Posicaodocard>

    )
}