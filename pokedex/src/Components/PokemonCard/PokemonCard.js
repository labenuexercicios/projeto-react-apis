import React, { useEffect, useState } from "react"
import { Container, PokemonNumber, PokemonName, PokemonType, TypesContainer, Pokeball, CatchButton, Pokemon } from './styles'
import pokeball from "../../Assets/pngwing 2.png"
import { getTypes } from "../../Utils/ReturnPokemonType"
import axios from "axios"
import { getColors } from "../../Utils/ReturnCardColor"

const PokemonCard = (props) => {

  const [pokemonId, setPokemonId] = useState("")

  const [pokemonTypes, setPokemonTypes] = useState([])

  const [pokemonImage, setPokemonImage] = useState("")

  useEffect(() => {
    getPokemonDetails()
  }, [])

  const getPokemonDetails = async () => {
    try {

      const response = await axios.get(props.pokemon.url)      
      
      setPokemonId(response.data.id)
      setPokemonTypes(response.data.types)       
      setPokemonImage(response.data.sprites.front_default)  

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container color={getColors(pokemonTypes[0].type.name)}>            
      <div>
        <PokemonNumber>{pokemonId}</PokemonNumber>
        <PokemonName>{props.pokemon.name}</PokemonName>
        <TypesContainer>
            {pokemonTypes.map((type) => {              
                return <PokemonType key={pokemonId} src={getTypes(type.type.name)} alt='' />
            })}
        </TypesContainer>
        <p>Detalhes</p>
      </div>
      <div>
        <Pokemon src={pokemonImage} alt="" />
        <CatchButton>Capturar!</CatchButton>
      </div>
      <Pokeball src={pokeball} alt="pokeball" />
         
    </Container>    
   
  );
};

export default PokemonCard;