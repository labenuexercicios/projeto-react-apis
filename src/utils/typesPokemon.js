import poison from "../assets/pokemonTypes/poison.png"
import grass from "../assets/pokemonTypes/grass.png"
import bug from "../assets/pokemonTypes/bug.png";
import fire from "../assets/pokemonTypes/fire.png";
import flying from "../assets/pokemonTypes/flying.png";
import normal from "../assets/pokemonTypes/normal.png";
import water from "../assets/pokemonTypes/water.png";
import steel from "../assets/pokemonTypes/steel.png";
import rock from "../assets/pokemonTypes/rock.png";
import psychic from "../assets/pokemonTypes/psychic.png";
import ice from "../assets/pokemonTypes/ice.png";
import ground from "../assets/pokemonTypes/ground.png";
import ghost from "../assets/pokemonTypes/ghost.png";
import fighting from "../assets/pokemonTypes/fighting.png";
import fairy from "../assets/pokemonTypes/fairy.png";
import electric from "../assets/pokemonTypes/electric.png";
import dragon from "../assets/pokemonTypes/dragon.png";
import dark from "../assets/pokemonTypes/dark.png";

export const typesPokemon = (type) => {
  switch(type) {
    case "bug":
      return bug;
    case "fire":
      return fire;
    case "flying":
      return flying;
    case "grass":
      return grass;
    case "normal":
      return normal;
    case "poison":
      return poison;
    case "water":
      return water;
    case "steel":
      return steel;
    case "rock":
      return rock;
    case "psychic":
      return psychic;
    case "ice":
      return ice;
    case "ground":
      return ground;
    case "ghost":
      return ghost;
    case "fighting":
      return fighting;
    case "fairy":
      return fairy;
    case "electric":
      return electric;
    case "dragon":
      return dragon;
    case "dark":
      return dark;
    default:
      return water;
  }
};
    