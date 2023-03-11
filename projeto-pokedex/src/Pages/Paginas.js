import { ChakraProvider } from "@chakra-ui/react"
import { useState } from "react"
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import { Paginadeerro } from "./Paginadeerro"
import { PokedexCaptura } from "./PokedexCaptura/PokedexCaptura"
import { Pokedexdetalhe } from "./PokedexDetalhe/PokedexDetalhe"
import { PokedexLista2 } from "./PokedexLista/PokedexLista"



export const Paginas = () =>{
    const [pokemonsEscolhidos, setPokemonsEscolhidos] = useState([])
    const [pokemons, setPokemons] = useState([])
    console.log(pokemons)
    const [detalhe, setDetalhe] = useState([])
    const [pokemonEstanosescolhidos, setPokemonsEstanosEscolhidos] = useState(false)
    // console.log(detalhe)
    // console.log("paginas:", pokemonsEscolhidos)

    return(
        <ChakraProvider  >
            <BrowserRouter>
                <Routes>
                    <Route index element={<PokedexLista2 setPokemonsEstanosEscolhidos = {setPokemonsEstanosEscolhidos} pokemonEstanosescolhidos = {pokemonEstanosescolhidos} detalhe={detalhe} setDetalhe={setDetalhe} pokemonsEscolhidos= {pokemonsEscolhidos} setPokemonsEscolhidos = {setPokemonsEscolhidos} pokemons = {pokemons} setPokemons = {setPokemons}/> }/>

                    <Route path="detalhe" element={<Pokedexdetalhe detalhe={detalhe} setDetalhe={setDetalhe} setPokemonsEstanosEscolhidos = {setPokemonsEstanosEscolhidos} pokemonEstanosescolhidos = {pokemonEstanosescolhidos} pokemonsEscolhidos= {pokemonsEscolhidos} setPokemonsEscolhidos = {setPokemonsEscolhidos} pokemons = {pokemons} setPokemons = {setPokemons}/>}/>

                    <Route path="cap" element={<PokedexCaptura pokemonsEscolhidos = {pokemonsEscolhidos} setPokemonsEscolhidos = {setPokemonsEscolhidos} detalhe={detalhe} setDetalhe={setDetalhe} pokemons = {pokemons} setPokemons = {setPokemons} setPokemonsEstanosEscolhidos = {setPokemonsEstanosEscolhidos} pokemonEstanosescolhidos = {pokemonEstanosescolhidos}/>}/>

                    <Route path="*" element={Paginadeerro}/>
                </Routes>
            </BrowserRouter>
        </ChakraProvider>

 
    )
}