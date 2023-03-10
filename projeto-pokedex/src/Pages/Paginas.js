import { ChakraProvider } from "@chakra-ui/react"
import { useState } from "react"
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import { Paginadeerro } from "./Paginadeerro"
import { PokedexCaptura } from "./PokedexCaptura/PokedexCaptura"
import { Pokedexdetalhe } from "./PokedexDetalhe/PokedexDetalhe"
import { PokedexLista2 } from "./PokedexLista/PokedexLista"



export const Paginas = () =>{
    const [pokemonsEscolhidos, setPokemonsEscolhidos] = useState([])
    const [detalhe, setDetalhe] = useState([])
    // console.log(detalhe)
    // console.log("paginas:", pokemonsEscolhidos)

    return(
        <ChakraProvider  >
            <BrowserRouter>
                <Routes>
                    <Route index element={<PokedexLista2 detalhe={detalhe} setDetalhe={setDetalhe} pokemonsEscolhidos= {pokemonsEscolhidos} setPokemonsEscolhidos = {setPokemonsEscolhidos}/>}/>
                    <Route path="detalhe" element={<Pokedexdetalhe pokemonsEscolhidos= {pokemonsEscolhidos} setPokemonsEscolhidos = {setPokemonsEscolhidos}/>}/>
                    <Route path="cap" element={<PokedexCaptura detalhe={detalhe} setDetalhe={setDetalhe}/>}/>

                    <Route path="*" element={Paginadeerro}/>
                </Routes>
            </BrowserRouter>
        </ChakraProvider>

 
    )
}