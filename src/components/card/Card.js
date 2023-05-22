import React from 'react'
import { Link } from 'react-router-dom'
import {
    Container,
    PokemonNumber,
    PokemonName,
    PokemonType,
    TypesContainer,
    Pokeball,
    CatchButton,
    Pokemon
  } from "./style";
  import pokeball from "../../assets/pokebola-bg.png"
  import getImage  from '../../utils/ReturnPokemonType';
  import { useLocation } from 'react-router-dom';
  import { AddModal } from '../modal/AddModal';
  import { useDisclosure, isOpen, onOpen, onClose } from '@chakra-ui/react';


export function Card({pokemon, name, id, image, types, addPokemon, removePokemon, pokedex}) {
 const location = useLocation();

const {isOpen, onOpen, onClose} = useDisclosure()

  const backgroundCard = () =>{
  if(types === "grass") return "#729F92"
  if(types === "fire") return "#EAAB7D"
  if(types === "water") return "#33A4F5"
  if(types === "bug") return "#76A866"
  if(types === "normal") return "#BF9762"
  if(types === "electric") return "#F4D23B"
  if(types === "ground") return "#D97745"
  if(types === "poison") return "#AD61AE"
}



return (
    <Container style={{backgroundColor: backgroundCard()}}>
      <div>
        <PokemonNumber style={{color:"white"}}>#{id}</PokemonNumber>
        <PokemonName style={{color:"white"}}>{name.charAt(0).toUpperCase()+name.slice(1)}</PokemonName>
        <TypesContainer>
            {pokemon.data.types.map((typeImage)=>(
             <PokemonType src={getImage[typeImage.type.name]} key={typeImage.type.name} alt={types}/>
            ))}
        </TypesContainer>
        <Link to={`/pokemon/${name}`}>
          <button style={{color:"white"}}> 
          Detalhes
          </button>
        </Link>
        
      </div>
      <div>
        <Pokemon
          src={image}
          alt=""
        />
        {location.pathname === "/" ?(
          <CatchButton onClick={()=> addPokemon(pokemon, onOpen, onClose)}>Capturar!</CatchButton>
        ):(
          <CatchButton onClick={()=> removePokemon(pokemon,onOpen,onClose)} style={{background:"#FF6262", color:"white"}}>Excluir!</CatchButton>
        )}
      </div>
      <Pokeball src={pokeball} alt="pokeball" />
      <AddModal isOpen={isOpen} onClose={onClose} pokemon={pokemon}/>
    </Container>
  );
}
