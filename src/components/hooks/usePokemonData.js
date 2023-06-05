// import { useEffect, useState } from "react";
// import axios from "axios";

// export function usePokemonData() {

// const [pokemonList, setPokemonList] = useState([]);

//   const getPokemonList = async () => {

//         try {
//             const response = await axios.get("https://pokeapi.co/api/v2/pokemon")
//             setPokemonList(response.data.results)
//             console.log(response.data.results)
//         }
//         catch (error) {
//             console.log(error.response)
//         }
//     }

// useEffect(()=>{getPokemonList()}, [])

// return pokemonList
// }