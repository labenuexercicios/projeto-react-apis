import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import HomePage from "../Pages/HomePage/HomePage"
import Pokedex from "../Pages/Pokedex/Pokedex"
import DetailsPage from "../Pages/DetailsPage/DetailsPage"
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage"

function Router () {

    const [pokedex, setPokedex] = useState([])

    const addToPokedex = (pokemonToBeAdded) => {
        const newPokedex = [...pokedex]
    
        const pokemonFound = newPokedex.find(
          (pokemonInPokedex) => pokemonInPokedex.name === pokemonToBeAdded.name)
    
        if(!pokemonFound){
          const newPokemon = {...pokemonToBeAdded}
          newPokedex.push(newPokemon)
        } else {
          alert(`${pokemonFound.name} já foi capturado!`)
        }
        setPokedex(newPokedex)    
      }  

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage addToPokedex={addToPokedex}/>}/>
                <Route path="/pokedex" element={<Pokedex pokedex={pokedex}/>}/>
                <Route path="/:pokemonId" element={<DetailsPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router