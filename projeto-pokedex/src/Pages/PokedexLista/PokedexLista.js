import { useEffect, useState } from "react"
import { Recebeositens, Rebecedadosdecadapokemon } from "../../Componentes/Api/Api"
import { HeaderPagLista } from "../../Componentes/Header/HeaderPagLista/HeaderPagLista"
import { PokemonCard } from "../../Componentes/PokemonCard/PokemonCard"
import { Containerdoscard } from "../../Componentes/PokemonCard/Style"
import { PokedexListaCss } from "./Style"



export const PokedexLista2 = () =>{

    const [pokemons, setPokemons] = useState([])
    const [carregando, setCarregando] = useState(false)

    const guardaosvalores = async () =>{

        setCarregando(true)
        try {
            const result = await Recebeositens()
            const promises = result.map((pokemon) =>{
                return Rebecedadosdecadapokemon(pokemon.url)
            })
            const resultado = await Promise.all(promises)
            setPokemons(resultado)
            setCarregando(false)
        } catch (error) {
            console.log("erro:", error)
        }
    }
    useEffect(()=>{
        // console.log("carregou o guarda pokemons")
        guardaosvalores()
    },[])


    return(
        <PokedexListaCss>
        {carregando?
        (
            <h2>Carregando a lista patrão, guenta ai!</h2>
        )
        :(
            <PokedexListaCss>
                <HeaderPagLista/>
                <Containerdoscard>
                    <PokemonCard pokemons = {pokemons}  />
                    {/* <PokemonCard pokemons = {pokemons}  /> */}
                </Containerdoscard>
            </PokedexListaCss>
        )
        }
            {/* <HeaderPagLista/>
            <CardStyle>
            <PokemonCard pokemons = {pokemons}  />
            </CardStyle> */}
        </PokedexListaCss>
    )
}