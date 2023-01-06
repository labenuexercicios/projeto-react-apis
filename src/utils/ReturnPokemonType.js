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
      case "Bug":
        return bug;
      case "Dark":
        return dark;
      case "Dragon":
        return dragon;
      case "Electric":
        return electric;
      case "Fairy":
        return fairy;
      case "Fighting":
        return fighting;
      case "Fire":
        return fire;
      case "Flying":
        return flying;
      case "Ghost":
        return ghost;
      case "Grass":
        return grass;
      case "Ground":
        return ground;
      case "Ice":
        return ice;
      case "Normal":
        return normal;
      case "Poison":
        return poison;
      case "Psychic":
        return psychic;
      case "Rock":
        return rock;
      case "Steel":
        return steel;
      case "Water":
        return water;
      default:
        return water;
    }
  };

