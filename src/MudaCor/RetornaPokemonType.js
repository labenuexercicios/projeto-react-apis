import bug from "../assets/pokemon-tipo/bug.png"
import dark from "../assets/pokemon-tipo/dark.png";
import dragon from "../assets/pokemon-tipo/dragon.png";
import electric from "../assets/pokemon-tipo/electric.png";
import fairy from "../assets/pokemon-tipo/fairy.png";
import fighting from "../assets/pokemon-tipo/fighting.png";
import fire from "../assets/pokemon-tipo/fire.png";
import flying from "../assets/pokemon-tipo/flying.png";
import ghost from "../assets/pokemon-tipo/ghost.png";
import grass from "../assets/pokemon-tipo/grass.png";
import ground from "../assets/pokemon-tipo/ground.png";
import ice from "../assets/pokemon-tipo/ice.png";
import normal from "../assets/pokemon-tipo/normal.png";
import poison from "../assets/pokemon-tipo/poison.png";
import psychic from "../assets/pokemon-tipo/psychic.png";
import rock from "../assets/pokemon-tipo/rock.png";
import steel from "../assets/pokemon-tipo/steel.png";
import water from "../assets/pokemon-tipo/water.png";


export const getTypes = (type) => {
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
      case "teel":
        return steel;
        case "water":
          return water;
        default:
        //   return water;
    }
  };