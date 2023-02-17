import {Mainn} from "../../Components/CardDetail/Styled"
import Header from "../../Components/Header/Header";
import CardDetail from "../../Components/CardDetail/CardDetail";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function PokemonDetailPage() {

  const [detailPokemon, setDetailPokemon] = useState({})

  const pathParams = useParams()
  console.log(pathParams) // aparece um objeto com o nome

  const getPokemonsDetails = async() => {

    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pathParams.pokemonName}`);
    
      console.log(response.data)
      setDetailPokemon(response.data)
    } catch (error) {
      console.log(error)
    }
  } 

useEffect(() => {
  getPokemonsDetails()
  }, [])


    return (
    <>
      <Header/>
      <Mainn>
        <CardDetail detailPokemon={detailPokemon}/>
      </Mainn>
    </>
    )
  }
  
  export default PokemonDetailPage;