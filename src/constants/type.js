
import bug from "../pokemon-types/bug.png";
import dark from "../pokemon-types/dark.png";
import dragon from "../pokemon-types/dragon.png";
import electric from "../pokemon-types/electric.png";
import fairy from "../pokemon-types/fairy.png";
import fighting from "../pokemon-types/fighting.png";
import fire from "../pokemon-types/fire.png";
import flying from "../pokemon-types/flying.png";
import ghost from "../pokemon-types/ghost.png";
import grass from "../pokemon-types/grass.png";
import ground from "../pokemon-types/ground.png";
import ice from "../pokemon-types/ice.png";
import normal from "../pokemon-types/normal.png";
import poison from "../pokemon-types/poison.png";
import psychic from "../pokemon-types/psychic.png";
import rock from "../pokemon-types/rock.png";
import steel from "../pokemon-types/steel.png";
import water from "../pokemon-types/water.png";

export const getPokemonType = (type) => {
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