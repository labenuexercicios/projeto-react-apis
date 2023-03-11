import { Flex } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Recebeositens, Rebecedadosdecadapokemon } from "../../Componentes/Api/Api"
import { HeaderPagLista } from "../../Componentes/Header/HeaderPagLista/HeaderPagLista"
import { HeaderPagListaCss2 } from "../../Componentes/Header/HeaderPagLista/Style"
import { PokemonCard } from "../../Componentes/PokemonCard/PokemonCard"
import { Containerdoscard, DeixarRoll } from "../../Componentes/PokemonCard/Style"
import { PokedexListaCss } from "./Style"
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


export const PokedexLista2 = (props) =>{
    

    const [carregando, setCarregando] = useState(false)



    const guardaosvalores = async () =>{
        setCarregando(true)
        try {
                const result = await Recebeositens()
                const promises = result.map((pokemon) =>{
                    return Rebecedadosdecadapokemon(pokemon.url)
                })
                const resultado = await Promise.all(promises)
                props.setPokemons(resultado)
                setCarregando(false)

        } catch (error) {
            console.log("erro:", error)
        }
    }
    
    useEffect(()=>{
        if(props.pokemons.length === 0){
            guardaosvalores()
        }
    },[])

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
            {carregando?
            (
                <PokedexListaCss>
                <HeaderPagLista/>
                <HeaderPagListaCss2>
                    <h1>TODOS OS POKEMONS</h1>
                </HeaderPagListaCss2>
                    <h2>Carregando a lista patrão, guenta ai!</h2>
                </PokedexListaCss>

            )
            :(
                

                <PokedexListaCss>
                    <HeaderPagLista/>
                    <HeaderPagListaCss2>
                        <h1>TODOS OS POKEMONS</h1>
                    </HeaderPagListaCss2>

                    <DeixarRoll>
                    <PokemonCard setPokemonsEstanosEscolhidos = {props.setPokemonsEstanosEscolhidos} pokemonEstanosescolhidos = {props.pokemonEstanosescolhidos} detalhe = {props.detalhe} setDetalhe ={props.setDetalhe} pokemons = {props.pokemons} setPokemons = {props.setPokemons} pokemonsEscolhidos= {props.pokemonsEscolhidos} setPokemonsEscolhidos = {props.setPokemonsEscolhidos} />
                    </DeixarRoll>
                </PokedexListaCss>


        )
        }

        </div>
    )
}