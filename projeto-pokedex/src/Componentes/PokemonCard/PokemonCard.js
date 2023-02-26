import { Card } from "./Card"


export const PokemonCard = (props) =>{

    const {pokemons} =props 
    return(
        <div>
            {pokemons.map((pokemon, index) =>{
                return(
                    <Card key={index} pokemon = {pokemon}/>
                )
            })}
        </div>
    )
}