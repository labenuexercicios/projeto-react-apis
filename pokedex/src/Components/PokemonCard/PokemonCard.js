
import React, { useEffect, useState } from "react";
import {Container,PokemonNumber, PokemonName, PokemonType, TypesContainer, Pokeball, CatchButton, Pokemon} from './pokemonCardStyle'
import pokeball from '../../assets/pngwing 2.png'
import axios from "axios";
import {getTypes} from '../../utils/ReturnPokemonType'
import { getColors } from "C:/Users/Dev.Garr/Desktop/Labenu/projeto-react/projeto-react-apis/pokedex/src/utils/ReturnCardColor.js";

/* const cardColor = (type) =>{
 return getColors(type)
} */
const cardColor = (types) => {
  return types && types.length > 0 ? getColors(types[0].type.name) : undefined;
}
const PokemonCard = (props) => {

const {addPokedex, offPokedex, pokemonUrl} = props

const [get, setGet] = useState({})


const catchPokemon = async () =>{
  try {
    const response = await axios.get(pokemonUrl)
    setGet(response.data)    
    
  } catch (error) {
    console.log('Algo errado aconteceu!')
    console.log(error)
  }
}


useEffect(()=>{
  catchPokemon()
},[])


    return (
      <Container color={cardColor(get.types)}>
        <div>
          <PokemonNumber>{get.id}</PokemonNumber>
          <PokemonName>{get.name}</PokemonName>
          <TypesContainer>
              {get.types ? (
              get.types.map((type) => {
                
                  return <PokemonType key={type.type.name} src={getTypes(type.type.name)} alt='' />
              })
            ) : (
              <div>Carregando...</div>
            )}
          </TypesContainer>
          <p>Detalhes</p>
        </div>
        <div>
          <Pokemon src={get.sprites ? get.sprites.front_default : ''} alt="" />
          <CatchButton onClick={()=>addPokedex(get)}>Capturar!</CatchButton>
          
        </div>
        <Pokeball src={pokeball} alt="pokeball" />
      </Container>
    );
  };
  
  export default PokemonCard;