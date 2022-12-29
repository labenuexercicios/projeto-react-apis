import React from 'react'
import Header from "../../components/Header/Header"
// import axios from "axios";
import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
import { Container, TituloDetalhes } from "./Styles";
// import { typesPokemon } from "../../utils/typesPokemon";
// import { getColors } from "../../utils/getColors";
// import { BASE_URL } from '../../constants/url';
import { useParams } from 'react-router-dom'
import CardDetalhes from "../../components/CardDetalhes/CardDetalhes"


const Detalhes = () => {
  const urlCadaPoke = `https://pokeapi.co/api/v2/pokemon/`
  const {id} = useParams()
  const [details, setDetails] = useState(null)
  const [typeDetalhes, setTypeDetalhes] = useState([])
  const [typeDetalhes2, setTypeDetalhes2] = useState([])
  const [base, setBase] = useState([])

const fetchDetalhes = async () => {
    const APIResponse = await fetch(`${urlCadaPoke}${id}`)
    const data = await APIResponse.json()
    setDetails(data)
    setTypeDetalhes(data['types']['0']['type']['name'])
    setTypeDetalhes2(data['types']['1']['type']['name']) 
}
const functionBaseStart2 = async () => {
  setBase(details['stats'])
}

useEffect(()=>{
  // const pokemonUrl = `${urlCadaPoke}${id}`
  fetchDetalhes()
  // eslint-disable-next-line
},[])
useEffect(()=>{
  functionBaseStart2()
  // eslint-disable-next-line
},[fetchDetalhes])


  return (
    <>
    <Header isDetalhes={true}/>
    <Container>
      <TituloDetalhes><h2>Detalhes</h2></TituloDetalhes>
      {details && 
        <CardDetalhes base={base} details={details} typeDetalhes={typeDetalhes} typeDetalhes2={typeDetalhes2}/>}
     </Container>
    </>
  )
}

export default Detalhes




// function Detalhes(props) {
   
//   const {pokemonUrl} = props

//   const [pokemon, setPokemon] = useState({})
//   const [types, setTypes] = useState({})

//   useEffect(() => {
//     fetchPokemon();
//     fetchPokemonType();
//     // eslint-disable-next-line
//   }, []);

//   const fetchPokemon = async () => {
//     try {
//       const response = await axios.get(pokemonUrl);
//       setPokemon(response.data.results);
//     } catch (error) {
//       console.log("Erro ao buscar lista de pokemons");
//       console.log(error.response);
//     }console.log(pokemon)
//   };

//   const fetchPokemonType = async () => {
//     try {
//       const response = await axios.get(pokemonUrl);
//       setTypes(response.data.types[0].type.name);
//     } catch (error) {
//       console.log("Erro ao buscar lista de tipos de pokemons");
//       console.log(error);
//     }console.log(types)
//   };

  

//   return (
  //   <>
  //     <Header/>
  //     <Container cardColor={getColors(types)}>
  //       <Img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={pokemon.name} />
  //       <span>{pokemon.name}</span>
  //       <div>{pokemon.types?.map((typePokemon) => {
  //         return (
  //         <>
  //           <span>{typePokemon.type.name}</span>
  //           <PokemonType src={typesPokemon(typePokemon.type.name)} alt={`${typePokemon.type.name}`}/>
  //         </>
  //       )})}
  //       </div>
  //     </Container>
  //   </>
  // );
// }


// export default Detalhes