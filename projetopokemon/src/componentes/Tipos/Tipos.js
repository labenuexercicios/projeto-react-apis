import Steel from "../../icones/steel.svg";
import Water from "../../icones/water.svg";
import Dragon from "../../icones/dragon.svg";
import Electric from "../../icones/electric.svg";
import Fairy from "../../icones/fairy.svg";
import Ghost from "../../icones/ghost.svg";
import Fire from "../../icones/fire.svg";
import Ice from "../../icones/ice.svg";
import Bug from "../../icones/bug.svg";
import Fighting from "../../icones/fighting.svg";
import Normal from "../../icones/normal.svg";
import Rock from "../../icones/rock.svg";
import Grass from "../../icones/grass.svg";
import Psychic from "../../icones/psychic.svg";
import Dark from "../../icones/dark.svg";
import Ground from "../../icones/ground.svg";
import Poison from "../../icones/poison.svg";
import Flying from "../../icones/flying.svg";

export const TiposPokedex = (type) => {
  switch (type) {
    case "flying":
      return Flying;
    case 'bug':
      return Bug;
    case "dark":
      return Dark;
    case "dragon":
      return Dragon;
    case "electric":
      return Electric;
    case "fairy":
      return Fairy;
    case "fighting":
      return Fighting;
    case "fire":
      return Fire;
    case "ghost":
      return Ghost;
    case "grass":
      return Grass;
    case "ground":
      return Ground;
    case "ice":
      return Ice;
    case "normal":
      return Normal;
    case "poison":
      return Poison;
    case "psychic":
      return Psychic;
    case "rock":
      return Rock;
    case "steel":
      return Steel;
    case "water":
      return Water;
    default:
      return Water;
  }
};