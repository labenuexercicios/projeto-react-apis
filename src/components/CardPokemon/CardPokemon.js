import axios from "axios";
import { useEffect, useState } from "react";
import { CardContainer, ImagemPokemon, Name, Types, ImgButton } from "./CardPokemonStyled";
import bug from "../../icons/bug.svg";
import dark from "../../icons/dark.svg";
import dragon from "../../icons/dragon.svg";
import eletric from "../../icons/eletric.svg";
import fairy from "../../icons/fairy.svg";
import fighting from "../../icons/fighting.svg";
import fire from "../../icons/fire.svg";
import flying from "../../icons/flying.svg";
import ghost from "../../icons/ghost.svg";
import grass from "../../icons/grass.svg";
import ground from "../../icons/ground.svg";
import ice from "../../icons/ice.svg";
import normal from "../../icons/normal.svg";
import poison from "../../icons/poison.svg";
import psychic from "../../icons/psychic.svg";
import rock from "../../icons/rock.svg";
import steel from "../../icons/steel.svg";
import water from "../../icons/water.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetailsPage } from "../../routes/coordinator";

export const CardPokemon = (props) => {
  const { pokemon } = props;
  const [info, setInfo] = useState();
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location);

  useEffect(() => {
    axios
      .get(pokemon.url)
      .then((response) => {
        setInfo(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const colorCard = ()=>{

    switch (info?.types[0].type.name) {
        case 'grass':
        return '#729F92' //ok  
        case 'fire': 
        return '#EAAB7D' //ok
        case 'water':
        return '#71C3FF' //ok  
        case 'poison':
        return '#AD61AE'   
        case 'flying':
        return '#6892B0'   
        case 'bug':
        return '#76A866' //ok  
        case 'normal':
        return '#BF9762'   
        case 'dark':
        return '#5C5365'   
        case 'dragon':
        return '#0A6CBF'   
        case 'electric':
        return '#F4D23B'                             
        default:
        return '#729F92'
    }
}

  return (
    <CardContainer colorCard={colorCard}>
      <Name>
        <p>#{info?.id < 10 ? '0' + String(info?.id):info?.id}</p>
        <h2>{pokemon.name}</h2>
        <Types>
          <div>
          {info?.types.map((type) => {
            switch (type.type.name) {
              case "grass":
                return <img src={grass} alt={type.type.name} />;
              case "fire":
                return <img src={fire} alt={type.type.name} />;
              case "water":
                return <img src={water} alt={type.type.name} />;
              case "poison":
                return <img src={poison} alt={type.type.name} />;
              case "flying":
                return <img src={flying} alt={type.type.name} />;
              case "bug":
                return <img src={bug} alt={type.type.name} />;
              case "normal":
                return <img src={normal} alt={type.type.name} />;
              case "dark":
                return <img src={dark} alt={type.type.name} />;
              case "dragon":
                return <img src={dragon} alt={type.type.name} />;
              case "electric":
                return <img src={eletric} alt={type.type.name} />;
              case "fairy":
                return <img src={fairy} alt={type.type.name} />;
              case "fighting":
                return <img src={fighting} alt={type.type.name} />;
              case "ghost":
                return <img src={ghost} alt={type.type.name} />;
              case "ground":
                return <img src={ground} alt={type.type.name} />;
              case "ice":
                return <img src={ice} alt={type.type.name} />;
              case "psychic":
                return <img src={psychic} alt={type.type.name} />;
              case "rock":
                return <img src={rock} alt={type.type.name} />;
              case "steel":
                return <img src={steel} alt={type.type.name} />;
              default:
                return <img src={""} alt={type.type.name} />;
            }
          })}
          </div>
          <a onClick={()=> goToDetailsPage(navigate, info.name)}>Detalhes</a>
        <button>Capturar!</button>
        </Types>
      </Name>
      <ImagemPokemon src={info?.sprites.other['official-artwork'].front_default} alt="pokemon"/>
    </CardContainer>
  );
};
