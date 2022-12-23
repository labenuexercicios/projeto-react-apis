import bug from "../Assets/pokemon-types/bug.png";
import dark from "../Assets/pokemon-types/dark.png";
import dragon from "../Assets/pokemon-types/dragon.png";
import electric from "../Assets/pokemon-types/electric.png";
import fairy from "../Assets/pokemon-types/fairy.png";
import fighting from "../Assets/pokemon-types/fighting.png";
import fire from "../Assets/pokemon-types/fire.png";
import flying from "../Assets/pokemon-types/flying.png";
import ghost from "../Assets/pokemon-types/ghost.png";
import grass from "../Assets/pokemon-types/grass.png";
import ground from "../Assets/pokemon-types/ground.png";
import ice from "../Assets/pokemon-types/ice.png";
import normal from "../Assets/pokemon-types/normal.png";
import poison from "../Assets/pokemon-types/poison.png";
import psychic from "../Assets/pokemon-types/psychic.png";
import rock from "../Assets/pokemon-types/rock.png";
import steel from "../Assets/pokemon-types/steel.png";
import water from "../Assets/pokemon-types/water.png";

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

