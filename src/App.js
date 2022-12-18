import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import Router from "./routes/Router"
import { useState, useEffect } from "react"
import axios from "axios"
//import { BASE_URL } from "./constants/url"
import { GlobalContext } from "./contexts/GlobalContext"


const App = () => {

    const [pokelist, setPokelist] = useState([]);
    const [pokedex, setPokedex] = useState([]);
    const [typePoke, setTypePoke] = useState([])


    const fetchPokelist = () => {
        
            axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=27').then((response)=>{
                //console.log(response.data.results)
                const inforPokemon = response.data.results.map((item)=>{
                    return(
                        axios.get(item.url)                        
                    )
                })
                Promise.all(inforPokemon).then((res)=>{
                    const buscaInfo = res.map((item)=>{
                        return(
                            item.data                    
                            )                            
                    })
                    //console.log("aqui", buscaInfo)
                  
                    setPokelist(buscaInfo)
                                      
                  

                }).cath(()=>{

                })

            }).catch((error)=>{

            })
            //console.log(response)          
           
    }
    //console.log(pokelist) 
    
   
     

    useEffect(() => {
        fetchPokelist();
        // pokemonInformacao();
       
    }, []);
   
  



// const fetchPokelist = async () => {
//   try {
//     const response = await axios.get(BASE_URL);
//     setPokelist(response.data.results);
//     console.log(response.data.results)

//   } catch (error) {
//     console.log("Erro ao buscar lista de pokemons");
//     console.log(error.response);
//   }
// };
// console.log(pokelist)

//para ps botões 
const addToPokedex = (pokemonToAdd) => {
  const isAlreadyOnPokedex = pokedex.find(
    (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
  );

  if (!isAlreadyOnPokedex) {
    const newPokedex = [...pokedex, pokemonToAdd];
    setPokedex(newPokedex);
  }
};

const removeFromPokedex = (pokemonToRemove) => {
  const newPokedex = pokedex.filter(
    (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
  );

  setPokedex(newPokedex);
};

const context = {
    pokedex,
    pokelist,
    pokedex,
    setPokelist,
    addToPokedex,
    removeFromPokedex,
    typePoke,
    setTypePoke,
    fetchPokelist
        
}



return (
    <GlobalContext.Provider value={context}>
        <ChakraProvider >
            <Router />
        </ChakraProvider>
    </GlobalContext.Provider>
)
    }

export default App
