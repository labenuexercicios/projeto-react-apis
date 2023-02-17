import bug from "../Assets/PokemonTypes/bug.png";
import dark from "../Assets/PokemonTypes/dark.png";
import dragon from "../Assets/PokemonTypes/dragon.png";
import electric from "../Assets/PokemonTypes/electric.png";
import fairy from "../Assets/PokemonTypes/fairy.png";
import fighting from "../Assets/PokemonTypes/fighting.png";
import fire from "../Assets/PokemonTypes/fire.png";
import flying from "../Assets/PokemonTypes/flying.png";
import ghost from "../Assets/PokemonTypes/ghost.png";
import grass from "../Assets/PokemonTypes/grass.png";
import ground from "../Assets/PokemonTypes/ground.png";
import ice from "../Assets/PokemonTypes/ice.png";
import normal from "../Assets/PokemonTypes/normal.png";
import poison from "../Assets/PokemonTypes/poison.png";
import psychic from "../Assets/PokemonTypes/psychic.png";
import rock from "../Assets/PokemonTypes/rock.png";
import steel from "../Assets/PokemonTypes/steel.png";
import water from "../Assets/PokemonTypes/water.png";

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
    case "steel":
      return steel;
    default:
      return water;
  }
};
