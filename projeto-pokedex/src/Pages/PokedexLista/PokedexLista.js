import { useEffect, useState } from "react"
import { Recebeositens, Rebecedadosdecadapokemon } from "../../Componentes/Api/Api"
import { HeaderPagLista } from "../../Componentes/Header/HeaderPagLista/HeaderPagLista"
import { HeaderPagListaCss2 } from "../../Componentes/Header/HeaderPagLista/Style"
import { PokemonCard } from "../../Componentes/PokemonCard/PokemonCard"
import { PokedexListaCss } from "./Style"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'


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
                localStorage.removeItem("Pokemons escolhidos");
                localStorage.removeItem("Pokemons Lista nova");
                setCarregando(false)
    
        } catch (error) {
            console.log("erro:", error)
        }
    }

    useEffect(()=>{
        const listaDeitensstorage2 = JSON.parse(localStorage.getItem("Pokemons Lista nova"))
        if(listaDeitensstorage2){
            props.setPokemons(listaDeitensstorage2)
        }
        if(!listaDeitensstorage2){
            guardaosvalores()
        }
        const listaDeitensstorage3 = JSON.parse(localStorage.getItem("Pokemons escolhidos"))
        if(listaDeitensstorage3){
         props.setPokemonsEscolhidos(listaDeitensstorage3)
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
                <Text color='green' fontSize='50px' as='abbr'>Carregando todos os pokemons</Text>
                </HeaderPagListaCss2>
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                />
                </PokedexListaCss>

            )
            :(
                

                <PokedexListaCss>
                    <HeaderPagLista/>
                    <HeaderPagListaCss2>
                    <Text color='#61ADAA' fontSize='50px' as='abbr'>Todos os pokemons</Text>
                    </HeaderPagListaCss2>

                    {/* <DeixarRoll> */}
                    <PokemonCard setPokemonsEstanosEscolhidos = {props.setPokemonsEstanosEscolhidos} pokemonEstanosescolhidos = {props.pokemonEstanosescolhidos} detalhe = {props.detalhe} setDetalhe ={props.setDetalhe} pokemons = {props.pokemons} setPokemons = {props.setPokemons} pokemonsEscolhidos= {props.pokemonsEscolhidos} setPokemonsEscolhidos = {props.setPokemonsEscolhidos} />
                    {/* </DeixarRoll> */}
                </PokedexListaCss>


        )
        }

        </div>
    )
}