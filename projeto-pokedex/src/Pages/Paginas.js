import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PokedexLista2 } from "./PokedexLista/PokedexLista"



export const Paginas = () =>{

    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<PokedexLista2/>}/>

            </Routes>
        </BrowserRouter>

 
    )
}