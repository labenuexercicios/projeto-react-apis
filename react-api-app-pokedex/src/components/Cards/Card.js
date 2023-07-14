import React, {useEffect, useState} from 'react';
import { motion } from 'framer-motion';
// import { Card } from 'react-bootstrap';
import { Cardcontainer, TypeImg, Pokeball, Cardimg, Pokenumber, Pokecontenttypes, Alltypes, Pokenames, Detailsbutton, Capturebutton, ButtonRemovePokemon } from '../../components/Cards/styledcard';
import { Link } from 'react-router-dom';
import pokeball from "../../Images/pokeball.png";
import { getTypes } from '../../routes/getTypes';
import { useNavigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

export const Card = ({pokemon}) => {
  // console.log('teste array pokemon',pokemon)
  const context = useContext(GlobalContext)
  const location = useLocation()
  const navigate = useNavigate();
  const navigateToPokedex =()=>{
    navigate("/pokedex");
}

  const getCardColors = () => {
  switch(pokemon.types[0].type.name) {
    case "bug":
      return "#76A866";
    case "fire":
      return "#EAAB7D";
    case "flying":
      return "#6892B0";
    case "grass":
      return "#729F92";
    case "normal":
      return "#BF9762";
    case "poison":
      return "#729F92";
    case "water":
      return "#71C3FF";
    default:
      return "#8A8A8A";
  }
};

  const getColors = (type) => {
  switch(type) {
    case "bug":
      return "#316520";
    case "dark":
      return "#5C5365";
    case "dragon":
      return "#0A6CBF";
    case "electric":
      return "#F4D23B";
    case "fairy":
      return "#EC8FE6";
    case "fighting":
      return "#CE4069";
    case "fire":
      return "#F44900";
    case "flying":
      return "#6892B0";
    case "ghost":
      return "#5269AC";
    case "grass":
      return "#70B873";
    case "ground":
      return "#D97745";
    case "ice":
      return "#74CEC0";
    case "normal":
      return "#8A8A8A";
    case "poison":
      return "#AD61AE";
    case "psychic":
      return "#F67176";
    case "rock":
      return "#C7B78B";
    case "steel":
      return "#BBBBBB";
    case "water":
      return "#33A4F5";
    default:
      return "#74CEC0";
  }
};


  return (
    <>
    <Cardcontainer item xs={12} md={4} lg={2} color={getCardColors}> 
      <div> 
      <Pokenumber>
      <p>#0{pokemon.id}</p>
      </Pokenumber>
    <div>
      <Pokenames>
          <strong >
             {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </strong>
      </Pokenames>
        </div>
        <Pokecontenttypes color={getColors}>
          {pokemon.types.map(pokemonType => <Alltypes color={getColors(pokemonType.type.name)}>
            {pokemonType.type.name}
          </Alltypes>)}
          {pokemon.types.map(pokemonType => { return <TypeImg style={{color: "#FFF"}} src={getTypes(pokemonType.type.name.toLowerCase())}/>}).sort((a,b) => a > b ? 1 : -1)}
        </Pokecontenttypes>
      <Cardimg
      src={pokemon.sprites.other["official-artwork"].front_default}
      />
      <Detailsbutton>
      <div><Link to={`/details/${pokemon.id}`}>Detalhes</Link></div>
      </Detailsbutton>
      <Capturebutton> <Link to={`/pokedex/${pokemon.id}`}>Capturar!</Link></Capturebutton>
                          {/* :
                          <ButtonRemovePokemon onClick={()=>context.removeFromPokedex(pokemon)}>Excluir!</ButtonRemovePokemon> */}
      
      <Pokeball src={pokeball} alt='pokeball'/>
      
      </div>
    </Cardcontainer>
    </>  
    )
}

// export default Card;