import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Pokedexdetalhe } from "./PokedexDetalhe/PokedexDetalhe"
import { PokedexLista2 } from "./PokedexLista/PokedexLista"



export const Paginas = () =>{

    return(
        <ChakraProvider  >
            <BrowserRouter>
                <Routes>
                    <Route index element={<PokedexLista2/>}/>
                    <Route path="detalhe" element={<Pokedexdetalhe/>}/>

                </Routes>
            </BrowserRouter>
        </ChakraProvider>

 
    )
}