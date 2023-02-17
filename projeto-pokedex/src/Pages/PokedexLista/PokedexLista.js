import axios from "axios"
import { useState } from "react"
import { HeaderPagLista } from "../../Componentes/Header/HeaderPagLista/HeaderPagLista"
import { PokemonCard } from "../../Componentes/PokemonCard/PokemonCard"
import { PokedexListaCss } from "./Style"



export const PokedexLista2 = () =>{

    const [pokemons, setPokemons] = useState([])

    const Recebeositens =  async () =>{
        try{
           const resposta = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20")
           console.log(resposta.data.results)
           setPokemons(resposta.data.results)
        }
        catch(error){
            console.log(error.response)
        }

    }


    //Falta arrumar o global style, e arrumar o pokemoncard

    return(
        // <GlobalStyled>
        //     eai
        // </GlobalStyled>
        // <p>salve222</p>
        <PokedexListaCss>
            <HeaderPagLista/>
            <button onClick={Recebeositens}>Chamar funcao</button>
            {pokemons.map((pokemon) =>{
                return(
                    <PokemonCard key={pokemon.id} pokemons = {pokemons} Recebeositens = {Recebeositens}/>
                )
            })}
        </PokedexListaCss>
    )
}