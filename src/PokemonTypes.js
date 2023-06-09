import bug from "./icons/bug.png"
import dark from "./icons/dark.png"
import dragon from "./icons/dragon.png"
import electric from "./icons/electric.png"
import fairy from "./icons/fairy.png"
import fighting from "./icons/fighting.png"
import fire from "./icons/fire.png"
import flying from "./icons/flying.png"
import ghost from "./icons/ghost.png"
import grass from "./icons/grass.png"
import ground from "./icons/ground.png"
import ice from "./icons/ice.png"
import normal from "./icons/normal.png"
import poison from "./icons/poison.png"
import psychic from "./icons/psychic.png"
import rock from "./icons/rock.png"
import steel from "./icons/steel.png"
import water from "./icons/water.png"

export const PokemonTypes = (type) => {
    switch(type) {
      case "bug":
        return < img src={bug} alt="bug"/>;
      case "dark":
        return < img src={dark} alt="bug"/>;
      case "dragon":
        return < img src={dragon} alt="bug"/>;
      case "electric":
        return < img src={electric} alt="bug"/>;
      case "fairy":
        return < img src={fairy} alt="bug"/>;
      case "fighting":
        return  < img src={fighting} alt="bug"/>;
      case "fire":
        return  < img src={fire} alt="bug"/>;
      case "flying":
        return  < img src={flying} alt="bug"/>;
      case "ghost":
        return  < img src={ghost} alt="bug"/>;
      case "grass":
        return  < img src={grass} alt="bug"/>;
      case "ground":
        return < img src={ground} alt="bug"/>;
      case "ice":
        return  < img src={ice} alt="bug"/>;
      case "normal":
        return  < img src={normal} alt="bug"/>;
      case "poison":
        return  < img src={poison} alt="bug"/>;
      case "psychic":
        return < img src={psychic} alt="bug"/>;
      case "rock":
        return  < img src={rock} alt="bug"/>;
      case "steel":
        return  < img src={steel} alt="bug"/>;
      case "water":
        return  < img src={water} alt="bug"/>;
      default:
        return  < img src={water} alt="bug"/>;
    }
  };
