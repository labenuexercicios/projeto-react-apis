// import axios from "axios"
// import { useEffect, useState } from "react"

// export const useRequestData = (initialState, path, header) => {

//     const [dados, setDados] = useState(initialState)
//     const [pokemonData, setPokemonData] = useState([]);


//     const recebeDados = () => {

//         axios.get(`https://pokeapi.co/api/v2/pokemon/${path}`)
//             .then((response) => {
//                 setDados(response.data.results)
//             })
//             .catch((error) => {
//                 console.log(error.response)
//             })

//             dados.map((pokemon) => {
//                 axios.get(`${pokemon.url}`)
//                     .then((response) => {
//                         setPokemonData([...pokemonData, response.data])
//                         console.log(response.data)
//                         // console.log(pokemonData)
//                     })
    
//                     .catch((error) => console.log(error));
//             })
//             console.log(pokemonData)
//         }
        


    

//     useEffect(() => {
//         recebeDados()}, [])

//     return [dados]

// }


// import axios from "axios";
// import { useEffect, useState } from "react";

// export const useRequestData = (initialState, path, header) => {
//   const [dados, setDados] = useState(initialState);
//   const [pokemonData, setPokemonData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${path}`);
//       setDados(response.data.results);
//       const pokemonDetails = await Promise.all(
//         response.data.results.map(async (pokemon) => {
//           const result = await axios.get(pokemon.url);
//           return result.data;
//         })
//       );
//       setPokemonData(pokemonDetails);
//     };
//     fetchData();
//   }, [path]);

//   console.log(pokemonData)

//   return [dados, pokemonData];
// };


import axios from "axios"
import { useEffect, useState } from "react"

export const useRequestData = (initialState, path, header) => {
  const [dados, setDados] = useState(initialState);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${path}`)
      .then((response) => {
        const pokemonUrls = response.data.results.map((pokemon) => pokemon.url);
        return axios.all(pokemonUrls.map((url) => axios.get(url)))
      })
      .then((responses) => {
        const pokemonData = responses.map((response) => response.data);
        setDados(pokemonData);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [path]);

  return [dados];
}












