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

  export const getTypes = (type) => {
    switch(type) {
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