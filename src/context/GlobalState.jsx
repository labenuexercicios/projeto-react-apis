
import { useEffect, useState } from "react";
import bug from "../assets/pokemon-types/bug.png";
import dark from "../assets/pokemon-types/dark.png";
import dragon from "../assets/pokemon-types/dragon.png";
import electric from "../assets/pokemon-types/electric.png";
import fairy from "../assets/pokemon-types/fairy.png";
import fighting from "../assets/pokemon-types/fighting.png";
import fire from "../assets/pokemon-types/fire.png";
import flying from "../assets/pokemon-types/flying.png";
import ghost from "../assets/pokemon-types/ghost.png";
import grass from "../assets/pokemon-types/grass.png";
import ground from "../assets/pokemon-types/ground.png";
import ice from "../assets/pokemon-types/ice.png";
import normal from "../assets/pokemon-types/normal.png";
import poison from "../assets/pokemon-types/poison.png";
import psychic from "../assets/pokemon-types/psychic.png";
import rock from "../assets/pokemon-types/rock.png";
import steel from "../assets/pokemon-types/steel.png";
import water from "../assets/pokemon-types/water.png";
import { BASE_URL } from "../constants/constants";
import GlobalContext from "./GlobalContext";
import axios from "axios";

export default function GlobalState(props) {
  
  const [pokedex, setPokedex] = useState([]);
  const [type1, setType1] = useState("");
  const [type2, setType2] = useState("");
  const [detail, setDetail] = useState({});

  const [pokemons, setPokemons] = useState([]);  

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    try {
      const res = await axios.get(BASE_URL);
      setPokemons(res.data.results);      
    } catch (error) {
      alert(error.response);
    }
  };

  const noPokedex = (pokemonName) => {
    const foundPokemon = pokedex.filter(
      (pokemon) => pokemon.name === pokemonName
    );
    if (foundPokemon.length > 0) {
      return false;
    } else {
      return true;
    }
  };

  const capturePokemon = (pokemonName) => {
    const newPokedex = [...pokedex, pokemonName];
    setPokedex(newPokedex);
  };

  const deletPokemon = (pokemonName) => {
    const newPokedex = pokedex.filter(
      pokedex => pokedex.name !== pokemonName.name
    );
    setPokedex(newPokedex);
  };

  
  const getTypes = (type) => {
    switch (type) {
      case "bug":
        return bug;
      case "dark":
        return dark;
      case "dragon":
        return dragon;
      case "electric":
        return electric;
      case "fairy":
        return fairy;
      case "fighting":
        return fighting;
      case "fire":
        return fire;
      case "flying":
        return flying;
      case "ghost":
        return ghost;
      case "grass":
        return grass;
      case "ground":
        return ground;
      case "ice":
        return ice;
      case "normal":
        return normal;
      case "poison":
        return poison;
      case "psychic":
        return psychic;
      case "rock":
        return rock;
      case "steel":
        return steel;
      case "water":
        return water;
      default:
        return water;
    }
  };

  const colorProgress = (statName) => {
    switch (statName) {
      case "hp":
        return "#ff7c2e";
      case "attack":
        return "#ff7c2e";
      case "defense":
        return "#ff7c2e";
      case "special-attack":
        return "#ffdd69";
      case "special-defense":
        return "#d9bc59";
      case "speed":
        return "#e06926";
      default:
        return "yellow";
    }
  };

  const getColors = (type) => {
    switch (type) {
      case "bug":
        return "#76A866";
      case "dark":
        return "#5C5365";
      case "dragon":
        return "#004170";
      case "electric":
        return "#F4D23B";
      case "fairy":
        return "#EC8FE6";
      case "fighting":
        return "#CE4069";
      case "fire":
        return "#EAAB7D";
      case "flying":
        return "#6892B0";
      case "ghost":
        return "#5269AC";
      case "grass":
        return "#729F92";
      case "ground":
        return "#D97745";
      case "ice":
        return "#74CEC0";
      case "normal":
        return "#BF9762";
      case "poison":
        return "#AD61AE";
      case "psychic":
        return "#F67176";
      case "rock":
        return "#C7B78B";
      case "steel":
        return "#BBBBBB";
      case "water":
        return "#71C3FF";
      default:
        return "#8A8A8A";
    }
  };
  const abbreviate = (abbreviateStats) => {
    switch (abbreviateStats) {
      case "Hp":
        return "Hp:";
      case "Attack":
        return "Attack:";
      case "Defense":
        return "Defense:";
      case "Special-attack":
        return "Sp.Atk:";
      case "Special-defense":
        return "Sp.Def:";
      case "Speed":
        return "Speed:";
      default:
        break;
    }
  };

  const ModifayFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const data = {
    pokedex,
    type1,
    type2,
    detail,
    pokemons,
    setType1,
    setType2,
    setDetail,
    noPokedex,
    capturePokemon,
    deletPokemon,
    abbreviate,
    ModifayFirstLetter,
    getColors,
    getTypes,
    colorProgress
}

  return (
    <GlobalContext.Provider value={data}>
        {props.children}
    </GlobalContext.Provider>
)
}
