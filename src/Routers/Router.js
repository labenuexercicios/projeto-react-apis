import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../pages/home"
import { Detalhes } from "../pages/detalhes"
import { Pokedex } from "../pages/pokedex"
import React, { useEffect, useState } from "react";
import axios from "axios"
import { GlobalContext } from "../context/GlobalContext";



export function Router() {

    const [pokemons, setPokemons] = useState([]);
    const [addPoke, setAddPoke] = useState([])
    const [pokedetalhes, setPokeDetalhes] = useState([])
    const [modalIsOpen, setIsOpen] = React.useState(false)
    
   
   
    const context = {
        addPoke: addPoke,
        setAddPoke: setAddPoke,
        modalIsOpen,
        setIsOpen,
    }

    const resposta = (i) => {
    const receber = [];
    for (var i = 1; i < 31; i++ )
    receber.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    
    

    const pegar = axios
    .all(receber.map((item) => axios.get(item)))
  
    .then((res)=>{
        console.log(res);
       setPokemons(res)
      
       
    })
    .catch((erro)=>{
        console.log(erro);
    })}

   
    useEffect(()=>{
      resposta()
    },[])


    

    return (
    <GlobalContext.Provider value={context}>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home 
                pokemons={pokemons}
                setPokemons={setPokemons}
                addPoke={addPoke}
                setAddPoke={setAddPoke}
                pokedetalhes={pokedetalhes}
                setPokeDetalhes={setPokeDetalhes}
                

                />} />
                <Route path="/detalhes/:pokemon" element={<Detalhes 
                pokemons={pokemons}
                pokedetalhes={pokedetalhes}
                setPokeDetalhes={setPokeDetalhes}
                
               
                />} />
                <Route path="/pokedex" element={<Pokedex 
                 pokemons={pokemons}
                 setPokemons={setPokemons}
                 addPoke={addPoke}
                 setAddPoke={setAddPoke}
                />} />
            </Routes>
        </BrowserRouter>
    </GlobalContext.Provider>
    )
}