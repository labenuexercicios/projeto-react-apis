import { Card } from "./Card"
import { CardStyle } from "./Style"


export const PokemonCard = (props) =>{

    const {pokemons} =props 
    return(
        <CardStyle>
            {pokemons.map((pokemon, index) =>{
                return(
                    <Card key={index} pokemon = {pokemon}/>
                )
            })}
        </CardStyle>
    )
}